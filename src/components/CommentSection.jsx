import React, { useState, useEffect, useCallback, memo, useRef, useMemo } from 'react';
import styled, { keyframes, css } from 'styled-components';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  FiSend, 
  FiCornerDownLeft, 
  FiMoreHorizontal,
  FiEdit2,
  FiTrash2,
  FiX,
  FiPaperclip,
  FiImage,
  FiLoader
} from 'react-icons/fi';
import PropTypes from 'prop-types';
const buildUrl = (url) => {
  if (!url) {
    console.warn('URL is empty or undefined');
    return '';
  }

  // Se já for uma URL completa, retorna diretamente
  if (url.startsWith('https')) {
    return url;
  }

  // Adiciona o prefixo da API apenas se necessário
  const apiUrl = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';
  const fullUrl = `${apiUrl}${url}`;
  
  return fullUrl;
};

// ============ Animations ============
const bounceHappy = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.2) rotate(5deg); }
  50% { transform: scale(1.3) rotate(0deg); }
  75% { transform: scale(1.2) rotate(-5deg); }
`;

const shakeAngry = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  20% { transform: scale(1.2) rotate(-10deg); }
  40% { transform: scale(1.3) rotate(10deg); }
  60% { transform: scale(1.2) rotate(-10deg); }
  80% { transform: scale(1.1) rotate(5deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// ============ Styled Components ============




const CommentContainer = styled.div`
  background: var(--card-bg);
  border-top: 1px solid var(--border-light);
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    border-top: none;
  }
`;

const CommentList = styled.div`
  max-height: 31.25rem;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding-right: 0.5rem;
  scroll-behavior: smooth; /* Adiciona scroll suave */
  -webkit-overflow-scrolling: touch; /* Melhora o scroll em iOS */

  @media (max-width: 768px) {
    max-height: none;
    height: 60vh; /* Altura fixa para mobile */
    padding-right: 0;
    margin-bottom: 0.5rem;
  }

  /* Estilização da barra de scroll (opcional) */
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-track {
    background: var(--background);
    border-radius: 0.625rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border-light);
    border-radius: 0.625rem;
    &:hover {
      background: var(--primary);
    }
  }
`;

const CommentItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  position: relative;
  transition: var(--transition);
  margin-left: ${props => props.$depth * 1.25}rem;
  border-left: ${props => props.$depth > 0 ? '2px solid var(--primary)' : 'none'};
  padding-left: ${props => props.$depth > 0 ? '0.75rem' : '0'};

  @media (max-width: 768px) {
    margin-left: ${props => props.$depth * 0.75}rem;
    padding-left: ${props => props.$depth > 0 ? '0.5rem' : '0'};
  }

  &:hover {
    transform: translateX(0.125rem);
  }

  ${props => props.$isPopular && css`
    order: -1;
    border: 2px solid var(--primary);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, rgba(var(--primary-rgb), 0.05), transparent);

    &::before {
      content: "🔥";
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      animation: ${pulse} 1.5s infinite;
    }
  `}
`;

const CommentAvatar = styled.img`
  width: ${props => props.$isReply ? '32px' : '40px'};
  height: ${props => props.$isReply ? '32px' : '40px'};
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  border: 2px solid var(--background);
  transition: all 0.2s;

  &:hover {
    border-color: #ff4500;
    transform: scale(1.05);
  }
`;

const CommentContent = styled.div`
  flex: 1;
  background: var(--comment-bg);
  padding: 0.75rem;
  border-radius: var(--radius-md);
  position: relative;
  box-shadow: var(--shadow-sm);
  overflow: visible;
  color: var(--text);
  transition: background 0.3s ease;
  
  ${props => props.$isReply && css`
    background: var(--reply-bg);
  `}
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
`;

const CommentUser = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 6px;
`;

const UserBadge = styled.span`
  font-size: 0.7rem;
  background: linear-gradient(135deg, #ff4500, #ff8c00);
  color: var(--card-bg); 
  padding: 2px 6px;
  border-radius: 12px;
`;

const CommentText = styled.p`
  margin: 8px 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text);
  white-space: pre-wrap;
  word-break: break-word;
  ${props => props.$isDeleted && 'font-style: italic; color: #999;'}
`;

const CommentTime = styled.small`
  display: block;
  font-size: 0.75rem;
  color: #999;
  margin-top: 4px;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  background: var(--input-bg);
  border-radius: var(--radius-lg);
  padding: 0.25rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid var(--border-light);

  @media (max-width: 768px) {
    position: sticky;
    bottom: 0;
    margin-top: 0.5rem;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    background: var(--card-bg);
    padding: 0.5rem;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
    border-color: var(--primary);
  }
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 0.95rem;
  outline: none;
  background: var(--input-bg);
  color: var(--input-text);
  transition: var(--transition);

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 16px; // Prevent zoom on iOS
    min-height: 44px; // Tamanho mínimo para toque
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ff4500, #ff8c00);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 5px rgba(255, 69, 0, 0.3);

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    margin-left: 4px;
  }

  &:hover {
    background: linear-gradient(135deg, #e03d00, #e07d00);
    transform: scale(1.05);
  }
`;

const ReplyButton = styled.button`
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 4px 8px;
  border-radius: 16px;
  transition: all 0.2s;

  &:hover {
    color: #ff4500;
    background: rgba(255, 69, 0, 0.1);
  }
`;

const ReplyForm = styled.form`
  display: flex;
  margin: 8px 0 16px 52px;
  background: #fff;
  border-radius: 24px;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: var(--transition);

  &:focus-within {
    box-shadow: 0 2px 12px rgba(255, 69, 0, 0.2);
  }
`;

const ReactionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const ReactionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.25rem 0.625rem;
  border-radius: 1rem;
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.1);
  }

  ${props => props.$type === 'like' && css`
    color: ${props.$active ? 'var(--like-color)' : 'var(--text-light)'};
    &:hover {
      background: rgba(var(--like-rgb), 0.1);
    }
    ${props.$active && css`
      animation: ${bounceHappy} 0.6s;
    `}
  `}

  ${props => props.$type === 'dislike' && css`
    color: ${props.$active ? 'var(--dislike-color)' : 'var(--text-light)'};
    &:hover {
      background: rgba(var(--dislike-rgb), 0.1);
    }
    ${props.$active && css`
      animation: ${shakeAngry} 0.6s;
    `}
  `}
`;

const ReactionCount = styled.span`
  font-size: 0.85rem;
  color: inherit;
  margin-left: 4px;
`;

const MoreOptionsButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    color: #ff4500;
    background: rgba(0, 0, 0, 0.05);
    transform: rotate(90deg);
  }
