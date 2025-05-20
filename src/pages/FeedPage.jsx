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
  scroll-snap-type: x mandatory;
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
  padding-left: 8px;
`;

const MemeWrapper = styled.div`
  position: relative;
  width: calc(100vw - 16px);
  height: calc(100vh - 16px);
  margin: 16px 8px;
  scroll-snap-align: center;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 12px;
  background: var(--card-bg);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;

  &:not(.active) {
    opacity: 0.9;
    transform: scale(0.98);
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
  const scrollTimeoutRef = useRef(null);
  const { logout } = useAuth();
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

  const scrollToIndex = (index) => {
    if (feedContainerRef.current) {
      const width = feedContainerRef.current.offsetWidth;
      feedContainerRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (feedContainerRef.current) {
        const scrollLeft = feedContainerRef.current.scrollLeft;
        const width = feedContainerRef.current.offsetWidth;
        const index = Math.round(scrollLeft / width);

        setCurrentIndex(index);
        scrollToIndex(index); // trava no mais próximo
      }
    }, 100); // tempo para considerar que o scroll terminou
  };

  const handleMemeDeleted = (deletedMemeId) => {
    setMemes(prev => prev.filter(meme => meme._id !== deletedMemeId));
  };

  useEffect(() => {
    const container = feedContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
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
                  setMemes(prev =>
                    prev.map(m =>
                      m._id === meme._id ? { ...m, commentCount: newCount } : m
                    )
                  );
                }}
                isSquareView={false}
                isActive={index === currentIndex}
                style={{ width: '100%', height: '100%' }}
              />
            </MemeWrapper>
          ))
        )}
      </FeedGrid>
    </FeedContainer>
  );
};

export default FeedPage;
