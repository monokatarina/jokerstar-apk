import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import MemeOptions from './MemeOptions';

const ThumbnailContainer = styled(Link)`
  display: block;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
  background: #f5f5f5;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`;

const ThumbnailVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  border: none;
  background: #eee;
  display: block;
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
  opacity: 0;
  transition: opacity 0.3s;
  
  ${ThumbnailContainer}:hover & {
    opacity: 1;
  }
`;

const PlayIcon = styled.div`
  width: 40px;
  height: 40px;
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
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1;
`;

const MemeThumbnail = ({ meme, isOwner, onDelete, isShared = false }) => {
  if (!meme) return null;
  const getMediaUrl = () => {
    if (!meme.mediaUrl) return 'https://placehold.co/600x400?text=Imagem+não+carregada';
    if (meme.mediaUrl.startsWith('http')) {
      return meme.mediaUrl.replace(/^http:\/\//i, 'https://');
    }
    const cleanPath = meme.mediaUrl.startsWith('/') ? meme.mediaUrl : `/${meme.mediaUrl}`;
    return `https://api.jokesteronline.org${cleanPath}`;
  };

  // Se for um meme compartilhado e tiver o ID original, usa esse ID no link
  const getMemeLink = () => {
    if (isShared && meme.originalMemeId) {
      return `/memes/${meme.originalMemeId}`;
    }
    return `/memes/${meme._id}`;
  };

  return (
    <ThumbnailContainer to={getMemeLink()}>
      {isOwner && (
        <MemeOptions 
          memeId={meme._id} 
          onDelete={onDelete}
          onClick={(e) => e.preventDefault()}
        />
      )}
      
      {meme.mediaType === 'video' ? (
        <ThumbnailVideo
          src={getMediaUrl()}
          alt={meme.caption || 'Meme video thumbnail'}
          crossOrigin="anonymous"
          preload="metadata"
          muted
          playsInline
          onError={(e) => {
            e.target.poster = 'https://placehold.co/600x400?text=Sem+thumbnail';
          }}
        />
      ) : (
        <ThumbnailImage 
          src={getMediaUrl()}
          alt={meme.caption || 'Meme thumbnail'}
          crossOrigin="anonymous"
          onError={(e) => {
            e.target.src = 'https://placehold.co/600x400?text=Imagem+não+carregada';
            e.target.onerror = null;
          }}
        />
      )}
      
      {meme.mediaType === 'video' && (
        <VideoOverlay>
          <PlayIcon>
            <FaPlay size={14} />
          </PlayIcon>
        </VideoOverlay>
      )}
      
      {meme.isRepost && (
        <RepostBadge>Repost</RepostBadge>
      )}
    </ThumbnailContainer>
  );
};

export default MemeThumbnail;