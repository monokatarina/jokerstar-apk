import React, { useState, useEffect, useCallback, memo, useRef, useMemo } from 'react';
import styled, { keyframes, css } from 'styled-components';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaSmile, FaAngry } from 'react-icons/fa';
import { 
  FiSend, 
  FiCornerDownLeft, 
  FiMoreHorizontal,
  FiEdit2,
  FiTrash2,
  FiX,
  FiPaperclip,
  FiImage,
  FiLoader,
  FiMessageCircle,
  FiChevronDown,  // Add this
  FiChevronUp,    // Add this
  FiPlusCircle    // Add this
} from 'react-icons/fi';
import PropTypes from 'prop-types';
const buildUrl = (url) => {
  if (!url) {
    console.warn('URL is empty or undefined');
    return '';
  }

  // Se já for uma URL completa
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:')) {
    // Forçar HTTPS substituindo http:// por https://
    return url.replace(/^http:\/\//i, 'https://');
  }

  // Remove barras iniciais para evitar duplicação
  const cleanPath = url.startsWith('/') ? url.substring(1) : url;
  
  // Adiciona o prefixo da API com HTTPS
  const apiUrl = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';
  return `${apiUrl}/${cleanPath}`;
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
  position: relative;
  padding: 16px;
  background: var(--card-bg);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 60px; /* Espaço para o formulário fixo */
  }
`;

const ExpandAllButton = styled.button`
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
  padding: 4px 8px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  border-radius: 12px;
  transition: all 0.2s;

  &:hover {
    background: rgba(var(--primary-rgb), 0.1);
  }

  svg {
    transition: transform 0.2s;
  }

  ${props => props.$expanded && css`
    svg {
      transform: rotate(180deg);
    }
  `}
`;

const CommentList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding-right: 0.5rem;
  scroll-behavior: smooth;
  
  /* Estilos de scrollbar */
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
    border-radius: 0.625rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 0.625rem;
    
    &:hover {
      background: var(--primary);
    }
  }

  @media (max-width: 768px) {
    max-height: none;
    margin-bottom: 0;
  }
`;
const CommentItem = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  position: relative;
  transition: var(--transition);

  ${props => props.$depth > 0 && css`
    margin-left: ${props.$depth * 12}px;
    padding-left: 8px;
    border-left: 2px solid var(--primary);
  `}

  @media (max-width: 768px) {
    margin-left: ${props => props.$depth * 0.25}rem;
    padding-left: ${props => props.$depth > 0 ? '0.125rem' : '0'};
  }

  &:hover {
    transform: none;
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
  width: ${props => props.$isReply ? '28px' : '32px'};
  height: ${props => props.$isReply ? '28px' : '32px'};
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  border: 2px solid var(--avatar-border);
  transition: all 0.2s;

  &:hover {
    border-color: var(--primary);
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
    border-left: 3px solid var(--primary);
    margin-left: 8px;
  `}
`;

const CommentHeader = styled.div`
  display: flex;
  flex-direction: column; /* Muda para coluna */
  gap: 2px; /* Espaço entre linhas */
  margin-bottom: 6px;
`;

const CommentUser = styled.div`
  font-weight: 700;
  font-size: 1.5 rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 6px;
`;

const UserBadge = styled.span`
  font-size: 0.65rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 2px 6px;
  border-radius: 12px;
  font-weight: 500;
`;

const CommentText = styled.p`
  margin: 6px 0 10px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text);
  white-space: pre-wrap;
  word-break: break-word;
  padding: 0 4px;
  ${props => props.$isDeleted && 'font-style: italic; color: var(--text-muted);'}
`;

const CommentTime = styled.small`
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 400;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: center;
  background: var(--input-bg);
  border-radius: var(--radius-lg);
  padding: 0.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  border: 1px solid var(--border-light);
  position: sticky;
  bottom: 0;
  z-index: 100;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    background: var(--card-bg);
    padding: 0.5rem;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
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
    font-size: 16px;
    min-height: 40px;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-xs);

  &:hover {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary-darker));
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ReplyForm = styled.form`
  display: flex;
  margin: 12px 0 16px 52px;
  background: var(--reply-form-bg);
  border-radius: var(--radius-lg);
  padding: 0.5rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid var(--border-light);

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
  }
`;

const ReactionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  justify-content: flex-start;
`;

const ReplyCount = styled.div`
  font-size: 0.8rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: var(--primary);
  }
`;

const ReplyIndicator = styled.div`
  position: absolute;
  left: -12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary);
  border-radius: 2px;
`;

const ReactionButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  transition: var(--transition);
  
  &:active, &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${props => props.$type === 'like' && css`
    color: ${props.$active ? 'var(--like-color)' : 'var(--text-muted)'};
    &:hover {
      background: rgba(var(--like-rgb), 0.1);
    }
    ${props.$active && css`
      animation: ${bounceHappy} 0.6s;
    `}
  `}

  ${props => props.$type === 'dislike' && css`
    color: ${props.$active ? 'var(--dislike-color)' : 'var(--text-muted)'};
    &:hover {
      background: rgba(var(--dislike-rgb), 0.1);
    }
    ${props.$active && css`
      animation: ${shakeAngry} 0.6s;
    `}
  `}
`;

const ReactionCount = styled.span`
  font-size: 0.8rem;
  color: inherit;
  margin-left: 4px;
  font-weight: 500;
`;

const MoreOptionsButton = styled.button`
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    color: var(--primary);
    background: var(--hover-bg);
  }
