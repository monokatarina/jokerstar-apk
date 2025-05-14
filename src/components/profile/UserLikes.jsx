import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';
import MemeThumbnail from '../MemeThumbnail';
import { useAuth } from '../../contexts/AuthContext';
import { FiHeart, FiLoader } from 'react-icons/fi';

const MemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-top: 8px;

  @media (min-width: 400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
  }
`;

const MemeContainer = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(0.98);
  }
`;

const EmptyMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 30px 20px;
  color: var(--text-light);
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--text-light);
  font-size: 0.9rem;
`;

const LoadMoreButton = styled.button`
  grid-column: 1 / -1;
  margin: 10px auto;
  padding: 8px 16px;
  background: var(--primary);
  color: var(--text-inverse);
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--primary-hover);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const UserLikes = ({ userId }) => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { user } = useAuth();

  const fetchLikedMemes = async (pageNum = 1) => {
    try {
      setLoading(true);
      const { data } = await api.get(`/users/${userId}/liked-memes`, {
        params: { page: pageNum, limit: 30 }
      });
      
      const validMemes = data.memes.filter(meme => 
        !meme.isDeleted && meme.author && !meme.author.isDeleted
      );

      setMemes(prev => pageNum === 1 ? validMemes : [...prev, ...validMemes]);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error('Error fetching liked memes:', error);
      setError(error.response?.data?.message || 'Failed to load memes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLikedMemes();
  }, [userId, user]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchLikedMemes(nextPage);
  };

  if (loading && memes.length === 0) {
    return (
      <EmptyMessage>
        <LoadingContainer>
          <FiLoader size={18} className="spin" />
          Loading...
        </LoadingContainer>
      </EmptyMessage>
    );
  }

  if (error) {
    return (
      <EmptyMessage>
        <div>{error}</div>
        <LoadMoreButton onClick={() => fetchLikedMemes()}>
          Try Again
        </LoadMoreButton>
      </EmptyMessage>
    );
  }

  return (
    <>
      {memes.length === 0 ? (
        <EmptyMessage>
          <FiHeart size={24} />
          {userId === user?._id 
            ? "You haven't liked any memes yet" 
            : "No liked memes yet"}
        </EmptyMessage>
      ) : (
        <MemeGrid>
          {memes.map(meme => (
            <MemeContainer key={meme._id}>
              <MemeThumbnail 
                meme={meme}
                compactMode={true}
                showDetailsOnHover={false}
              />
            </MemeContainer>
          ))}
          
          {hasMore && (
            <LoadMoreButton 
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </LoadMoreButton>
          )}
        </MemeGrid>
      )}
    </>
  );
};

export default UserLikes;