`;

const OptionsMenu = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: var(--card-bg);
  border: 1px solid var(--background);
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 120px;
  overflow: hidden;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px) translateY(-50%); }
    to { opacity: 1; transform: translateY(0) translateY(-50%); }
  }
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: none;
  border: none;
  text-align: left;
  color: var(--text);
  cursor: pointer;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    background: var(--background-light);
    color: var(--primary);
  }
`;

const EditForm = styled.div`
  margin-top: 8px;
`;

const EditTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  resize: none;
  font-family: inherit;
  font-size: 0.95rem;
  min-height: 5rem;
  margin-bottom: 0.5rem;
  background: var(--input-bg);
  color: var(--input-text);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const EditButtons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const SaveButton = styled.button`
  background: linear-gradient(135deg, #ff4500, #ff8c00);
  color: var(--card-bg); 
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 5px rgba(255, 69, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #e03d00, #e07d00);
    transform: translateY(-1px);
  }
`;

const CancelButton = styled.button`
  background: var(--background);
  color: var(--text-light);
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--background);
    transform: translateY(-1px);
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: var(--text-light);
  font-size: 0.9rem;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: var(--text-light);
  font-size: 0.9rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #ff3b30;
  font-size: 0.9rem;
`;

const DeletedMessage = styled.span`
  font-style: italic;
  color: #999;
`;

const CommentCount = styled.div`
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 16px;
  padding: 0 8px;
  font-weight: 500;
`;

