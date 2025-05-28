import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import MemeOptions from './MemeOptions';
import { useRef, useEffect, useState } from 'react';

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
  pointer-events: auto;
  border: none;
  background: #eee;
  display: block;
  opacity: ${props => props.$show ? 1 : 0};
  position: ${props => props.$show ? 'relative' : 'absolute'};
`;

const VideoFallback = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
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
  opacity: ${props => props.$isHovered ? 1 : 0};
  transition: opacity 0.3s;
  z-index: 2;
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
  z-index: 3;
`;

const VideoIndicator = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7rem;
  z-index: 1;
`;

const MemeThumbnail = ({ meme, isOwner, onDelete, isShared = false }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se é um dispositivo móvel
    const checkIfMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current && meme.mediaType === 'video') {
      const video = videoRef.current;
      
      // Tenta carregar o vídeo apenas se não for mobile ou se o usuário interagir
      if (!isMobile || showVideo) {
        video.load();
        
        // Tenta mostrar o vídeo após o metadata carregar
        const onLoadedMetadata = () => {
          setShowVideo(true);
          video.play().catch(e => console.warn("Autoplay prevented:", e));
        };
        
        video.addEventListener('loadedmetadata', onLoadedMetadata);
        
        return () => {
          video.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
      }
    }
  }, [meme.mediaUrl, isMobile, showVideo]);

  if (!meme) return null;

  const getMediaUrl = () => {
    if (!meme.mediaUrl) return 'https://placehold.co/600x400?text=Imagem+não+carregada';
    if (meme.mediaUrl.startsWith('http')) {
      return meme.mediaUrl.replace(/^http:\/\//i, 'https://');
    }
    const cleanPath = meme.mediaUrl.startsWith('/') ? meme.mediaUrl : `/${meme.mediaUrl}`;
    return `https://api.jokesteronline.org${cleanPath}`;
  };

  const getMemeLink = () => {
    if (isShared && meme.originalMemeId) {
      return `/memes/${meme.originalMemeId}`;
    }
    return `/memes/${meme._id}`;
  };

  const handleVideoClick = (e) => {
    if (isMobile && !showVideo) {
      e.preventDefault();
      setShowVideo(true);
    }
  };

  return (
    <ThumbnailContainer 
      to={getMemeLink()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      {isOwner && (
        <MemeOptions 
          memeId={meme._id} 
          onDelete={onDelete}
          onClick={(e) => e.preventDefault()}
        />
      )}
      
      {meme.mediaType === 'video' ? (
        <>
          {/* Fallback para mobile ou enquanto o vídeo não carrega */}
          {(!showVideo || isMobile) && (
            <VideoFallback>
              <ThumbnailImage 
                src={meme.thumbnailUrl || getMediaUrl().replace('.mp4', '.jpg') || 'https://placehold.co/600x400?text=Video'}
                alt={meme.caption || 'Meme video thumbnail'}
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400?text=Sem+thumbnail';
                }}
              />
              <VideoIndicator>Vídeo</VideoIndicator>
            </VideoFallback>
          )}
          
          {/* Elemento de vídeo real */}
          <ThumbnailVideo
            ref={videoRef}
            src={getMediaUrl()}
            alt={meme.caption || 'Meme video thumbnail'}
            crossOrigin="anonymous"
            preload="none"
            muted
            playsInline
            loop
            $show={showVideo && !isMobile}
            onError={(e) => {
              console.error("Erro ao carregar vídeo:", e);
              setShowVideo(false);
            }}
          />
        </>
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
        <VideoOverlay $isHovered={isHovered || (isMobile && !showVideo)}>
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