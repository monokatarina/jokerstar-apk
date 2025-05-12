import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import MemeCard from '../components/MemeCard';
import UploadButton from '../components/UploadButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiRefreshCw } from 'react-icons/fi';

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

const FeedPage = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingMemeId, setDeletingMemeId] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const fetchMemes = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.get('/memes');
      
      // Filtra memes deletados no frontend (backup caso o backend não filtre)
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
    // Remove o meme deletado da lista local
    setMemes(prevMemes => prevMemes.filter(meme => meme._id !== deletedMemeId));
    setDeletingMemeId(null);
  };

  const handleRepost = async (memeId) => {
    try {
      await api.post(`/memes/${memeId}/repost`);
      await fetchMemes(); // Atualiza a lista após repostar
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
    fetchMemes();
  }, []);

  if (loading) {
    return (
      <FeedContainer>
        <LoadingIndicator>Carregando memes...</LoadingIndicator>
      </FeedContainer>
    );
  }

  if (error) {
    return (
      <FeedContainer>
        <ErrorMessage>
          {error}
          <RefreshButton onClick={fetchMemes}>
            <FiRefreshCw /> Tentar novamente
          </RefreshButton>
        </ErrorMessage>
      </FeedContainer>
    );
  }

  return (
    <FeedContainer>
      <FeedHeader>
        <FeedTitle>Feed</FeedTitle>
        <div>
          <UploadButton />
          <RefreshButton onClick={fetchMemes}>
            <FiRefreshCw /> Atualizar
          </RefreshButton>
        </div>
      </FeedHeader>
      
      {memes.length === 0 ? (
        <EmptyFeed>
          <h3>Nenhuma postagem encontrada</h3>
          <p>Que tal criar a primeira?</p>
          <UploadButton style={{ marginTop: '20px' }} />
        </EmptyFeed>
      ) : (
        <div className="feed-list">
          {memes.map(meme => (
            <div key={meme._id} style={{ marginBottom: '24px' }}>
              <MemeCard 
                meme={meme}
                onDelete={handleMemeDeleted}
                isDeleting={deletingMemeId === meme._id}
                onStartDelete={() => setDeletingMemeId(meme._id)}
                onCommentCountChange={(newCount) => {
                  // Atualiza a contagem no estado local
                  setMemes(prevMemes => prevMemes.map(m => 
                    m._id === meme._id ? { ...m, commentCount: newCount } : m
                  ))}}
                commentCount={meme.commentCount || 0}
              />
              {user && user._id !== meme.author?._id && (
                <RepostButton onClick={() => handleRepost(meme._id)}>
                  <span>🔁</span> Repostar ({meme.repostCount || 0})
                </RepostButton>
              )}
            </div>
          ))}
        </div>
      )}
    </FeedContainer>
  );
};

export default FeedPage;