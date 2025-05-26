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
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-top: calc(60px + env(safe-area-inset-top));
  padding-bottom: calc(16px + env(safe-area-inset-bottom)); // menor espaçamento e respeita área inferior
`;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px; // espaçamento menor entre posts
`;

const MemeWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px - env(safe-area-inset-top)); // Altura total menos navbar
  position: relative;
  background: var(--background);
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  // Remova margens extras, o gap do FeedGrid já cuida do espaçamento
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
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [commentOpen, setCommentOpen] = useState(false);

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
    setMemes(prev => prev.filter(meme => meme._id !== deletedMemeId));
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
          memes.map((meme) => (
            <MemeWrapper key={meme._id}>
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
                isActive={true}
                style={{ width: '100%', height: '100%' }}
                setCommentOpen={setCommentOpen}
              />
            </MemeWrapper>
          ))
        )}
      </FeedGrid>
    </FeedContainer>
  );
};

export default FeedPage;