`;

const OptionsMenu = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  z-index: 100;
  min-width: 140px;
  overflow: hidden;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem;
  background: none;
  border: none;
  text-align: left;
  color: var(--text);
  cursor: pointer;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    background: var(--hover-bg);
    color: var(--primary);
  }
`;

const EditForm = styled.div`
  margin-top: 8px;
`;

const EditTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  resize: none;
  font-family: inherit;
  font-size: 0.95rem;
  min-height: 100px;
  margin-bottom: 0.75rem;
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
  gap: 12px;
  justify-content: flex-end;
`;

const SaveButton = styled.button`
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-xs);
  font-weight: 500;

  &:hover {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary-darker));
    transform: translateY(-1px);
  }
`;

const CancelButton = styled.button`
  background: var(--button-secondary-bg);
  color: var(--button-secondary-text);
  border: 1px solid var(--border-light);
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    background: var(--button-secondary-hover);
    transform: translateY(-1px);
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 1rem;
  color: var(--error);
  font-size: 0.9rem;
  background: var(--error-bg);
  border-radius: var(--radius-sm);
  margin: 0.5rem 0;
`;

const DeletedMessage = styled.span`
  font-style: italic;
  color: var(--text-muted);
`;

const CommentCount = styled.div`
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  padding: 0 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--text-muted);
  }
`;

const PopularBadge = styled.span`
  font-size: 0.7rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
`;

const SharedMemeContainer = styled.div`
  margin-top: 12px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  overflow: hidden;
  max-width: 100%;
  position: relative;
  background: var(--media-bg);
`;

const SharedMeme = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  display: block;
  background: var(--media-bg);
`;

const SharedMemeCaption = styled.p`
  padding: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
  background: var(--media-caption-bg);
  border-top: 1px solid var(--border-light);
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
`;

const AttachButton = styled.button`
  background: var(--button-secondary-bg);
  color: var(--button-secondary-text);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--button-secondary-hover);
    color: var(--primary);
    transform: scale(1.05);
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
  padding: ${props => props.$isMobile ? '1rem' : '1.25rem'};
  border-bottom: 1px solid var(--border-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: var(--card-bg);
  z-index: 10;
`;

const ModalTitle = styled.h3`
  font-size: ${props => props.$isMobile ? '1.1rem' : '1.25rem'};
  margin: 0;
  color: var(--text-primary);
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background: var(--hover-bg);
    color: var(--text);
  }
`;

const MemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.$isMobile ? '120px' : '150px'}, 1fr));
  gap: ${props => props.$isMobile ? '8px' : '12px'};
  padding: ${props => props.$isMobile ? '1rem' : '1.25rem'};
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
  border-radius: var(--radius-sm);
  cursor: pointer;
  border: 2px solid ${props => props.$selected ? 'var(--primary)' : 'transparent'};
  transition: all 0.2s;
  background: var(--media-bg);

  &:hover {
    transform: ${props => props.$isMobile ? 'none' : 'scale(1.05)'};
  }
`;

const ModalActions = styled.div`
  padding: ${props => props.$isMobile ? '1rem' : '1.25rem'};
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: flex-end;
  gap: ${props => props.$isMobile ? '8px' : '12px'};
  position: sticky;
  bottom: 0;
  background: var(--card-bg);
