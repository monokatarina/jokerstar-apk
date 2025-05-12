import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNotifications } from '../../contexts/NotificationContext';
import { FiBell, FiCheck, FiTrash2, FiX } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useNavigate } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';


// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`;

// Styled Components
const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--danger);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const NotificationButton = styled.button`
  position: relative;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Dropdown = styled.div`
  position: fixed;
  top: ${Capacitor.isNativePlatform() ? '60px' : 'calc(100% + 10px)'};
  right: 10px;
  width: ${Capacitor.isNativePlatform() ? 'calc(100% - 20px)' : '380px'};
  max-height: ${Capacitor.isNativePlatform() ? '70vh' : '500px'};
  overflow: hidden;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 1001;
  animation: ${fadeIn} 0.2s ease-out;
  border: 1px solid var(--border-light);
`;

const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid var(--border-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  position: sticky;
  top: 0;
  background: var(--card-bg);
  z-index: 1;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${({ $danger }) => ($danger ? 'var(--danger)' : 'var(--primary)')};
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  border-radius: 6px;
  
  &:active {
    background: ${({ $danger }) => ($danger ? 'rgba(255, 69, 0, 0.1)' : 'rgba(0, 123, 255, 0.1)')};
  }
`;

const NotificationList = styled.div`
  max-height: calc(${Capacitor.isNativePlatform() ? '70vh' : '400px'} - 60px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 2px;
  }
`;

const NotificationItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid var(--border-light);
  cursor: pointer;
  display: flex;
  gap: 12px;
  position: relative;
  background: ${({ $unread }) => ($unread ? 'rgba(255, 69, 0, 0.05)' : 'transparent')};
  border-left: 3px solid
    ${({ $type }) => 
      $type === 'like' ? 'var(--like-color)' :
      $type === 'comment' ? 'var(--comment-color)' :
      $type === 'reply' ? 'var(--reply-color)' :
      'var(--primary)'};
  
  &:active {
    background: rgba(255, 69, 0, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-light);
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const Text = styled.div`
  font-size: 15px;
  line-height: 1.4;
`;

const HighlightText = styled.span`
  color: var(--primary);
  font-weight: 500;
`;

const QuoteText = styled.div`
  font-style: italic;
  margin-top: 6px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border-left: 2px solid var(--border-light);
  color: var(--text-light);
  font-size: 14px;
`;

const Time = styled.div`
  font-size: 13px;
  color: var(--text-lighter);
  margin-top: 6px;
`;

const ReadIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  
  svg {
    color: var(--primary);
    opacity: ${({ $unread }) => ($unread ? 0 : 1)};
  }
`;

const EmptyState = styled.div`
  padding: 32px 16px;
  text-align: center;
  color: var(--text-lighter);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ClearConfirmation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1002;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  animation: ${fadeIn} 0.2s ease-out;
`;

const ConfirmationBox = styled.div`
  background: var(--card-bg);
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.3s ease-out;
`;

const ConfirmationText = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
`;

const ConfirmationButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const ConfirmationButton = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  flex: 1;
  
  &:first-child {
    background: var(--danger);
    color: white;
  }

  &:last-child {
    background: var(--border-light);
    color: var(--text);
  }
`;

const NotificationDropdown = () => {
  const {
    notifications,
    unreadCount,
    markAsRead,
    clearAllNotifications,
    loading
  } = useNotifications();
  
  const [isOpen, setIsOpen] = useState(false);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Fecha o dropdown quando clica fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Ajusta a status bar quando o dropdown é aberto
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      if (isOpen) {
        StatusBar.setBackgroundColor({ color: '#1E1E1E' });
      } else {
        StatusBar.setBackgroundColor({ color: '#00000000' });
      }
    }
  }, [isOpen]);

  // Marca como lido quando o dropdown é aberto
  useEffect(() => {
    if (isOpen && unreadCount > 0) {
      const unreadIds = notifications
        .filter(n => !n.read)
        .map(n => n._id);
      
      if (unreadIds.length > 0) {
        markAsRead(unreadIds);
      }
    }
  }, [isOpen, notifications, unreadCount, markAsRead]);

  const handleItemClick = (notification) => {
    if (notification.meme) {
      navigate(`/memes/${notification.meme._id}`);
    } else if (notification.comment) {
      navigate(`/memes/${notification.comment.meme}`, { 
        state: { highlightComment: notification.comment._id } 
      });
    } else if (notification.reply) {
      navigate(`/memes/${notification.reply.meme}`, { 
        state: { highlightReply: notification.reply._id } 
      });
    }
    setIsOpen(false);
  };

  const handleMarkAllRead = async () => {
    const allUnreadIds = notifications
      .filter(n => !n.read)
      .map(n => n._id);
    
    if (allUnreadIds.length > 0) {
      await markAsRead(allUnreadIds);
    }
  };

  const handleClearAll = async () => {
    await clearAllNotifications();
    setShowClearConfirmation(false);
    setIsOpen(false);
  };

  const renderNotificationContent = (notification) => {
    switch(notification.type) {
      case 'mention':
        return (
          <>
            <HighlightText>{notification.sender?.username}</HighlightText> te mencionou em um{' '}
            {notification.metadata?.context === 'comment' ? 'comentário' : 'meme'}
            {notification.metadata?.text && (
              <QuoteText>
                "{truncate(notification.metadata.text, 50)}"
              </QuoteText>
            )}
          </>
        );

      case 'like':
        return (
          <>
            <HighlightText>{notification.sender?.username || 'Alguém'}</HighlightText> curtiu seu meme
            {notification.meme?.caption && (
              <QuoteText>
                "{truncate(notification.meme.caption, 50)}"
              </QuoteText>
            )}
          </>
        );
      
      case 'like_grouped':
        return (
          <>
            Seu meme tem <HighlightText>{notification.metadata?.count || 'muitas'} curtidas</HighlightText>
            {notification.meme?.caption && (
              <QuoteText>
                "{truncate(notification.meme.caption, 50)}"
              </QuoteText>
            )}
          </>
        );

      case 'comment':
        return (
          <>
            <HighlightText>{notification.sender?.username || 'Alguém'}</HighlightText> comentou no seu meme: 
            {notification.comment?.text ? (
              <QuoteText>
                "{truncate(notification.comment.text, 60)}"
              </QuoteText>
            ) : (
              <QuoteText>Novo comentário</QuoteText>
            )}
          </>
        );

      case 'comment_grouped':
        return (
          <>
            Seu meme tem <HighlightText>{notification.metadata?.count || 'muitos'} comentários</HighlightText>
            {notification.meme?.caption && (
              <QuoteText>
                "{truncate(notification.meme.caption, 50)}"
              </QuoteText>
            )}
          </>
        );

      case 'reply':
        return (
          <>
            <HighlightText>{notification.sender?.username}</HighlightText> respondeu seu comentário:
            <QuoteText>
              "{notification.metadata?.text}"
            </QuoteText>
            {notification.comment && (
              <div style={{ marginTop: 4, fontSize: 12 }}>
                Em resposta a: "{notification.comment.text?.substring(0, 40)}..."
              </div>
            )}
          </>
        );

      default:
        return 'Nova notificação';
    }
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <NotificationButton onClick={() => setIsOpen(!isOpen)}>
        <FiBell size={24} />
        {unreadCount > 0 && <Badge>{unreadCount > 9 ? '9+' : unreadCount}</Badge>}
      </NotificationButton>
      
      <Dropdown $isOpen={isOpen}>
        <Header>
          <span>Notificações</span>
          <Actions>
            {notifications.length > 0 && (
              <ActionButton 
                $danger 
                onClick={() => setShowClearConfirmation(true)}
              >
                <FiTrash2 size={16} /> Limpar
              </ActionButton>
            )}
            {notifications.some(n => !n.read) && (
              <ActionButton onClick={handleMarkAllRead}>
                <FiCheck size={16} /> Lidas
              </ActionButton>
            )}
          </Actions>
        </Header>
        
        <NotificationList>
          {loading ? (
            <EmptyState>
              <FiBell size={24} />
              Carregando notificações...
            </EmptyState>
          ) : notifications.length === 0 ? (
            <EmptyState>
              <FiBell size={24} />
              Nenhuma notificação
            </EmptyState>
          ) : (
            notifications.map(notification => (
              <NotificationItem
                key={notification._id}
                $unread={!notification.read}
                $type={notification.type}
                onClick={() => handleItemClick(notification)}
              >
                <Avatar
                  src={
                    notification.sender?.profile?.avatar
                      ? notification.sender.profile.avatar.startsWith('https')
                        ? notification.sender.profile.avatar
                        : `${process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org'}${notification.sender.profile.avatar}`
                      : 'https://i.pravatar.cc/150?img=3'
                  }
                  alt={notification.sender?.username}
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.src = 'https://i.pravatar.cc/150?img=3';
                    e.target.onerror = null;
                  }}
                />
                
                <Content>
                  <Text>
                    {renderNotificationContent(notification)}
                  </Text>
                  <Time>
                    {formatDistanceToNow(new Date(notification.createdAt), {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </Time>
                </Content>
                
                <ReadIndicator $unread={!notification.read}>
                  <FiCheck size={18} />
                </ReadIndicator>
              </NotificationItem>
            ))
          )}
        </NotificationList>
      </Dropdown>

      {showClearConfirmation && (
        <ClearConfirmation>
          <ConfirmationBox>
            <ConfirmationText>
              Tem certeza que deseja limpar todas as notificações?
              <br />
              Esta ação não pode ser desfeita.
            </ConfirmationText>
            <ConfirmationButtons>
              <ConfirmationButton onClick={handleClearAll}>
                Limpar
              </ConfirmationButton>
              <ConfirmationButton onClick={() => setShowClearConfirmation(false)}>
                Cancelar
              </ConfirmationButton>
            </ConfirmationButtons>
          </ConfirmationBox>
        </ClearConfirmation>
      )}
    </div>
  );
};

export default NotificationDropdown;