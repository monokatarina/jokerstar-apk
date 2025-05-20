import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import MemeCard from '../components/MemeCard';
import UploadButton from '../components/UploadButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiRefreshCw } from 'react-icons/fi';

const FeedContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background);
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FeedGrid = styled.div`
  display: inline-flex;
  height: 100%;
  padding-left: 8px; /* Espaço inicial */
`;

const MemeWrapper = styled.div`
  position: relative;
  width: calc(100vw - 32px); /* Largura menos o espaçamento */
  height: calc(100vh - 32px); /* Altura menos o espaçamento */
  margin: 16px 8px; /* Espaçamento entre posts */
  scroll-snap-align: center; /* Alinhar no centro para melhor snap */
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 12px;
  background: var(--card-bg);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;

  /* Efeito visual durante o scroll */
  &:not(.active) {
    opacity: 0.85;
    transform: scale(0.95);
  }

  &.active {
    opacity: 1;
    transform: scale(1);
  }
`;

const EmptyFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: calc(100vw - 16px);
  margin: 0 8px;
  text-align: center;
  color: var(--text);
  scroll-snap-align: center;
  background: var(--card-bg);
  border-radius: 12px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  p {
    color: var(--text-light);
    margin-bottom: 24px;
  }
`;

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100vw - 16px);
  margin: 0 8px;
  color: var(--text-light);
  scroll-snap-align: center;
  background: var(--card-bg);
  border-radius: 12px;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100vw - 16px);
  margin: 0 8px;
  color: var(--danger);
  padding: 20px;
  scroll-snap-align: center;
  background: var(--card-bg);
  border-radius: 12px;

  button {
    margin-top: 20px;
    padding: 12px 24px;
    border-radius: 24px;
    background: var(--primary);
    color: white;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
  }
`;

const FeedPage = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const feedContainerRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
  };

  const handleScroll = () => {
    if (feedContainerRef.current) {
      const container = feedContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      
      // Adicionando resistência - só atualiza o índice se estiver perto o suficiente
      const scrollProgress = (scrollLeft % width) / width;
      const threshold = 0.3; // 30% de threshold (aumente para mais resistência)
      
      if (scrollProgress > 1 - threshold || scrollProgress < threshold) {
        setCurrentIndex(newIndex);
        
        // Snap programático para garantir alinhamento
        if (Math.abs(scrollProgress - 0.5) > threshold) {
          container.scrollTo({
            left: width * newIndex,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  const scrollToIndex = (index) => {
    if (feedContainerRef.current) {
      const width = feedContainerRef.current.offsetWidth;
      feedContainerRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
    }
  };


  const handleTouchMove = (e) => {
    if (feedContainerRef.current) {
      // Reduzindo a velocidade do scroll
      e.preventDefault();
      const container = feedContainerRef.current;
      const touch = e.touches[0];
      const moveX = touch.clientX;
      
      if (container.startX === undefined) {
        container.startX = touch.clientX;
        container.scrollLeftStart = container.scrollLeft;
      }
      
      const deltaX = container.startX - moveX;
      container.scrollLeft = container.scrollLeftStart + deltaX * 0.7; // Fator de redução (0.7 = 30% mais lento)
    }
  };

  const handleTouchStart = (e) => {
    if (feedContainerRef.current) {
      const container = feedContainerRef.current;
      container.startX = e.touches[0].clientX;
      container.scrollLeftStart = container.scrollLeft;
    }
  };

  useEffect(() => {
    const container = feedContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchstart', handleTouchStart);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchstart', handleTouchStart);
      };
    }
  }, []);

  useEffect(() => {
    fetchMemes();
  }, []);

  if (loading) {
    return (
      <FeedContainer ref={feedContainerRef}>
        <LoadingIndicator>Carregando...</LoadingIndicator>
      </FeedContainer>
    );
  }

  if (error) {
    return (
      <FeedContainer ref={feedContainerRef}>
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
    <FeedContainer ref={feedContainerRef}>
      <FeedGrid>
        {memes.length === 0 ? (
          <EmptyFeed>
            <h3>Nenhum meme encontrado</h3>
            <p>Seja o primeiro a compartilhar sua criação!</p>
            <UploadButton size="large" />
          </EmptyFeed>
        ) : (
          memes.map((meme, index) => (
            <MemeWrapper 
              key={meme._id}
              className={index === currentIndex ? 'active' : ''}
            >
              <MemeCard 
                meme={meme}
                onDelete={handleMemeDeleted}
                onCommentCountChange={(newCount) => {
                  setMemes(prevMemes => prevMemes.map(m => 
                    m._id === meme._id ? { ...m, commentCount: newCount } : m
                  ))}
                }
                isSquareView={false}
                isActive={index === currentIndex}
                style={{
                  width: '100%',
                  height: '90%',
                }}
              />
            </MemeWrapper>
          ))
        )}
      </FeedGrid>
    </FeedContainer>
  );
};

export default FeedPage;