const PopularBadge = styled.span`
  font-size: 0.7rem;
  background: linear-gradient(135deg, #ff8c00, #ff4500);
  color: background: var(--card-bg);
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SharedMemeContainer = styled.div`
  margin-top: 12px;
  border: 1px solid var(--background);
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  position: relative;
`;

const SharedMeme = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const SharedMemeCaption = styled.p`
  padding: 8px;
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
  background: #f9f9f9;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AttachButton = styled.button`
  background: var(--background);
  color: var(--text-light);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  &:hover {
    background: #e0e0e0;
    color: #ff4500;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--card-bg);
  border-radius: ${props => props.$isMobile ? '0' : '12px'};
  width: ${props => props.$isMobile ? '100%' : '80%'};
  max-width: 800px;
  max-height: ${props => props.$isMobile ? '90vh' : '80vh'};
  height: ${props => props.$isMobile ? '90vh' : 'auto'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: ${props => props.$isMobile ? 'fixed' : 'relative'};
  bottom: ${props => props.$isMobile ? '0' : 'auto'};
`;

const ModalHeader = styled.div`
  padding: ${props => props.$isMobile ? '12px 16px' : '16px'};
  border-bottom: 1px solid var(--background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: var(--card-bg);
  z-index: 10;
`;

const ModalTitle = styled.h3`
  font-size: ${props => props.$isMobile ? '1rem' : '1.25rem'};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-light);
  padding: ${props => props.$isMobile ? '4px' : '8px'};
`;

const MemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.$isMobile ? '100px' : '120px'}, 1fr));
  gap: ${props => props.$isMobile ? '6px' : '8px'};
  padding: ${props => props.$isMobile ? '12px' : '16px'};
  overflow-y: auto;
`;

const MemeItem = styled.div`
  position: relative;
  aspect-ratio: 1;
`;

const MemeThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${props => props.$selected ? '#ff4500' : 'transparent'};
  transition: all 0.2s;

  &:hover {
    transform: ${props => props.$isMobile ? 'none' : 'scale(1.05)'};
  }
`;

const ModalActions = styled.div`
  padding: ${props => props.$isMobile ? '12px' : '16px'};
  border-top: 1px solid var(--background);
  display: flex;
  justify-content: flex-end;
  gap: ${props => props.$isMobile ? '6px' : '8px'};
  position: sticky;
  bottom: 0;
  background: var(--card-bg);
`;

const MemeVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${props => props.$selected ? '#ff4500' : 'transparent'};
  transition: all 0.2s;
  background: #000;

  &:hover {
    transform: ${props => props.$isMobile ? 'none' : 'scale(1.05)'};
  }
`;

const MemeCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: ${props => props.$isMobile ? '2px 4px' : '4px'};
  font-size: ${props => props.$isMobile ? '0.6rem' : '0.7rem'};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ModalButton = styled.button`
  padding: ${props => props.$isMobile ? '6px 12px' : '8px 16px'};
  font-size: ${props => props.$isMobile ? '0.9rem' : '1rem'};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: ${props => props.$primary ? '#ff4500' : 'var(--background)'};
  color: ${props => props.$primary ? 'white' : 'var(--text)'};
  transition: all 0.2s;
  min-width: ${props => props.$isMobile ? '100px' : 'auto'};

  &:hover {
    background: ${props => props.$primary ? '#e03d00' : '#e0e0e0'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
// ============ MediaPreview Component ============
const MediaPreview = ({ file, meme, onRemove }) => {
  // Verifica se é mobile
  const isMobile = useMemo(() => window.innerWidth <= 768, []);

  // Estilos para o botão de remover
  const removeButtonStyle = {
    position: 'absolute',
    top: isMobile ? '8px' : '5px',
    right: isMobile ? '8px' : '5px',
    background: 'rgba(0,0,0,0.7)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: isMobile ? '32px' : '24px',
    height: isMobile ? '32px' : '24px',
    cursor: 'pointer',
    fontSize: isMobile ? '18px' : '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.1)'
    },
    ':active': {
      transform: 'scale(0.95)'
    }
  };

  // Container otimizado para mobile
  const MobileOptimizedContainer = styled(SharedMemeContainer)`
    max-width: 100%;
    margin: ${isMobile ? '8px 0' : '12px 0'};
    border-radius: ${isMobile ? '8px' : '12px'};
    overflow: hidden;
    position: relative;
    
    video, img {
      width: 100%;
      max-height: ${isMobile ? '50vh' : '60vh'};
      object-fit: contain;
      background: #f0f0f0;
    }
  `;

  // Caption otimizado para mobile
  const MobileCaption = styled(SharedMemeCaption)`
    padding: ${isMobile ? '10px' : '8px'};
    font-size: ${isMobile ? '0.9rem' : '0.8rem'};
    background: ${isMobile ? 'rgba(0,0,0,0.7)' : '#f9f9f9'};
    color: ${isMobile ? 'white' : 'var(--text-light)'};
  `;

  if (meme) {
    const isVideo = meme.mediaUrl?.endsWith('.mp4') || meme.mediaUrl?.includes('video/');
    
    return (
      <MobileOptimizedContainer>
        {isVideo ? (
          <video 
            controls 
            playsInline
            style={{ 
              width: '100%', 
              display: 'block',
              maxHeight: isMobile ? '50vh' : '60vh'
            }}
            crossOrigin="anonymous"
          >
            <source src={buildUrl(meme.mediaUrl)} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        ) : (
          <SharedMeme 
            src={buildUrl(meme.mediaUrl)}
            alt={meme.caption || 'Meme compartilhado'}
            crossOrigin="anonymous"
            style={{ maxHeight: isMobile ? '50vh' : '60vh' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
        {meme.caption && <MobileCaption>{meme.caption}</MobileCaption>}
        <button 
          onClick={onRemove}
          style={removeButtonStyle}
          aria-label="Remover mídia"
        >
          ×
        </button>
      </MobileOptimizedContainer>
    );
  }

  if (file) {
    const isVideo = file.type.startsWith('video/');
    const url = URL.createObjectURL(file);
    
    return (
      <MobileOptimizedContainer>
        {isVideo ? (
          <video 
            controls 
            playsInline
            style={{ 
              width: '100%', 
              display: 'block',
              maxHeight: isMobile ? '50vh' : '60vh'
            }}
          >
            <source src={url} type={file.type} />
            Seu navegador não suporta vídeos HTML5.
          </video>
        ) : (
          <img
            src={url}
            alt="Preview"
            style={{ 
              width: '100%', 
              display: 'block',
              maxHeight: isMobile ? '50vh' : '60vh'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
        <button 
          onClick={() => {
            onRemove();
            URL.revokeObjectURL(url);
          }}
          style={removeButtonStyle}
          aria-label="Remover mídia"
        >
          ×
        </button>
      </MobileOptimizedContainer>
    );
  }
  
  return null;
};

// ============ Comment Component ============
const Comment = memo(({ 
  comment, 
  depth = 0, 
  parentCommentId = null,
  currentUser,
  onEdit,
  onDelete,
  onReply,
  onReaction,
  editingId,
  editText,
  onEditChange,
  onSaveEdit,
  replyingTo,
  replyText,
  onReplyChange,
  onReplySubmit,
  showOptions,
  onToggleOptions,
  isPopular,
  replyTexts,
  onReplyMediaChange,
  onReplyMemeChange,
  replyMedia,
  replySelectedMeme,
  onOpenMemeSelector,
  userMemes,
  loadMoreReplies,
  loadingReplies,
  expandedReplies,
  setExpandedReplies
}) => {
  const navigate = useNavigate();
  const isEditing = editingId === comment._id;
  const isReplying = replyingTo === comment._id;
  const isReply = depth > 0;
  const isDeleted = comment.isDeleted;
  const MAX_DEPTH = 10;

  const safeUser = comment.user || { 
    _id: 'deleted', 
    username: "[Removido]", 
    profile: { avatar: 'https://i.pravatar.cc/150?img=3' } 
  };

  const canEditDelete = !isDeleted && currentUser && 
    (safeUser._id === currentUser._id || currentUser.isAdmin);

  const formatTime = useCallback((dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, []);

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
  }, []);

  // Verifica se há mais respostas para carregar
  const hasMoreReplies = comment.repliesCount > (comment.replies?.length || 0);

  return (
    <React.Fragment>
      <CommentItem $depth={depth} $isPopular={isPopular} data-testid={`comment-${comment._id}`}>
        <CommentAvatar 
          src={
            safeUser.profile?.avatar 
              ? (safeUser.profile.avatar.startsWith('https') 
                  ? safeUser.profile.avatar 
                  : `${process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org'}${safeUser.profile.avatar}`)
              : 'https://i.pravatar.cc/150?img=3'
          }
          alt={safeUser.username}
          $isReply={isReply}
          crossOrigin="anonymous"
          onError={(e) => {
            e.target.src = 'https://i.pravatar.cc/150?img=3';
          }}
          onClick={() => navigate(`/users/${safeUser._id}`)}
          style={{ cursor: 'pointer' }}
        />
        <CommentContent $isReply={isReply}>
          <CommentHeader>
            <CommentUser 
              onClick={() => navigate(`/users/${safeUser._id}`)}
              style={{ cursor: 'pointer' }}
            >
              @{safeUser.username}
              {safeUser.isVerified && <UserBadge>Verificado</UserBadge>}
              {isPopular && <PopularBadge>🔥 Popular</PopularBadge>}
            </CommentUser>
            
            {canEditDelete && (
              <MoreOptionsButton onClick={() => onToggleOptions(comment._id)} aria-label="Mais opções">
                <FiMoreHorizontal />
              </MoreOptionsButton>
            )}
          </CommentHeader>
          
          {showOptions === comment._id && (
            <OptionsMenu>
              <OptionButton onClick={() => onEdit(comment)}>
                <FiEdit2 size={14} /> Editar
              </OptionButton>
              <OptionButton onClick={() => onDelete(comment._id, isReply, parentCommentId)}>
                <FiTrash2 size={14} /> Excluir
              </OptionButton>
              <OptionButton onClick={() => onToggleOptions(null)}>
                <FiX size={14} /> Cancelar
              </OptionButton>
            </OptionsMenu>
          )}
          
          {isEditing ? (
            <EditForm>
              <EditTextarea
                value={editText}
                onChange={(e) => onEditChange(e.target.value)}
                autoFocus
                aria-label="Editar comentário"
              />
              <EditButtons>
                <CancelButton onClick={() => onEdit(null)}>
                  Cancelar
                </CancelButton>
                <SaveButton onClick={() => onSaveEdit(comment._id, isReply, parentCommentId)}>
                  Salvar
                </SaveButton>
              </EditButtons>
            </EditForm>
          ) : (
            <>
              <CommentText $isDeleted={isDeleted}>
                {isDeleted ? <DeletedMessage>{comment.text}</DeletedMessage> : comment.text}
              </CommentText>
              
              {comment.sharedMeme && comment.sharedMeme.mediaUrl && (
                <SharedMemeContainer>
                  {comment.sharedMeme.mediaType === 'video' || comment.sharedMeme.mediaUrl.endsWith('.mp4') ? (
                    <video 
                      controls 
                      style={{ width: '100%', display: 'block' }}
                      crossOrigin="anonymous"
                    >
                      <source src={buildUrl(comment.sharedMeme.mediaUrl)} type="video/mp4" />
                      Seu navegador não suporta vídeos HTML5.
                    </video>
                  ) : (
                    <SharedMeme 
                      src={buildUrl(comment.sharedMeme.mediaUrl)}
                      alt={comment.sharedMeme.caption || 'Meme compartilhado'}
                      crossOrigin="anonymous"
                      onError={(e) => {
                        console.error('Failed to load meme:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  {comment.sharedMeme.caption && (
                    <SharedMemeCaption>{comment.sharedMeme.caption}</SharedMemeCaption>
                  )}
                </SharedMemeContainer>
              )}
              
              <CommentTime>
                {formatDate(comment.createdAt)} às {formatTime(comment.createdAt)}
                {comment.isEdited && ' (editado)'}
              </CommentTime>
            </>
          )}
          
          {!isDeleted && (
            <ReactionButtons>
              <ReactionButton 
                onClick={() => onReaction(comment._id, 'like', isReply, parentCommentId)}
                $active={comment.userReaction === 'like'}
                $type="like"
                aria-label="Curtir"
              >
                {comment.userReaction === 'like' ? '😊' : '🙂'}
                <ReactionCount>{comment.likes?.length || 0}</ReactionCount>
              </ReactionButton>
              <ReactionButton 
                onClick={() => onReaction(comment._id, 'dislike', isReply, parentCommentId)}
                $active={comment.userReaction === 'dislike'}
                $type="dislike"
                aria-label="Não curtir"
              >
                {comment.userReaction === 'dislike' ? '😠' : '☹️'}
                <ReactionCount>{comment.dislikes?.length || 0}</ReactionCount>
              </ReactionButton>
              {currentUser && depth < MAX_DEPTH && (
                <ReplyButton onClick={() => onReply(comment._id, parentCommentId)}>
                  <FiCornerDownLeft size={12} />
                  Responder
                </ReplyButton>
              )}
            </ReactionButtons>
          )}
        </CommentContent>
      </CommentItem>

      {isReplying && depth < MAX_DEPTH && (
        <ReplyForm onSubmit={(e) => {
          e.preventDefault();
          onReplySubmit(comment._id);
        }}>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <CommentInput
              type="text"
              id={`reply-input-${comment._id}`}
              name={`replyTo${comment._id}`}
              value={replyTexts[comment._id] || ''}
              onChange={(e) => onReplyChange(comment._id, e.target.value)}
              placeholder="Escreva uma resposta..."
              aria-label="Responder comentário"
            />
            <AttachButton 
              type="button"
              onClick={() => document.getElementById(`reply-file-${comment._id}`).click()}
              aria-label="Anexar mídia"
            >
              <FiPaperclip size={18} />
            </AttachButton>
            <input
              type="file"
              id={`reply-file-${comment._id}`}
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  onReplyMediaChange(file, comment._id);
                  onReplyMemeChange(null, comment._id);
                }
              }}
              accept="image/*, video/*"
            />
            <AttachButton 
              type="button"
              onClick={() => onOpenMemeSelector(comment._id)}
              aria-label="Compartilhar meme"
            >
              <FiImage size={18} />
            </AttachButton>
            <SubmitButton type="submit" aria-label="Enviar resposta">
              <FiSend size={18} />
            </SubmitButton>
          </div>
          
          {(replyMedia[comment._id] || replySelectedMeme[comment._id]) && (
            <MediaPreview 
              file={replyMedia[comment._id]} 
              meme={replySelectedMeme[comment._id] ? 
                userMemes.find(m => m._id === replySelectedMeme[comment._id]) : null}
              onRemove={() => {
                onReplyMediaChange(null, comment._id);
                onReplyMemeChange(null, comment._id);
              }} 
            />
          )}
        </ReplyForm>
      )}

      {/* Área de respostas */}
      {comment.replies && Array.isArray(comment.replies) && comment.replies.length > 0 && (
        <div style={{ marginLeft: depth > 0 ? '1.25rem' : '0' }}>
          {/* Mostra apenas a primeira resposta */}
          {comment.replies.slice(0, expandedReplies[comment._id] ? comment.replies.length : 1).map(reply => (
            <Comment 
              key={reply._id}
              comment={reply}
              depth={depth + 1}
              parentCommentId={comment._id}
              currentUser={currentUser}
              onEdit={onEdit}
              onDelete={onDelete}
              onReply={onReply}
              onReaction={onReaction}
              editingId={editingId}
              editText={editText}
              onEditChange={onEditChange}
              onSaveEdit={onSaveEdit}
              replyingTo={replyingTo}
              replyTexts={replyTexts}
              onReplyChange={onReplyChange}
              onReplySubmit={onReplySubmit}
              showOptions={showOptions}
              onToggleOptions={onToggleOptions}
              isPopular={false}
              onReplyMediaChange={onReplyMediaChange}
              onReplyMemeChange={onReplyMemeChange}
              replyMedia={replyMedia}
              replySelectedMeme={replySelectedMeme}
              onOpenMemeSelector={onOpenMemeSelector}
              userMemes={userMemes}
              loadMoreReplies={loadMoreReplies}
              loadingReplies={loadingReplies}
            />
          ))}

          {/* Botão "Mostrar mais respostas" - aparece apenas se houver mais de 1 resposta */}
          {comment.replies.length > 1 && (
            <div style={{ 
              textAlign: 'center', 
              marginTop: '0.5rem',
              paddingLeft: depth > 0 ? '1.25rem' : '0'
            }}>
              <button
                onClick={() => setExpandedReplies(prev => ({
                  ...prev,
                  [comment._id]: !prev[comment._id]
                }))}
                disabled={loadingReplies[comment._id]}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.85rem',
                  borderRadius: '1rem',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  ':hover': {
                    backgroundColor: 'rgba(var(--primary-rgb), 0.1)'
                  },
                  ':disabled': {
                    opacity: 0.7,
                    cursor: 'not-allowed'
                  }
                }}
              >
                {loadingReplies[comment._id] ? (
                  <>
                    <FiLoader size={14} />
                    Carregando...
                  </>
                ) : (
                  expandedReplies[comment._id] 
                    ? 'Mostrar menos' 
                    : `Mostrar mais respostas (${comment.replies.length - 1})`
                )}
              </button>
            </div>
          )}

          {/* Botão para carregar mais respostas (se houver) */}
          {hasMoreReplies && !expandedReplies[comment._id] && (
            <div style={{ 
              textAlign: 'center', 
              marginTop: '0.5rem',
              paddingLeft: depth > 0 ? '1.25rem' : '0'
            }}>
              <button
                onClick={() => loadMoreReplies(comment._id)}
                disabled={loadingReplies[comment._id]}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.85rem',
                  borderRadius: '1rem',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  ':hover': {
                    backgroundColor: 'rgba(var(--primary-rgb), 0.1)'
                  },
                  ':disabled': {
                    opacity: 0.7,
                    cursor: 'not-allowed'
                  }
                }}
              >
                {loadingReplies[comment._id] ? (
                  <>
                    <FiLoader size={14} />
                    Carregando...
                  </>
                ) : (
                  `Carregar mais respostas (${comment.repliesCount - comment.replies.length})`
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
});

// ============ Meme Selector Modal Component ============
const MemeSelectorModal = ({ 
  memes, 
  selectedMeme, 
  onSelect, 
  onClose,
  isForReply = false 
}) => {
  const isMobile = useMemo(() => window.innerWidth <= 768, []);

  return (
    <ModalOverlay>
      <ModalContent $isMobile={isMobile}>
        <ModalHeader $isMobile={isMobile}>
          <ModalTitle $isMobile={isMobile}>Selecione um meme para compartilhar</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Fechar" $isMobile={isMobile}>
            <FiX size={isMobile ? 20 : 24} />
          </CloseButton>
        </ModalHeader>
        
        <MemeGrid $isMobile={isMobile}>
          {memes.map(meme => {
            const isVideo = meme.mediaType === 'video' || meme.mediaUrl?.endsWith('.mp4');
            const memeUrl = meme.mediaUrl.startsWith('https') 
              ? meme.mediaUrl 
              : `${process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org'}${meme.mediaUrl}`;
            
            return (
              <MemeItem key={meme._id} $isMobile={isMobile}>
                {isVideo ? (
                  <MemeVideo
                    $isMobile={isMobile}
                    $selected={selectedMeme === meme._id}
                    onClick={() => onSelect(meme._id, isForReply)}
                    crossOrigin="anonymous"
                  >
                    <source src={memeUrl} type="video/mp4" />
                  </MemeVideo>
                ) : (
                  <MemeThumbnail 
                    src={memeUrl}
                    onClick={() => onSelect(meme._id, isForReply)}
                    $selected={selectedMeme === meme._id}
                    $isMobile={isMobile}
                    crossOrigin="anonymous"
                    alt={meme.caption || 'Meme'}
                  />
                )}
                {meme.caption && (
                  <MemeCaption $isMobile={isMobile}>
                    {meme.caption}
                  </MemeCaption>
                )}
              </MemeItem>
            );
          })}
        </MemeGrid>
        
        <ModalActions $isMobile={isMobile}>
          <ModalButton 
            onClick={onClose}
            $isMobile={isMobile}
          >
            Cancelar
          </ModalButton>
          <ModalButton 
            $primary 
            onClick={() => {
              onSelect(selectedMeme, isForReply);
              onClose();
            }}
            disabled={!selectedMeme}
            $isMobile={isMobile}
          >
            {isForReply ? 'Compartilhar na Resposta' : 'Compartilhar'}
          </ModalButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
};

// ============ Main Component ============
const CommentSection = ({ memeId, onCommentSubmit,  onCommentCountChange  }) => {
  const { user: currentUser } = useAuth();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [showOptions, setShowOptions] = useState(null);
  const [parentCommentId, setParentCommentId] = useState(null);
  const [showMemeSelector, setShowMemeSelector] = useState(false);
  const [userMemes, setUserMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [commentMedia, setCommentMedia] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyTexts, setReplyTexts] = useState({});
  const [replyMedia, setReplyMedia] = useState({});
  const [replySelectedMeme, setReplySelectedMeme] = useState({});
  const [currentReplyForMeme, setCurrentReplyForMeme] = useState(null);
  const [expandedReplies, setExpandedReplies] = useState({});
  const [repliesPagination, setRepliesPagination] = useState({});
  const [loadingReplies, setLoadingReplies] = useState({});
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const commentListRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Funções auxiliares independentes
  const findComment = useCallback((comments, commentId) => {
    for (const comment of comments) {
      if (comment._id === commentId) return comment;
      if (comment.replies) {
        const found = findComment(comment.replies, commentId);
        if (found) return found;
      }
    }
    return null;
  }, []);

  // Hook para throttling (adicione isso fora do componente ou em um arquivo separado)
  const useThrottle = (callback, delay) => {
    const lastCall = useRef(0);
    return useCallback((...args) => {
      const now = new Date().getTime();
      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        callback(...args);
      }
    }, [callback, delay]);
  };

  // Função para lidar com o scroll
  const handleScroll = useThrottle(() => {
    setIsScrolling(true);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  }, 100);

  // Efeito para adicionar/remover o event listener
  useEffect(() => {
    const list = commentListRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      return () => {
        list.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    }
  }, [handleScroll]);

  // Função para scroll programático suave
  const scrollToComment = useCallback((commentId) => {
    if (isScrolling) return;
    
    const commentElement = document.getElementById(`comment-${commentId}`);
    if (commentElement && commentListRef.current) {
      commentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [isScrolling]);

  const loadMoreReplies = async (commentId) => {
    if (expandedReplies[commentId]) return;
    setLoadingReplies(prev => ({ ...prev, [commentId]: true }));
    
    try {
      const response = await api.get(`/memes/${memeId}/comments/${commentId}/replies`, {
        params: {
          page: (repliesPagination[commentId]?.page || 0) + 1,
          limit: 5
        }
      });
      
      const newReplies = response.data?.data || [];
      
      setComments(prev => {
        const updateReplies = (comments) => comments.map(c => {
          if (c._id === commentId) {
            return {
              ...c,
              replies: [...(c.replies || []), ...newReplies]
            };
          }
          if (c.replies) {
            return {
              ...c,
              replies: updateReplies(c.replies)
            };
          }
          return c;
        });
        return updateReplies(prev);
      });
    } catch (error) {
      console.error('Erro ao carregar respostas:', error);
    } finally {
      setLoadingReplies(prev => ({ ...prev, [commentId]: false }));
    }
  };

  const sortByPopularity = useCallback((comments) => {
    return [...comments].sort((a, b) => {
      const aScore = (a.likes?.length || 0) - (a.dislikes?.length || 0);
      const bScore = (b.likes?.length || 0) - (b.dislikes?.length || 0);
      return bScore - aScore;
    });
  }, []);

  const processComments = useCallback((comments) => {
    if (!Array.isArray(comments) || comments.length < 10) return comments || [];
    
    const sorted = sortByPopularity(comments);
    const mostPopular = sorted[0];
    const popularScore = (mostPopular.likes?.length || 0) - (mostPopular.dislikes?.length || 0);
    
    if (popularScore < 5) return comments;
    
    return sorted.map((comment, index) => ({
      ...comment,
      isPopular: index === 0,
      replies: Array.isArray(comment.replies) ? processComments(comment.replies) : []
    }));
  }, [sortByPopularity]);

  // Funções de API
  const fetchUserMemes = useCallback(async () => {
    if (!currentUser) return;
    try {
      const response = await api.get(`/users/${currentUser._id}/memes`);
      setUserMemes(response.data || []);
    } catch (error) {
      console.error('Erro ao buscar memes do usuário:', error);
    }
  }, [currentUser]);

  const fetchComments = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get(`/memes/${memeId}/comments`);
      
      // Garante que estamos trabalhando com um array
      const commentsArray = Array.isArray(response.data) 
        ? response.data 
        : response.data?.data || [];
      
      setComments(commentsArray);
      
    } catch (err) {
      setError('Falha ao carregar comentários');
      console.error('Erro ao buscar comentários:', err);
      setComments([]);
    } finally {
      setLoading(false);
    }
  }, [memeId]);
    // Handlers simples
  const handleCommentMediaChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setCommentMedia(file);
      setSelectedMeme(null);
    }
  }, []);

  const handleReplyMediaChange = useCallback((file, commentId) => {
    setReplyMedia(prev => ({
      ...(prev || {}), // Garante que prev não seja undefined
      [commentId]: file
    }));
    setReplySelectedMeme(prev => ({
      ...(prev || {}), // Garante que prev não seja undefined
      [commentId]: null
    }));
  }, []);

  const handleReplyMemeChange = useCallback((memeId, commentId) => {
    setReplySelectedMeme(prev => ({
      ...(prev || {}), // Garante que prev não seja undefined
      [commentId]: memeId
    }));
    setReplyMedia(prev => ({
      ...(prev || {}), // Garante que prev não seja undefined
      [commentId]: null
    }));
  }, []);

  const handleOpenMemeSelectorForReply = useCallback((commentId) => {
    setCurrentReplyForMeme(commentId);
    setShowMemeSelector(true);
    fetchUserMemes();
  }, [fetchUserMemes]);

  const handleSelectMeme = useCallback((memeId, isForReply = false) => {
    if (isForReply && currentReplyForMeme) {
      setReplySelectedMeme(prev => ({
        ...prev,
        [currentReplyForMeme]: memeId
      }));
    } else {
      setSelectedMeme(memeId);
      setCommentMedia(null);
    }
  }, [currentReplyForMeme]);

  // Handlers complexos
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    
    // Adiciona o texto (mesmo que vazio para compatibilidade com o backend)
    formData.append('text', commentText || '');

  
    if (commentMedia) {
      formData.append('media', commentMedia);
    }
    if (selectedMeme) {
      formData.append('sharedMeme', selectedMeme);
    }
  
    try {
      setError(null);
      await onCommentSubmit(formData);
      const response = await api.get(`/memes/${memeId}/comments`);
      const newCommentCount = response.data.length;
      if (onCommentCountChange) {
        onCommentCountChange(newCommentCount);
      }
      setCommentText('');
      setCommentMedia(null);
      setSelectedMeme(null);
      await fetchComments();
    } catch (error) {
      console.error('Erro ao enviar comentário:', error);
      setError(error.message || 'Erro ao enviar comentário');
    }
  }, [commentText, commentMedia, selectedMeme, onCommentSubmit, fetchComments, onCommentCountChange]);

  const handleReply = useCallback((commentId, parentId = null) => {
    setReplyingTo(prev => prev === commentId ? null : commentId);
    setParentCommentId(parentId);
    setReplyTexts(prev => ({
      ...prev,
      [commentId]: prev[commentId] || '' // Inicializa com string vazia se não existir
    }));
  }, []);
  
  const handleReplyChange = useCallback((commentId, text) => {
    setReplyTexts(prev => ({
      ...prev,
      [commentId]: text
    }));
  }, []);
  const handleReplySubmit = useCallback(async (commentId) => {
    const currentReplyText = replyTexts[commentId] || '';
    const currentReplyMeme = replySelectedMeme[commentId];
  
    if (!currentReplyText.trim() && !currentReplyMeme) {
      setError('Por favor, adicione texto ou um meme');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('text', currentReplyText);
      formData.append('parentId', commentId);
      
      if (currentReplyMeme) {
        formData.append('sharedMeme', currentReplyMeme);
      }
  
      const response = await api.post(`/memes/${memeId}/comments`, formData);
      const commentsResponse = await api.get(`/memes/${memeId}/comments`);
      if (onCommentCountChange) {
        onCommentCountChange(commentsResponse.data.length);
      }
      
      // Adiciona os dados do usuário atual à resposta
      const replyWithUser = {
        ...response.data,
        user: currentUser // Adiciona o usuário atual ao objeto de resposta
      };
  
      // Atualiza o estado dos comentários incluindo a nova resposta
      setComments(prevComments => {
        const updateReplies = (comments) => comments.map(c => {
          if (c._id === commentId) {
            return {
              ...c,
              replies: [...(c.replies || []), replyWithUser] // Usa replyWithUser em vez de response.data
            };
          }
          if (c.replies) {
            return {
              ...c,
              replies: updateReplies(c.replies)
            };
          }
          return c;
        });
        
        return updateReplies(prevComments);
      });
  
      // Limpa os estados
      setReplyTexts(prev => {
        const newState = {...prev};
        delete newState[commentId];
        return newState;
      });
      
      setReplySelectedMeme(prev => {
        const newState = {...prev};
        delete newState[commentId];
        return newState;
      });
  
      setReplyingTo(null);
    } catch (error) {
      setError('Erro ao enviar resposta');
      console.error('Erro:', error);
    }
  }, [memeId, replyTexts, replySelectedMeme, currentUser, onCommentCountChange]);

  const handleEdit = useCallback((comment) => {
    setEditingId(comment?._id || null);
    setEditText(comment?.text || '');
    setShowOptions(null);
  }, []);

  const handleSaveEdit = useCallback(async (commentId) => {
    try {
      setError(null);
      const response = await api.put(`/memes/${memeId}/comments/${commentId}`, { 
        text: editText 
      });
  
      const updateComments = (comments) => comments.map(c => {
        if (c._id === commentId) {
          return { ...c, ...response.data };
        }
        
        if (c.replies) {
          return {
            ...c,
            replies: updateComments(c.replies)
          };
        }
        
        return c;
      });
  
      setComments(updateComments(comments));
      setEditingId(null);
      setEditText('');
    } catch (error) {
      setError('Erro ao editar comentário');
      console.error('Erro ao editar comentário:', error);
    }
  }, [editText, memeId, comments]);

  const handleDelete = useCallback(async (commentId) => {
    try {
      setError(null);
      const response = await api.delete(`/memes/${memeId}/comments/${commentId}`);
  
      const updateComments = (comments) => comments.map(c => {
        if (c._id === commentId) {
          return { 
            ...response.data,
            replies: c.replies
          };
        }
        
        if (c.replies) {
          return {
            ...c,
            replies: updateComments(c.replies)
          };
        }
        
        return c;
      });
  
      setComments(updateComments(comments));
    } catch (error) {
      setError('Erro ao excluir comentário');
      console.error('Erro ao excluir comentário:', error);
    }
  }, [memeId, comments]);

  const handleReaction = useCallback(async (commentId, reaction, isReply = false, parentId = null) => {
    try {
      const currentComment = findComment(comments, commentId);
      const currentReaction = currentComment?.userReaction;
      
      // Determina a nova reação
      const newReaction = currentReaction === reaction ? 'none' : reaction;
      
      const endpoint = `/memes/${memeId}/comments/${commentId}/reaction`;
      const response = await api.post(endpoint, { reaction: newReaction });

      setComments(prevComments => {
        const updateCommentReactions = (comments) => comments.map(c => {
          if (c._id === commentId) {
            return { 
              ...c,
              likes: response.data.likesCount || c.likes,
              dislikes: response.data.dislikesCount || c.dislikes,
              userReaction: newReaction === 'none' ? null : newReaction
            };
          }
          
          if (c.replies) {
            return {
              ...c,
              replies: updateCommentReactions(c.replies)
            };
          }
          
          return c;
        });
        
        return updateCommentReactions(prevComments);
      });
    } catch (error) {
      console.error('Erro ao reagir ao comentário:', error);
    }
  }, [memeId, comments, findComment]);
