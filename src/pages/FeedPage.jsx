import React, { useState, useEffect } from 'react';
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
  white-space: nowrap;
  padding: 16px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

const FeedGrid = styled.div`
  display: inline-flex;
  gap: 24px;
  padding: 0 16px;
  height: 100%;
`;

const MemeWrapper = styled.div`
  display: inline-block;
  width: 95vw;
  max-width: 500px;
  height: 95vh;
  max-height: 800px;
  scroll-snap-align: start;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: var(--card-bg);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  flex-shrink: 0;
`;

const EmptyFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  text-align: center;
  color: var(--text);

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
  color: var(--text-light);
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--danger);
  padding: 20px;

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

  useEffect(() => {
    fetchMemes();
  }, []);

  if (loading) {
    return (
      <FeedContainer>
        <LoadingIndicator>Carregando...</LoadingIndicator>
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
      <FeedGrid>
        {memes.length === 0 ? (
          <EmptyFeed>
            <h3>Nenhum meme encontrado</h3>
            <p>Seja o primeiro a compartilhar sua criação!</p>
            <UploadButton size="large" />
          </EmptyFeed>
        ) : (
          memes.map(meme => (
            <MemeWrapper key={meme._id}>
              <MemeCard 
                meme={meme}
                onDelete={handleMemeDeleted}
                onCommentCountChange={(newCount) => {
                  setMemes(prevMemes => prevMemes.map(m => 
                    m._id === meme._id ? { ...m, commentCount: newCount } : m
                  ))}
                }
                isSquareView={true}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px' // Mantém o border-radius consistente
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