import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlay, FaEllipsisH } from 'react-icons/fa';
import { useState } from 'react';

// Estilos base
const ThumbnailContainer = styled(Link)`
  display: block;
  border-radius: ${props => props.$compact ? '4px' : '8px'};
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
  background: ${props => props.theme.cardBg || '#f5f5f5'};
  transition: all 0.2s ease;
  
  ${props => !props.$compact && css`
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  `}
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.$compact ? '1' : '0'};
  transition: opacity 0.2s;
  
  ${ThumbnailContainer}:hover & {
    opacity: 1;
  }
`;

const PlayIcon = styled.div`
  width: ${props => props.$compact ? '24px' : '40px'};
  height: ${props => props.$compact ? '24px' : '40px'};
  background: rgba(255, 69, 0, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const RepostBadge = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 2px 4px;
  border-radius: 3px;
  font-size: ${props => props.$compact ? '0.6rem' : '0.8rem'};
  z-index: 1;
`;

const OptionsButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0,0,0,0.5);
  border: none;
  width: ${props => props.$compact ? '20px' : '28px'};
  height: ${props => props.$compact ? '20px' : '28px'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(0,0,0,0.7);
    transform: scale(1.1);
  }
`;

const OptionsMenu = styled.div`
  position: absolute;
  top: 35px;
  right: 5px;
  background: ${props => props.theme.cardBg || '#fff'};
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 10;
  min-width: 120px;
`;

const OptionItem = styled.button`
  width: 100%;
  padding: 8px 12px;
  text-align: left;
  background: none;
  border: none;
  color: ${props => props.theme.text || '#333'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: ${props => props.theme.replyBg || '#f0f0f0'};
  }
  
  &:active {
    background: ${props => props.theme.inputBg || '#e0e0e0'};
  }
`;

const MemeThumbnail = ({ 
  meme, 
  isOwner, 
  onDelete, 
  compactMode = false, 
  showDetailsOnHover = true 
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const getMediaUrl = () => {
    if (!meme.mediaUrl) return 'https://placehold.co/600x400?text=Imagem+não+carregada';
    if (meme.mediaUrl.startsWith('http')) return meme.mediaUrl;
    return `${process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org'}${meme.mediaUrl}`;
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('Tem certeza que deseja deletar este meme?')) {
      onDelete(meme._id);
    }
    setShowOptions(false);
  };

  return (
    <ThumbnailContainer 
      to={`/memes/${meme._id}`} 
      $compact={compactMode}
      onClick={(e) => {
        if (showOptions) {
          e.preventDefault();
          setShowOptions(false);
        }
      }}
    >
      {isOwner && (
        <>
          <OptionsButton 
            $compact={compactMode}
            onClick={(e) => {
              e.preventDefault();
              setShowOptions(!showOptions);
            }}
            aria-label="Opções do meme"
          >
            <FaEllipsisH size={compactMode ? 10 : 12} />
          </OptionsButton>
          
          {showOptions && (
            <OptionsMenu>
              <OptionItem onClick={handleDelete}>
                Deletar
              </OptionItem>
            </OptionsMenu>
          )}
        </>
      )}
      
      <ThumbnailImage 
        src={getMediaUrl()}
        alt={meme.caption || 'Meme thumbnail'}
        crossOrigin="anonymous"
        onError={(e) => {
          e.target.src = 'https://placehold.co/600x400?text=Imagem+não+carregada';
          e.target.onerror = null;
        }}
      />
      
      {meme.mediaType === 'video' && (
        <VideoOverlay $compact={compactMode}>
          <PlayIcon $compact={compactMode}>
            <FaPlay size={compactMode ? 10 : 14} />
          </PlayIcon>
        </VideoOverlay>
      )}
      
      {meme.isRepost && (
        <RepostBadge $compact={compactMode}>Repost</RepostBadge>
      )}
    </ThumbnailContainer>
  );
};

export default MemeThumbnail;