import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import MemeCard from '../components/MemeCard';
import UploadButton from '../components/UploadButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiRefreshCw } from 'react-icons/fi';
import Navbar from '../components/Navbar/Navbar'

const FeedContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px); // Ajuste para o navbar
  background-color: var(--background);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  overscroll-behavior-y: contain;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 20px; // Espaço extra no final
`;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 8px;
`;

const MemeWrapper = styled.div`
  position: relative;
  width: calc(100% - 16px);
  min-height: 80vh; // Altura mínima para garantir que o card seja visível
  margin: 8px;
  scroll-snap-align: start;
  border-radius: 12px;
  background: var(--card-bg);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  overflow: hidden;

  &:not(.active) {
    opacity: 0.95;
  }

  &.active {
    opacity: 1;
  }
`;

const EmptyFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
  width: calc(100% - 16px);
  margin: 8px;
  text-align: center;
  color: var(--text);
  scroll-snap-align: start;
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
  height: calc(100vh - 120px);
  width: calc(100% - 16px);
  margin: 8px;
  color: var(--text-light);
  scroll-snap-align: start;
  background: var(--card-bg);
  border-radius: 12px;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
  width: calc(100% - 16px);
  margin: 8px;
  color: var(--danger);
  padding: 20px;
  scroll-snap-align: start;
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
  const isScrollingRef = useRef(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [commentOpen, setCommentOpen] = useState(false);
  const lastScrollPosition = useRef(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

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

  const handleScroll = () => {
    if (commentOpen) return;

    // Lógica para mostrar/esconder navbar
    const currentScrollPosition = feedContainerRef.current.scrollTop;
    if (currentScrollPosition > lastScrollPosition.current && currentScrollPosition > 60) {
      // Rolando para baixo
      setNavbarVisible(false);
    } else {
      // Rolando para cima
      setNavbarVisible(true);
    }
    lastScrollPosition.current = currentScrollPosition;

    // Lógica para snap
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (feedContainerRef.current) {
        const scrollTop = feedContainerRef.current.scrollTop;
        const containerHeight = feedContainerRef.current.offsetHeight;
        const index = Math.round(scrollTop / containerHeight);

        if (index !== currentIndex) {
          setCurrentIndex(index);
        }
      }
    }, 100);
  };

  const handleMemeDeleted = (deletedMemeId) => {
    setMemes(prev => prev.filter(meme => meme._id !== deletedMemeId));
    
    if (memes[currentIndex]?._id === deletedMemeId) {
      const newIndex = Math.min(currentIndex, memes.length - 2);
      setCurrentIndex(newIndex >= 0 ? newIndex : 0);
    }
  };

  useEffect(() => {
    const container = feedContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex, commentOpen]);

  useEffect(() => {
    fetchMemes();
  }, []);

  useEffect(() => {
    return () => {
      setCommentOpen(false);
    };
  }, []);

  useEffect(() => {
    // Scroll to current index when memes change
    if (memes.length > 0 && feedContainerRef.current) {
      const containerHeight = feedContainerRef.current.offsetHeight;
      feedContainerRef.current.scrollTo({
        top: currentIndex * containerHeight,
        behavior: 'smooth'
      });
    }
  }, [memes, currentIndex]);

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
    <>
      <Navbar navbarVisible={navbarVisible} />
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
                  setCommentOpen={setCommentOpen}
                />
              </MemeWrapper>
            ))
          )}
        </FeedGrid>
      </FeedContainer>
    </>
  );
};

export default FeedPage;