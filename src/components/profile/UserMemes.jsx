import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import MemeThumbnail from '../MemeThumbnail';
import { PulseLoader } from 'react-spinners';
import { FaSadTear, FaSmileWink } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
`;

const MemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;

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

const StatusMessage = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  text-align: center;
  padding: 20px;
  background: ${({ theme }) => theme.cardBg || '#f8f9fa'};
  border-radius: 8px;
  color: ${({ theme }) => theme.text || '#333'};

  svg {
    font-size: 2rem;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.primary || '#6c5ce7'};
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const LoadMoreButton = styled.button`
  grid-column: 1 / -1;
  margin: 10px auto;
  padding: 8px 16px;
  background: ${({ theme }) => theme.primary || '#6c5ce7'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryHover || '#5649c0'};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const UserMemes = () => {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchUserMemes = async (pageNum = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data } = await api.get(`/users/${userId}/memes`, {
        params: { page: pageNum, limit: 30 }
      });
      
      const validMemes = data.memes.filter(meme => {
        const isNotDeleted = !meme.isDeleted;
        const hasValidAuthor = meme.author && !meme.author.isDeleted;
        return isNotDeleted && hasValidAuthor;
      });

      setMemes(prev => pageNum === 1 ? validMemes : [...prev, ...validMemes]);
      setHasMore(data.hasMore);
    } catch (err) {
      setError('Falha ao carregar memes');
      console.error('Erro ao buscar memes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserMemes();
  }, [userId]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchUserMemes(nextPage);
  };

  const handleMemeDeleted = (deletedMemeId) => {
    setMemes(prev => prev.filter(m => m._id !== deletedMemeId));
  };

  if (loading && memes.length === 0) {
    return (
      <Container>
        <StatusMessage>
          <PulseLoader color="#6c5ce7" size={10} />
          <h3>Carregando memes...</h3>
        </StatusMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <StatusMessage>
          <FaSadTear />
          <h3>Oops! Algo deu errado</h3>
          <p>{error}</p>
          <LoadMoreButton onClick={() => fetchUserMemes()}>
            Tentar novamente
          </LoadMoreButton>
        </StatusMessage>
      </Container>
    );
  }

  if (memes.length === 0) {
    return (
      <Container>
        <StatusMessage>
          <FaSmileWink />
          <h3>Nenhum meme encontrado</h3>
          <p>Parece que este usuário ainda não criou memes</p>
        </StatusMessage>
      </Container>
    );
  }

  return (
    <Container>
      <MemeGrid>
        {memes.map(meme => (
          <MemeContainer key={meme._id}>
            <MemeThumbnail 
              meme={meme}
              compactMode={true}
              showDetailsOnHover={false}
              onDelete={currentUser?._id === meme.author?._id ? handleMemeDeleted : null}
            />
          </MemeContainer>
        ))}
        
        {hasMore && (
          <LoadMoreButton 
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Ver mais'}
          </LoadMoreButton>
        )}
      </MemeGrid>
    </Container>
  );
};

export default UserMemes;