`;

const MemeVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-sm);
  cursor: pointer;
  border: 2px solid ${props => props.$selected ? 'var(--primary)' : 'transparent'};
  transition: all 0.2s;
  background: var(--media-bg);

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
  padding: ${props => props.$isMobile ? '4px 6px' : '6px 8px'};
  font-size: ${props => props.$isMobile ? '0.65rem' : '0.75rem'};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ModalButton = styled.button`
  padding: ${props => props.$isMobile ? '0.75rem 1rem' : '0.75rem 1.25rem'};
  font-size: ${props => props.$isMobile ? '0.9rem' : '1rem'};
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  background: ${props => props.$primary ? 'var(--primary)' : 'var(--button-secondary-bg)'};
  color: ${props => props.$primary ? 'white' : 'var(--button-secondary-text)'};
  transition: all 0.2s;
  font-weight: 500;
  min-width: ${props => props.$isMobile ? '100px' : '120px'};

  &:hover {
    background: ${props => props.$primary ? 'var(--primary-dark)' : 'var(--button-secondary-hover)'};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
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
  // Adicione ESTES LOGS no começo do componente:
  console.log('--- Comment Debug ---');
  console.log('Comment ID:', comment._id);
  console.log('Has sharedMeme:', !!comment.sharedMeme);
  if (comment.sharedMeme) {
    console.log('sharedMeme details:', {
      mediaUrl: comment.sharedMeme.mediaUrl,
      mediaType: comment.sharedMeme.mediaType,
      caption: comment.sharedMeme.caption,
      builtUrl: buildUrl(comment.sharedMeme.mediaUrl)
    });
  }



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

  const getTimeAgo = useCallback((dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Agora';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds/60)}m`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds/3600)}h`;
    return `${Math.floor(diffInSeconds/86400)}d`;
  }, []);

  // Verifica se há mais respostas para carregar
  const hasMoreReplies = comment.repliesCount > (comment.replies?.length || 0);

  const toggleExpandReplies = useCallback((commentId) => {
    setExpandedReplies(prev => {
      const newExpanded = {...prev};
      const isExpanded = !prev[commentId];
      
      // Aplica para o comentário atual
      newExpanded[commentId] = isExpanded;
      
      // Aplica para todas as respostas diretas deste comentário
      // Não precisamos de recursão aqui porque cada Comment filho
      // cuidará de suas próprias respostas
      if (comment.replies) {
        comment.replies.forEach(reply => {
          newExpanded[reply._id] = isExpanded;
        });
      }

      return newExpanded;
    });
  }, [comment.replies]);


  return (
    <React.Fragment>
      <CommentItem $depth={depth} $isPopular={isPopular} data-testid={`comment-${comment._id}`}>
        {isReply && <ReplyIndicator />}
        
        {/* Cabeçalho do Comentário (linha superior) */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start',
          width: '100%'
        }}>
          {/* Avatar */}
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
            style={{ 
              cursor: 'pointer',
              flexShrink: 0,
              marginRight: '12px'
            }}
          />
          
          {/* Conteúdo Principal */}
          <CommentContent $isReply={isReply} style={{ flex: 1 }}>
            {showOptions === comment._id && (
              <OptionsMenu style={{ right: '0', left: 'auto', top: '40px' }}>
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
                {/* Linha de Informações do Usuário */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '4px',
                  position: 'relative'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CommentUser 
                      onClick={() => navigate(`/users/${safeUser._id}`)}
                      style={{ 
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginRight: '8px'
                      }}
                    >
                      {safeUser.username}
                    </CommentUser>
                    <CommentTime style={{
                      position: 'absolute',
                      right: canEditDelete ? '30px' : '0',
                      top: '2px',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      opacity: '0.7'
                    }}>
                      {getTimeAgo(comment.createdAt)}
                      {comment.isEdited && ' · editado'}
                    </CommentTime>
                  </div>
                  
                  {canEditDelete && (
                    <MoreOptionsButton 
                      onClick={() => onToggleOptions(comment._id)} 
                      aria-label="Mais opções"
                      style={{ marginLeft: 'auto' }}
                    >
                      <FiMoreHorizontal size={16} />
                    </MoreOptionsButton>
                  )}
                </div>
                
                {/* Badges (Verificado/Popular) */}
                <div style={{ 
                  display: 'flex',
                  gap: '6px',
                  marginBottom: '8px'
                }}>
                  {safeUser.isVerified && (
                    <UserBadge style={{ 
                      fontSize: '10px',
                      padding: '2px 6px'
                    }}>
                      Verificado
                    </UserBadge>
                  )}
                  {isPopular && (
                    <PopularBadge style={{ 
                      fontSize: '10px',
                      padding: '2px 6px'
                    }}>
                      🔥 Popular
                    </PopularBadge>
                  )}
                </div>

                {/* Texto do Comentário */}
                <CommentText $isDeleted={isDeleted} style={{ 
                  fontSize: '14px',
                  lineHeight: '1.5',
                  marginBottom: '8px'
                }}>
                  {isDeleted ? <DeletedMessage>{comment.text}</DeletedMessage> : comment.text}
                </CommentText>
                
                {/* Mídia Compartilhada */}
                {comment.sharedMeme && comment.sharedMeme.mediaUrl && (
                  console.log('Rendering shared media for comment:', comment._id, {
                    url: comment.sharedMeme.mediaUrl,
                    builtUrl: buildUrl(comment.sharedMeme.mediaUrl),
                    type: comment.sharedMeme.mediaType || 'unknown'
                  }),
                  <SharedMemeContainer style={{ 
                    marginTop: '8px',
                    maxWidth: '100%'
                  }}>
                    {comment.sharedMeme.mediaType === 'video' || comment.sharedMeme.mediaUrl.endsWith('.mp4') ? (
                      <video 
                        controls 
                        style={{ 
                          width: '100%', 
                          display: 'block',
                          maxHeight: '200px'
                        }}
                        crossOrigin="anonymous"
                      >
                        <source src={buildUrl(comment.sharedMeme.mediaUrl)} type="video/mp4" />
                      </video>
                    ) : (
                      <SharedMeme 
                        src={buildUrl(comment.sharedMeme.mediaUrl)}
                        alt={comment.sharedMeme.caption || 'Meme compartilhado'}
                        crossOrigin="anonymous"
                        style={{
                          maxHeight: '200px'
                        }}
                        onError={(e) => {
                          console.error('FAILED TO LOAD MEDIA:', {
                            commentId: comment._id,
                            src: e.target.src,
                            builtUrl: buildUrl(comment.sharedMeme.mediaUrl),
                            error: e
                          });
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    {comment.sharedMeme.caption && (
                      <SharedMemeCaption style={{
                        fontSize: '12px',
                        padding: '8px'
                      }}>
                        {comment.sharedMeme.caption}
                      </SharedMemeCaption>
                    )}
                  </SharedMemeContainer>
                )}
              </>
            )}
            
            {/* Botões de Reação */}
            {!isDeleted && (
              <ReactionButtons style={{
                marginTop: '12px',
                paddingTop: '8px',
                borderTop: '1px solid #eee'
              }}>
                <div style={{ 
                  display: 'flex',
                  gap: '16px'
                }}>
                  {/* Botão Like - Versão Atualizada */}
                  <ReactionButton 
                    onClick={() => onReaction(comment._id, 'like', isReply, parentCommentId)}
                    $active={comment.userReaction === 'like'}
                    $type="like"
                    aria-label="Curtir"
                    data-testid="like-button"
                    style={{
                      padding: '4px 8px',
                      backgroundColor: comment.userReaction === 'like' ? 'rgba(0, 200, 83, 0.1)' : 'transparent'
                    }}
                  >
                    <FaSmile 
                      size={14} 
                      color={comment.userReaction === 'like' ? '#00C853' : '#757575'} 
                    />
                    <ReactionCount style={{ 
                      fontSize: '12px',
                      marginLeft: '4px',
                      color: comment.userReaction === 'like' ? '#00C853' : '#757575'
                    }}>
                      {comment.likesCount ?? (comment.likes?.length || 0)}
                    </ReactionCount>
                  </ReactionButton>

                  {/* Botão Dislike - Versão Atualizada */}
                  <ReactionButton 
                    onClick={() => onReaction(comment._id, 'dislike', isReply, parentCommentId)}
                    $active={comment.userReaction === 'dislike'}
                    $type="dislike"
                    aria-label="Não curtir"
                    data-testid="dislike-button"
                    style={{
                      padding: '4px 8px',
                      backgroundColor: comment.userReaction === 'dislike' ? 'rgba(255, 82, 82, 0.1)' : 'transparent'
                    }}
                  >
                    <FaAngry 
                      size={14} 
                      color={comment.userReaction === 'dislike' ? '#FF5252' : '#757575'} 
                    />
                    <ReactionCount style={{ 
                      fontSize: '12px',
                      marginLeft: '4px',
                      color: comment.userReaction === 'dislike' ? '#FF5252' : '#757575'
                    }}>
                      {comment.dislikesCount ?? (comment.dislikes?.length || 0)}
                    </ReactionCount>
                  </ReactionButton>

                  {/* Botão de Resposta */}
                  {currentUser && depth < MAX_DEPTH && (
                    <ReactionButton 
                      onClick={() => onReply(comment._id, parentCommentId)}
                      aria-label="Responder"
                      data-testid="reply-button"
                      style={{
                        padding: '4px 8px',
                        color: '#666'
                      }}
                    >
                      <FiMessageCircle size={12} />
                      {comment.repliesCount > 0 && (
                        <ReactionCount style={{ 
                          fontSize: '12px',
                          marginLeft: '4px'
                        }}>
                          {comment.repliesCount}
                        </ReactionCount>
                      )}
                    </ReactionButton>
                  )}
                </div>
              </ReactionButtons>
            )}
          </CommentContent>
        </div>
      </CommentItem>

      {/* Formulário de Resposta */}
      {isReplying && depth < MAX_DEPTH && (
        <ReplyForm onSubmit={(e) => {
          e.preventDefault();
          onReplySubmit(comment._id);
        }} style={{
          marginTop: '12px',
          marginLeft: '44px',
          padding: '8px',
          backgroundColor: '#f5f5f5',
          borderRadius: '12px'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '4px'
            }}>
              <CommentInput
                type="text"
                id={`reply-input-${comment._id}`}
                name={`replyTo${comment._id}`}
                value={replyTexts[comment._id] || ''}
                onChange={(e) => onReplyChange(comment._id, e.target.value)}
                placeholder="Escreva uma resposta..."
                aria-label="Responder comentário"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  fontSize: '14px'
                }}
              />
              
              <div style={{ 
                display: 'flex',
                gap: '4px'
              }}>
                <AttachButton 
                  type="button"
                  onClick={() => document.getElementById(`reply-file-${comment._id}`).click()}
                  aria-label="Anexar mídia"
                  style={{
                    width: '32px',
                    height: '32px'
                  }}
                >
                  <FiPaperclip size={16} />
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
                  style={{
                    width: '32px',
                    height: '32px'
                  }}
                >
                  <FiImage size={16} />
                </AttachButton>
                
                <SubmitButton 
                  type="submit" 
                  aria-label="Enviar resposta"
                  style={{
                    width: '32px',
                    height: '32px'
                  }}
                >
                  <FiSend size={16} />
                </SubmitButton>
              </div>
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
          </div>
        </ReplyForm>
      )}

      {/* Área de Respostas */}
      {comment.replies && Array.isArray(comment.replies) && comment.replies.length > 0 && (
        <div style={{ 
          marginLeft: depth > 0 ? '1.25rem' : '0',
          marginTop: '8px'
        }}>
          {/* Mostra a primeira resposta ou todas se expandido */}
          {(expandedReplies[comment._id] ? comment.replies : [comment.replies[0]]).map(reply => (
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
              expandedReplies={expandedReplies}
              setExpandedReplies={setExpandedReplies}
            />
          ))}

          {/* Botão principal para expandir/collapsar */}
          {comment.replies.length > 1 && (
            <div style={{ 
              textAlign: 'left',
              marginTop: '8px',
              paddingLeft: depth > 0 ? '1rem' : '0'
            }}>
              <button
                onClick={() => toggleExpandReplies(comment._id)}
                disabled={loadingReplies[comment._id]}
                style={{
                  background: 'rgba(var(--primary-rgb), 0.08)',
                  border: '1px solid rgba(var(--primary-rgb), 0.2)',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  fontSize: '0.8rem',
                  borderRadius: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  fontWeight: '500',
                  ':hover': {
                    background: 'rgba(var(--primary-rgb), 0.15)'
                  },
                  ':disabled': {
                    opacity: '0.7',
                    cursor: 'not-allowed'
                  }
                }}
              >
                {loadingReplies[comment._id] ? (
                  <>
                    <FiLoader size={14} style={{ animation: 'spin 1s linear infinite' }} />
                    Carregando...
                  </>
                ) : expandedReplies[comment._id] ? (
                  <>
                    <FiChevronUp size={14} />
                    Ocultar todas as respostas
                  </>
                ) : (
                  <>
                    <FiChevronDown size={14} />
                    Mostrar todas as respostas ({comment.replies.length - 1})
                  </>
                )}
              </button>
            </div>
          )}

          {/* Botão para carregar mais respostas (se aplicável) */}
          {hasMoreReplies && !expandedReplies[comment._id] && (
            <div style={{ 
              textAlign: 'left',
              marginTop: '8px',
              paddingLeft: depth > 0 ? '1rem' : '0'
            }}>
              <button
                onClick={() => loadMoreReplies(comment._id)}
                disabled={loadingReplies[comment._id]}
                style={{
                  background: 'rgba(var(--primary-rgb), 0.08)',
                  border: '1px solid rgba(var(--primary-rgb), 0.2)',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  fontSize: '0.8rem',
                  borderRadius: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  fontWeight: '500',
                  ':hover': {
                    background: 'rgba(var(--primary-rgb), 0.15)'
                  },
                  ':disabled': {
                    opacity: '0.7',
                    cursor: 'not-allowed'
                  }
                }}
              >
                {loadingReplies[comment._id] ? (
                  <>
                    <FiLoader size={14} style={{ animation: 'spin 1s linear infinite' }} />
                    Carregando...
                  </>
                ) : (
                  <>
                    <FiPlusCircle size={14} />
                    Carregar mais respostas ({comment.repliesCount - comment.replies.length})
                  </>
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
            
            return (
              <MemeItem key={meme._id} $isMobile={isMobile}>
                {isVideo ? (
                  <MemeVideo
                    $isMobile={isMobile}
                    $selected={selectedMeme === meme._id}
                    onClick={() => onSelect(meme._id, isForReply)}
                    crossOrigin="anonymous"
                  >
                    <source src={buildUrl(meme.mediaUrl)} type="video/mp4" />
                  </MemeVideo>
                ) : (
                  <MemeThumbnail 
                    src={buildUrl(meme.mediaUrl)}
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
const CommentSection = ({ memeId, onCommentSubmit,  onCommentCountChange, setCommentOpen  }) => {
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
  const [fullyExpanded, setFullyExpanded] = useState({});
  const commentFormRef = useRef(null);


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

  // Hook de throttling otimizado (pode ser colocado em um arquivo separado)
  const useThrottle = (callback, delay) => {
    const lastCallRef = useRef(0);
    const pendingRef = useRef(false);
    const argsRef = useRef();

    return useCallback((...args) => {
      argsRef.current = args;
      const now = Date.now();
      const timeSinceLastCall = now - lastCallRef.current;

      if (!pendingRef.current) {
        if (timeSinceLastCall >= delay) {
          lastCallRef.current = now;
          callback(...args);
        } else {
          pendingRef.current = true;
          setTimeout(() => {
            lastCallRef.current = Date.now();
            callback(...argsRef.current);
            pendingRef.current = false;
          }, delay - timeSinceLastCall);
        }
      }
    }, [callback, delay]);
  };

  // Estado para tracking de momentum scroll
  const [momentumScrolling, setMomentumScrolling] = useState(false);
  

  // Função de scroll com throttling e momentum detection
  const handleScroll = useThrottle(() => {
    setIsScrolling(true);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  }, 100);


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
  const toggleFullyExpand = (commentId) => {
    setFullyExpanded(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
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
    
    // Apenas marca o primeiro comentário como popular se tiver pelo menos 5 likes líquidos
    const sorted = [...comments].sort((a, b) => {
      const aScore = (a.likesCount || a.likes?.length || 0) - (a.dislikesCount || a.dislikes?.length || 0);
      const bScore = (b.likesCount || b.likes?.length || 0) - (b.dislikesCount || b.dislikes?.length || 0);
      return bScore - aScore;
    });

    const mostPopular = sorted[0];
    const popularScore = (mostPopular.likesCount || mostPopular.likes?.length || 0) - 
                        (mostPopular.dislikesCount || mostPopular.dislikes?.length || 0);
    
    if (popularScore < 5) return comments;
    
    return sorted.map((comment, index) => ({
      ...comment,
      isPopular: index === 0
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


// Atualize a função fetchComments para garantir que loading sempre seja definido como false no final
  const fetchComments = useCallback(async () => {
    let isMounted = true;
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.get(`/memes/${memeId}/comments`);
      console.log('API Response:', response);

      if (!isMounted) return;

      // Extrai os dados de comentários de diferentes formatos de resposta
      const extractCommentsData = (data) => {
        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.data)) return data.data;
        if (Array.isArray(data?.comments)) return data.comments;
        throw new Error('Formato de dados inesperado da API');
      };

      const commentsData = extractCommentsData(response.data);
      console.log('Comments data:', commentsData);
      
      // Processa os sharedMemes para garantir estrutura consistente
      const processedComments = commentsData.map(comment => {
        if (comment.sharedMeme && typeof comment.sharedMeme === 'string') {
          return {
            ...comment,
            sharedMeme: {
              _id: comment.sharedMeme,
              mediaUrl: '', // Será preenchido pelo backend
              caption: '',
            }
          };
        }
        return comment;
      });

      console.log('First comment with sharedMeme:', 
        processedComments.find(c => c.sharedMeme));
      
      setComments(processedComments);
      
    } catch (err) {
      if (!isMounted) return;
      
      console.error('Erro ao buscar comentários:', err);
      setError(err.message || 'Falha ao carregar comentários');
      setComments([]);
      
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  }, [memeId]);

  // Adicione este useEffect para monitorar o estado de loading
  useEffect(() => {
    console.log('Loading state:', loading);
    console.log('Comments:', comments);
  }, [loading, comments]);
  useEffect(() => {
    let isMounted = true;
    
    const loadData = async () => {
      if (isMounted) {
        await fetchComments();
      }
    };
    
    loadData();
    
    return () => {
      isMounted = false;
    };
  }, [fetchComments]);
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
    // Envia apenas o ID do meme compartilhado
    formData.append('sharedMeme', selectedMeme);
  }

  try {
    setError(null);
    const response = await api.post(`/memes/${memeId}/comments`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    const newCommentCount = response.data.length;
    if (onCommentCountChange) {
      onCommentCountChange(newCommentCount);
    }
    
    setComments(prev => [response.data, ...prev]);
    setCommentText('');
    setCommentMedia(null);
    setSelectedMeme(null);
    
  } catch (error) {
    console.error('Erro detalhado ao enviar comentário:', {
      error: error,
      response: error.response,
      config: error.config
    });
    
    setError(error.response?.data?.message || 'Erro ao enviar comentário');
  }
}, [commentText, commentMedia, selectedMeme, memeId, onCommentCountChange]);

  const handleReply = useCallback((commentId, parentId = null) => {
    setReplyingTo(prev => prev === commentId ? null : commentId);
    setParentCommentId(parentId);
    setReplyTexts(prev => ({
      ...prev,
      [commentId]: prev[commentId] || '' // Inicializa com string vazia se não existir
    }));
    setCommentOpen(prev => prev === commentId ? null : commentId); // Adicione esta linha
  }, [setCommentOpen]);
  
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

      const response = await api.post(
        `/memes/${memeId}/comments`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      // Atualiza os comentários
      const updatedMeme = await api.get(`/memes/${memeId}`);
      setComments(updatedMeme.data.comments || []);
      
      if (onCommentCountChange) {
        onCommentCountChange(updatedMeme.data.commentCount || 0);
      }

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
      console.error('Erro detalhado:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        config: error.config
      });
      setError(error.response?.data?.message || 'Erro ao enviar resposta');
    }
    setCommentOpen(false);
  }, [memeId, replyTexts, replySelectedMeme, onCommentCountChange, setCommentOpen]);

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
          const updatedComment = { 
            ...c,
            userReaction: newReaction === 'none' ? null : newReaction
          };
          
          // Atualiza contagens baseado na resposta do servidor
          if (response.data) {
            updatedComment.likes = response.data.likes || [];
            updatedComment.dislikes = response.data.dislikes || [];
            updatedComment.likesCount = response.data.likesCount || 0;
            updatedComment.dislikesCount = response.data.dislikesCount || 0;
          }
          
          return updatedComment;
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

useEffect(() => {
  if (typeof window === 'undefined' || window.innerWidth > 768) return;

  const handleResize = () => {
    const visualViewport = window.visualViewport;
    if (visualViewport) {
      const viewportHeight = visualViewport.height;
      const windowHeight = window.innerHeight;
      const keyboardHeight = windowHeight - viewportHeight;
      
      // Ajuste mais preciso para diferentes dispositivos
      setKeyboardHeight(Math.max(keyboardHeight, 300)); // Mínimo de 300px
      setKeyboardActive(keyboardHeight > 50);

      if (commentFormRef.current && keyboardHeight > 50) {
        setTimeout(() => {
          commentFormRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          });
        }, 300);
      }
    }
  };
  

  const visualViewport = window.visualViewport;
  if (visualViewport) {
    visualViewport.addEventListener('resize', handleResize);
  }

  return () => {
    if (visualViewport) {
      visualViewport.removeEventListener('resize', handleResize);
    }
  };
}, []);


useEffect(() => {
  if (keyboardActive) {
    const input = document.getElementById('main-comment-input');
    if (input) {
      input.focus();
    }
  }
}, [keyboardActive]);

useEffect(() => {
  if (!isMobile) return;

  const handleResize = () => {
    const visualViewport = window.visualViewport;
    if (visualViewport) {
      const viewportHeight = visualViewport.height;
      const windowHeight = window.innerHeight;
      const keyboardHeight = windowHeight - viewportHeight;
      
      if (keyboardHeight > 50) {
        // Teclado visível
        const input = document.getElementById('main-comment-input');
        if (input) {
          input.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }
    }
  };

  const visualViewport = window.visualViewport;
  if (visualViewport) {
    visualViewport.addEventListener('resize', handleResize);
  }

  return () => {
    if (visualViewport) {
      visualViewport.removeEventListener('resize', handleResize);
    }
  };
}, [isMobile]);

// Efeito para lidar com o teclado em mobile
useEffect(() => {
  if (!isMobile) return;

  const handleFocus = (e) => {
    if (e.target.id === 'main-comment-input') {
      setKeyboardActive(true);
      // Tempo aumentado para garantir que o scroll ocorra após o teclado aparecer
      setTimeout(() => {
        if (commentFormRef.current) {
          commentFormRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 300); // Reduzi o tempo de 500ms para 300ms para melhor resposta
    }
  };

  const handleBlur = () => {
    setKeyboardActive(false);
  };

  const input = document.getElementById('main-comment-input');
  if (input) {
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
  }

  return () => {
    if (input) {
      input.removeEventListener('focus', handleFocus);
      input.removeEventListener('blur', handleBlur);
    }
  };
}, [isMobile]);

// Efeito adicional para ajustar a altura quando o teclado aparece
useEffect(() => {
  if (!isMobile) return;

  const handleResize = () => {
    const visualViewport = window.visualViewport;
    if (visualViewport) {
      const viewportHeight = visualViewport.height;
      const windowHeight = window.innerHeight;
      const keyboardHeight = windowHeight - viewportHeight;
      
      setKeyboardHeight(Math.max(keyboardHeight, 250)); // Valor mínimo reduzido para 250px
      setKeyboardActive(keyboardHeight > 50);
    }
  };

  const visualViewport = window.visualViewport;
  if (visualViewport) {
    visualViewport.addEventListener('resize', handleResize);
  }

  return () => {
    if (visualViewport) {
      visualViewport.removeEventListener('resize', handleResize);
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
    <CommentContainer data-testid="comment-section" aria-live="polite" aria-atomic="true">
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
                findComment={findComment}
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
        <CommentForm 
          onSubmit={handleSubmit} 
          role="form"
          ref={commentFormRef}
        >
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
        </CommentForm>

        {/* Mova o MediaPreview para fora do CommentForm mas mantenha no mesmo container */}
        {(commentMedia || selectedMeme) && (
          <div style={{ 
            marginTop: isMobile ? '8px' : '0',
            padding: isMobile ? '0 16px' : '0',
            marginBottom: isMobile ? '60px' : '0' // Espaço para o formulário fixo
          }}>
            <MediaPreview 
              file={commentMedia} 
              meme={selectedMeme ? userMemes.find(m => m._id === selectedMeme) : null}
              onRemove={() => {
                setCommentMedia(null);
                setSelectedMeme(null);
              }}
              data-testid="media-preview"
            />
          </div>
        )}

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