// Efeitos
useEffect(() => {
  fetchComments();
}, [fetchComments, memeId]); // Adicionei memeId como dependência

// Otimização: Evitar recálculos desnecessários
const processedComments = useMemo(() => {
  return Array.isArray(comments) ? processComments(comments) : [];
}, [comments, processComments]);

// Verificar se é mobile com tratamento de SSR
const isMobile = useMemo(() => {
  return typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
}, []);

// Estado para controle do teclado virtual
const [keyboardActive, setKeyboardActive] = useState(false);

// Efeito para lidar com o teclado em mobile
useEffect(() => {
  if (!isMobile) return;

  const handleFocus = () => setKeyboardActive(true);
  const handleBlur = () => setKeyboardActive(false);

  const input = document.getElementById('main-comment-input');
  const fileInput = document.getElementById('comment-file-input');

  if (input) {
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
  }

  return () => {
    if (input) {
      input.removeEventListener('focus', handleFocus);
      input.removeEventListener('blur', handleBlur);
    }
    if (fileInput) {
      fileInput.removeEventListener('focus', handleFocus);
      fileInput.removeEventListener('blur', handleBlur);
    }
  };
}, [isMobile]);

// Componente para o botão de tentar novamente
const RetryButton = styled.button`
  margin-left: 10px;
  background: var(--primary);
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

// Componente para a mensagem de fim de lista
const EndOfListMessage = styled.div`
  text-align: center;
  padding: 10px;
  color: var(--text-light);
  font-size: 0.9rem;
