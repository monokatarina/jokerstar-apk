import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import MemeCard from '../components/MemeCard';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiRefreshCw } from 'react-icons/fi';
import UploadButton from '../components/UploadButton';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Navbar from '../components/Navbar/Navbar';

const FeedContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  padding-top: calc(60px + env(safe-area-inset-top)); // Ajuste para navbar e status bar
  padding-bottom: calc(20px + env(safe-area-inset-bottom));
  background-color: var(--background);
`;

const FeedHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FeedTitle = styled.h1`
  font-size: 1.5rem;
  color: var(--text);
  margin: 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const RefreshButton = styled.button`
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  padding: 10px 16px;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text);
  transition: all 0.2s ease;
  touch-action: manipulation;
  
  &:active {
    transform: scale(0.95);
    background: var(--border-light);
  }
`;

const RepostButton = styled.button`
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  padding: 10px 16px;
  border-radius: 24px;
  cursor: pointer;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text);
  transition: all 0.2s ease;
  width: 100%;
  touch-action: manipulation;
  
  &:active {
    transform: scale(0.95);
    background: var(--border-light);
  }
`;

const EmptyFeed = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--shadow);
  color: var(--text);
  margin-top: 20px;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: var(--text-light);
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  background: var(--card-bg);
  color: var(--dislike-color);
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-light);
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 8px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterButton = styled.button`
  padding: 10px 16px;
  border-radius: 24px;
  border: none;
  background: ${({ $active }) => $active ? 'var(--primary)' : 'var(--card-bg)'};
  color: ${({ $active }) => $active ? 'var(--text-inverse)' : 'var(--text)'};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--border-light);
  font-weight: 500;
  white-space: nowrap;
  touch-action: manipulation;
  
  &:active {
    transform: scale(0.95);
  }
`;

const LoadingMoreIndicator = styled.div`
  text-align: center;
  padding: 20px;
  color: var(--text-light);
`;

const MemeList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const TrendingPage = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const fetchTrendingMemes = useCallback(async (pageNum = 1, isRefreshing = false) => {
    try {
      if (pageNum === 1) setLoading(true);
      else setLoadingMore(true);
      
      setError(null);
      const { data } = await api.get(`/feed/trending?page=${pageNum}&limit=10`);
      
      if (isRefreshing) {
        setMemes(data.data);
      } else {
        setMemes(prev => pageNum === 1 ? data.data : [...prev, ...data.data]);
      }
      
      setHasMore(data.data.length >= 10);
      setPage(pageNum);
    } catch (error) {
      console.error('Error fetching trending memes:', error);
      setError('Erro ao carregar os memes em destaque. Tente novamente mais tarde.');
      if (error.response?.status === 401) {
        await logout();
        navigate('/login');
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [logout, navigate]);

  const handleLoadMore = useCallback(() => {
    if (!loading && !loadingMore && hasMore) {
      fetchTrendingMemes(page + 1);
    }
  }, [fetchTrendingMemes, hasMore, loading, loadingMore, page]);

  const [infiniteScrollRef] = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: handleLoadMore,
    threshold: 200,
  });

  const handleRefresh = useCallback(() => {
    fetchTrendingMemes(1, true);
  }, [fetchTrendingMemes]);

  const handleRepost = async (memeId) => {
    try {
      await api.post(`/memes/${memeId}/repost`);
      handleRefresh();
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

  const filteredMemes = memes.filter(meme => {
    if (filter === 'all') return true;
    if (filter === 'images') return meme.mediaType === 'image';
    if (filter === 'videos') return meme.mediaType === 'video';
    return true;
  });

  if (loading && page === 1) {
    return (
      <>
        <FeedContainer>
          <LoadingIndicator>Carregando memes em destaque...</LoadingIndicator>
        </FeedContainer>
      </>
    );
  }

  if (error) {
    return (
      <>
        <FeedContainer>
          <ErrorMessage>
            {error}
            <RefreshButton onClick={handleRefresh}>
              <FiRefreshCw /> Tentar novamente
            </RefreshButton>
          </ErrorMessage>
        </FeedContainer>
      </>
    );
  }

  return (
    <>
      <FeedContainer>
        <FeedHeader>
          <FeedTitle>Destaques - Os memes mais populares</FeedTitle>
          <ActionButtons>
            <UploadButton />
            <RefreshButton onClick={handleRefresh}>
              <FiRefreshCw size={18} />
            </RefreshButton>
          </ActionButtons>
        </FeedHeader>

        <Filters>
          <FilterButton 
            $active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            Todos
          </FilterButton>
          <FilterButton 
            $active={filter === 'images'}
            onClick={() => setFilter('images')}
          >
            Imagens
          </FilterButton>
          <FilterButton 
            $active={filter === 'videos'}
            onClick={() => setFilter('videos')}
          >
            Vídeos
          </FilterButton>
        </Filters>
        
        {filteredMemes.length === 0 ? (
          <EmptyFeed>
            <h3>Nenhum meme em destaque encontrado</h3>
            <p>Que tal criar o primeiro?</p>
            <UploadButton style={{ marginTop: '20px' }} />
          </EmptyFeed>
        ) : (
          <MemeList>
            {filteredMemes.map((meme, index) => (
              <div 
                key={`${meme._id}-${index}`}
                ref={index === filteredMemes.length - 1 ? infiniteScrollRef : null}
              >
                <MemeCard meme={meme} commentCount={meme.commentCount || 0} />
                {user && user._id !== meme.author?._id && (
                  <RepostButton onClick={() => handleRepost(meme._id)}>
                    <span>🔁</span> Repostar ({meme.repostCount || 0})
                  </RepostButton>
                )}
              </div>
            ))}
            
            {loadingMore && (
              <LoadingMoreIndicator>
                <FiRefreshCw className="spin" /> Carregando mais memes...
              </LoadingMoreIndicator>
            )}
            
            {!hasMore && filteredMemes.length > 0 && (
              <LoadingMoreIndicator>
                Você chegou ao fim dos memes em destaque!
              </LoadingMoreIndicator>
            )}
          </MemeList>
        )}
      </FeedContainer>
    </>
  );
};

export default TrendingPage;