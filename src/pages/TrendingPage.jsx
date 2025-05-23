import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import MemeCard from '../components/MemeCard';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiRefreshCw } from 'react-icons/fi';
import UploadButton from '../components/UploadButton';
import Navbar from '../components/Navbar/Navbar';

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

const RepostButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  z-index: 10;
  transition: all 0.2s ease;
  
  &:active {
    transform: scale(0.95);
    background: rgba(0, 0, 0, 0.9);
  }
`;

const TrendingPage = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const fetchTrendingMemes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.get('/feed/trending?limit=50');
      setMemes(data.data);
    } catch (error) {
      console.error('Error fetching trending memes:', error);
      setError('Erro ao carregar os memes em destaque. Tente novamente mais tarde.');
      if (error.response?.status === 401) {
        await logout();
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  }, [logout, navigate]);

  const handleRefresh = useCallback(() => {
    fetchTrendingMemes();
  }, [fetchTrendingMemes]);

  const handleRepost = async (memeId) => {
    try {
      await api.post(`/memes/${memeId}/repost`);
      fetchTrendingMemes();
    } catch (error) {
      console.error('Erro ao repostar:', error);
      setError('Erro ao repostar');
      if (error.response?.status === 401) {
        await logout();
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    fetchTrendingMemes();
  }, [fetchTrendingMemes]);

  if (loading) {
    return (
      <FeedContainer>
        <LoadingIndicator>Carregando memes em destaque...</LoadingIndicator>
      </FeedContainer>
    );
  }

  if (error) {
    return (
      <FeedContainer>
        <ErrorMessage>
          {error}
          <button onClick={handleRefresh}>
            <FiRefreshCw /> Tentar novamente
          </button>
        </ErrorMessage>
      </FeedContainer>
    );
  }

  return (
    <>
      <FeedContainer>
        <FeedGrid>
          {memes.length === 0 ? (
            <EmptyFeed>
              <h3>Nenhum meme em destaque encontrado</h3>
              <p>Que tal criar o primeiro?</p>
              <UploadButton size="large" />
            </EmptyFeed>
          ) : (
            memes.map((meme) => (
              <MemeWrapper key={meme._id}>
                <MemeCard
                  meme={meme}
                  isSquareView={false}
                  style={{ width: '100%', height: '100%' }}
                />
                {user && user._id !== meme.author?._id && (
                  <RepostButton onClick={() => handleRepost(meme._id)}>
                    <span>🔁</span> Repostar ({meme.repostCount || 0})
                  </RepostButton>
                )}
              </MemeWrapper>
            ))
          )}
        </FeedGrid>
      </FeedContainer>
    </>
  );
};

export default TrendingPage;