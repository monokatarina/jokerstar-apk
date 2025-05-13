import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import MemeCard from '../components/MemeCard';
import UploadButton from '../components/UploadButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiRefreshCw } from 'react-icons/fi';

const FeedContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--background);
  position: relative;
`;

const FeedScrollContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

const MemeSlide = styled.div`
  min-width: 100vw;
  height: 100%;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px; /* Espaço para os controles */
`;

const ControlsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    font-size: 12px;
    margin-top: 4px;
  }
`;

const ProgressIndicator = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
`;

const ProgressDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$active ? 'var(--primary)' : 'rgba(255,255,255,0.3)'};
  transition: all 0.3s ease;
`;

const EmptyFeed = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-light);
  text-align: center;
  padding: 20px;
  
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const LoadingIndicator = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--text-light);
`;

const ErrorMessage = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: var(--dislike-color);
  text-align: center;
  
  button {
    margin-top: 20px;
    background: var(--primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const FeedPage = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingMemeId, setDeletingMemeId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const fetchMemes = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.get('/memes');
      
      const validMemes = Array.isArray(data?.data) 
        ? data.data.filter(meme => !meme.isDeleted)
        : [];
      
      setMemes(validMemes);
    } catch (error) {
      console.error('Erro ao carregar feed:', error);
      setError('Erro ao carregar o feed. Tente novamente mais tarde.');
      if (error.response?.status === 401) {
        await logout();
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleMemeDeleted = (deletedMemeId) => {
    setMemes(prevMemes => prevMemes.filter(meme => meme._id !== deletedMemeId));
    setDeletingMemeId(null);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const index = Math.round(scrollPosition / window.innerWidth);
      setCurrentIndex(index);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < memes.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    fetchMemes();
  }, []);

  if (loading) {
    return (
      <FeedContainer>
        <LoadingIndicator>Carregando memes...</LoadingIndicator>
      </FeedContainer>
    );
  }

  if (error) {
    return (
      <FeedContainer>
        <ErrorMessage>
          {error}
          <button onClick={fetchMemes}>
            <FiRefreshCw /> Tentar novamente
          </button>
        </ErrorMessage>
      </FeedContainer>
    );
  }

  return (
    <FeedContainer>
      {memes.length > 0 && (
        <ProgressIndicator>
          {memes.map((_, index) => (
            <ProgressDot 
              key={index} 
              $active={index === currentIndex}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </ProgressIndicator>
      )}
      
      <FeedScrollContainer ref={scrollRef}>
        {memes.length === 0 ? (
          <MemeSlide>
            <EmptyFeed>
              <h3>Nenhuma postagem encontrada</h3>
              <p>Que tal criar a primeira?</p>
              <UploadButton style={{ marginTop: '20px' }} />
            </EmptyFeed>
          </MemeSlide>
        ) : (
          memes.map((meme, index) => (
            <MemeSlide key={meme._id}>
              <MemeCard 
                meme={meme}
                onDelete={handleMemeDeleted}
                isDeleting={deletingMemeId === meme._id}
                onStartDelete={() => setDeletingMemeId(meme._id)}
                onCommentCountChange={(newCount) => {
                  setMemes(prevMemes => prevMemes.map(m => 
                    m._id === meme._id ? { ...m, commentCount: newCount } : m
                  ))}}
                commentCount={meme.commentCount || 0}
                isFullScreen
              />
            </MemeSlide>
          ))
        )}
      </FeedScrollContainer>

      {memes.length > 0 && (
        <ControlsContainer>
          <ControlButton onClick={handlePrev} disabled={currentIndex === 0}>
            👈 <span>Anterior</span>
          </ControlButton>
          <ControlButton onClick={() => {
            const currentMeme = memes[currentIndex];
            if (user && user._id !== currentMeme.author?._id) {
              api.post(`/memes/${currentMeme._id}/repost`);
            }
          }}>
            🔁 <span>Repostar</span>
          </ControlButton>
          <ControlButton onClick={() => {
            navigator.share({
              url: window.location.href,
              title: 'Confira este meme!'
            }).catch(() => {
              // Fallback para copiar link
              navigator.clipboard.writeText(window.location.href);
              alert('Link copiado!');
            });
          }}>
            📤 <span>Compartilhar</span>
          </ControlButton>
          <ControlButton onClick={() => scrollToIndex(currentIndex + 1)} disabled={currentIndex === memes.length - 1}>
            👉 <span>Próximo</span>
          </ControlButton>
        </ControlsContainer>
      )}
    </FeedContainer>
  );
};

export default FeedPage;