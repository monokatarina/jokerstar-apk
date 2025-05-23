import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-y: contain;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-top: calc(60px + env(safe-area-inset-top));
`;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MemeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
`;

const StyledMemeCard = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 92%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: ${({ isActive }) => isActive ? 'scale(1)' : 'scale(0.94)'};
  opacity: ${({ isActive }) => isActive ? 1 : 0.6};
`;

const EmptyFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  text-align: center;
  color: var(--text);
  scroll-snap-align: start;
  background: var(--card-bg);
  padding: 16px;

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
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  color: var(--text-light);
  scroll-snap-align: start;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  color: var(--danger);
  padding: 20px;
  scroll-snap-align: start;

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
  const [commentOpen, setCommentOpen] = useState(false);
  const lastScrollPosition = useRef(0);
  const isScrollingRef = useRef(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const navbarScrollTimeout = useRef(null);

  const handleNavbarVisibility = useCallback(() => {
    if (commentOpen) return;

    const currentScroll = feedContainerRef.current?.scrollTop || 0;
    const scrollDirection = currentScroll > lastScrollPosition.current ? 'down' : 'up';
    const scrollDistance = Math.abs(currentScroll - lastScrollPosition.current);

    if (navbarScrollTimeout.current) {
      clearTimeout(navbarScrollTimeout.current);
    }

    if (scrollDistance > 5) {
      if (scrollDirection === 'down' && currentScroll > 60) {
        setNavbarVisible(false);
      } else if (scrollDirection === 'up') {
        setNavbarVisible(true);
      }
    }

    lastScrollPosition.current = currentScroll;
    navbarScrollTimeout.current = setTimeout(() => {
      navbarScrollTimeout.current = null;
    }, 100);
  }, [commentOpen]);

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

    handleNavbarVisibility();

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    isScrollingRef.current = true;
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      if (feedContainerRef.current) {
        const container = feedContainerRef.current;
        const scrollTop = container.scrollTop;
        const containerHeight = container.offsetHeight;
        const index = Math.round(scrollTop / containerHeight);

        if (index !== currentIndex) {
          setCurrentIndex(index);
          container.scrollTo({
            top: index * containerHeight,
            behavior: 'smooth'
          });
        }
      }
    }, 150);
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
  }, [currentIndex, commentOpen, handleNavbarVisibility]);

  useEffect(() => {
    fetchMemes();
  }, []);

  useEffect(() => {
    return () => {
      setCommentOpen(false);
    };
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
            <MemeWrapper key={meme._id}>
              <StyledMemeCard isActive={index === currentIndex}>
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
                  setCommentOpen={setCommentOpen}
                  navbarVisible={navbarVisible}
                />
              </StyledMemeCard>
            </MemeWrapper>
          ))
        )}
      </FeedGrid>
    </FeedContainer>
  );
};

export default FeedPage;
