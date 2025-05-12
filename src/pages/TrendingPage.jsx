import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import MemeCard from '../components/MemeCard';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiRefreshCw } from 'react-icons/fi';
import UploadButton from '../components/UploadButton';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const FeedContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--background);
`;

const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const FeedTitle = styled.h1`
  font-size: 24px;
  color: var(--text);
`;

const RefreshButton = styled.button`
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  padding: 8px 16px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text);
  transition: var(--transition);
  
  &:hover {
    background: var(--border-light);
    box-shadow: var(--shadow-hover);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const RepostButton = styled.button`
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  padding: 8px 16px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: var(--text);
  transition: var(--transition);
  
  &:hover {
    background: var(--border-light);
    box-shadow: var(--shadow-hover);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const EmptyFeed = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: var(--card-bg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
  color: var(--text);
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
  border-radius: var(--radius-md);
  margin: 20px 0;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-light);
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: var(--radius-lg);
  border: none;
  background: ${({ $active }) => $active ? 'var(--primary)' : 'var(--card-bg)'};
  color: ${({ $active }) => $active ? 'var(--text-inverse)' : 'var(--text)'};
  cursor: pointer;
  transition: var(--transition);
  border: 1px solid var(--border-light);
  font-weight: 500;

  &:hover {
    background: ${({ $active }) => $active ? 'var(--primary-hover)' : 'var(--border-light)'};
    box-shadow: var(--shadow-hover);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const LoadingMoreIndicator = styled.div`
  text-align: center;
  padding: 20px;
  color: var(--text-light);
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
  });

  const handleRefresh = useCallback(() => {
    fetchTrendingMemes(1, true);
  }, [fetchTrendingMemes]);

  const handleRepost = async (memeId) => {
    try {
      await api.post(`/memes/${memeId}/repost`);
      handleRefresh(); // Atualiza a lista após repostar
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
          <RefreshButton onClick={handleRefresh}>
            <FiRefreshCw /> Tentar novamente
          </RefreshButton>
        </ErrorMessage>
      </FeedContainer>
    );
  }

  return (
    <FeedContainer>
      <FeedHeader>
        <FeedTitle>Destaques - Os memes mais populares</FeedTitle>
        <div>
          <UploadButton />
          <RefreshButton onClick={handleRefresh}>
            <FiRefreshCw /> Atualizar
          </RefreshButton>
        </div>
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
        <div className="feed-list">
          {filteredMemes.map((meme, index) => (
            <div 
              key={`${meme._id}-${index}`} 
              style={{ marginBottom: '24px' }}
              ref={index === filteredMemes.length - 1 ? infiniteScrollRef : null}
            >
              <MemeCard   meme={meme} commentCount={meme.commentCount || 0}/>
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
        </div>
      )}
    </FeedContainer>
  );
};

export default TrendingPage;