`;

  return (
    <CommentContainer 
      data-testid="comment-section"
      style={{
        paddingBottom: keyboardActive ? '300px' : '0',
        transition: 'padding-bottom 0.3s ease'
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      <CommentCount aria-live="polite">
        {comments.length} {comments.length === 1 ? 'comentário' : 'comentários'}
      </CommentCount>
      
      {error && (
        <ErrorMessage role="alert">
          {error}
          <RetryButton 
            onClick={fetchComments}
            aria-label="Tentar carregar comentários novamente"
          >
            Tentar novamente
          </RetryButton>
        </ErrorMessage>
      )}
      
      <CommentList 
        ref={commentListRef}
        $isScrolling={isScrolling}
      >
        {loading ? (
          <LoadingMessage aria-busy="true">
            <div className="spinner" aria-hidden="true" />
            Carregando comentários...
          </LoadingMessage>
        ) : !Array.isArray(comments) || comments.length === 0 ? (
          <EmptyMessage>
            Nenhum comentário ainda. Seja o primeiro!
            {isMobile && (
              <div style={{ marginTop: '10px' }}>
                Role para baixo para comentar ↓
              </div>
            )}
          </EmptyMessage>
        ) : (
          <div role="list">
            {processedComments.map(comment => (
              <Comment 
                key={comment._id}
                comment={comment}
                depth={0}
                currentUser={currentUser}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onReply={handleReply}
                onReaction={handleReaction}
                editingId={editingId}
                editText={editText}
                onEditChange={setEditText}
                onSaveEdit={handleSaveEdit}
                replyingTo={replyingTo}
                replyTexts={replyTexts} 
                onReplyChange={handleReplyChange}
                onReplySubmit={handleReplySubmit}
                showOptions={showOptions}
                onToggleOptions={setShowOptions}
                isPopular={comment.isPopular || false}
                onReplyMediaChange={handleReplyMediaChange}
                onReplyMemeChange={handleReplyMemeChange}
                replyMedia={replyMedia}
                replySelectedMeme={replySelectedMeme}
                onOpenMemeSelector={handleOpenMemeSelectorForReply}
                userMemes={userMemes}
                loadMoreReplies={loadMoreReplies}
                loadingReplies={loadingReplies}
                expandedReplies={expandedReplies}
                setExpandedReplies={setExpandedReplies}
              />
            ))}
            {isMobile && comments.length > 3 && (
              <EndOfListMessage>
                Você chegou ao fim. Role para cima ↑
              </EndOfListMessage>
            )}
          </div>
        )}
      </CommentList>

    {currentUser && (
      <>
        <CommentForm onSubmit={handleSubmit} role="form">
          <CommentInput
            type="text"
            id="main-comment-input"
            name="mainComment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Escreva um comentário..."
            aria-label="Escrever comentário"
            data-testid="comment-input"
            aria-required="true"
          />
          <ActionButtons>
            <AttachButton 
              type="button" 
              onClick={() => document.getElementById('comment-file-input').click()}
              aria-label="Anexar mídia"
              data-testid="attach-media-button"
            >
              <FiPaperclip size={18} aria-hidden="true" />
            </AttachButton>
            <input
              type="file"
              id="comment-file-input"
              style={{ display: 'none' }}
              onChange={handleCommentMediaChange}
              accept="image/*, video/*"
              data-testid="media-input"
              aria-label="Selecionar arquivo de mídia"
            />
            <AttachButton 
              type="button"
              onClick={() => {
                setShowMemeSelector(true);
                fetchUserMemes();
              }}
              aria-label="Compartilhar meme"
              data-testid="meme-selector-button"
            >
              <FiImage size={18} aria-hidden="true" />
            </AttachButton>
            <SubmitButton 
              type="submit" 
              aria-label="Enviar comentário"
              disabled={!commentText.trim() && !commentMedia && !selectedMeme}
              data-testid="submit-comment-button"
              aria-disabled={!commentText.trim() && !commentMedia && !selectedMeme}
            >
              <FiSend size={18} aria-hidden="true" />
            </SubmitButton>
          </ActionButtons>
          
          {(commentMedia || selectedMeme) && (
            <MediaPreview 
              file={commentMedia} 
              meme={selectedMeme ? userMemes.find(m => m._id === selectedMeme) : null}
              onRemove={() => {
                setCommentMedia(null);
                setSelectedMeme(null);
              }}
              data-testid="media-preview"
            />
          )}
        </CommentForm>

        {showMemeSelector && (
          <MemeSelectorModal
            memes={userMemes}
            selectedMeme={currentReplyForMeme ? replySelectedMeme[currentReplyForMeme] : selectedMeme}
            onSelect={handleSelectMeme}
            onClose={() => {
              setShowMemeSelector(false);
              setCurrentReplyForMeme(null);
            }}
            isForReply={!!currentReplyForMeme}
            data-testid="meme-selector-modal"
          />
        )}
      </>
    )}
  </CommentContainer>
)};

CommentSection.propTypes = {
  memeId: PropTypes.string.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
  onCommentCountChange: PropTypes.func
};

export default CommentSection;