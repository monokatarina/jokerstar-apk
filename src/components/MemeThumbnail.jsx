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
  background: #222;
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
  background: transparent;
  display: block;
  opacity: ${props => props.$loaded ? 1 : 0};
  transition: opacity 0.5s ease;
`;

const VideoLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #333 0%, #222 100%);
  z-index: 1;
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
  z-index: 2;
`;

const MemeThumbnail = ({ meme, isOwner, onDelete, isShared = false }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current && meme.mediaType === 'video') {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        // Inicia o pulso de play/pause
        const pulseLoad = () => {
          video.play().then(() => {
            // Pausa rapidamente após o play para capturar o frame
            setTimeout(() => {
              video.pause();
              setVideoLoaded(true);
            }, 100);
          }).catch(err => {
            console.warn("Auto-play was prevented:", err);
            // Fallback: apenas marca como carregado
            setVideoLoaded(true);
          });
        };

        // Se for mobile, tenta carregar com mute
        if (isMobile) {
          video.muted = true;
          pulseLoad();
        } else {
          // Tenta primeiro sem mute (se o navegador permitir)
          video.muted = false;
          pulseLoad();
        }
      };
      
      const handleError = () => {
        console.warn("Error loading video");
        setVideoLoaded(false);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      
      // Configuração para mobile
      if (isMobile) {
        video.preload = 'metadata';
        video.playsInline = true;
        video.muted = true;
        video.setAttribute('webkit-playsinline', '');
        video.setAttribute('x-webkit-airplay', 'allow');
      }
      
      video.load();
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [meme.mediaUrl, isMobile]);

  if (!meme) return null;

  const getMediaUrl = () => {
    if (!meme.mediaUrl) return '';
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

  return (
    <ThumbnailContainer 
      to={getMemeLink()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          {!videoLoaded && (
            <VideoLoading>
              <PlayIcon>
                <FaPlay size={14} />
              </PlayIcon>
            </VideoLoading>
          )}
          
          <ThumbnailVideo
            ref={videoRef}
            src={getMediaUrl()}
            alt={meme.caption || 'Meme video thumbnail'}
            crossOrigin="anonymous"
            preload="none"
            muted
            playsInline
            loop
            $loaded={videoLoaded}
            onError={(e) => {
              console.error("Error loading video:", e);
              setVideoLoaded(false);
            }}
          />
          
          <VideoIndicator>Vídeo</VideoIndicator>
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
      
      {meme.mediaType === 'video' && videoLoaded && (
        <VideoOverlay $isHovered={isHovered}>
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