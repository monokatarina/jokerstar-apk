import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import MemeCard from '../components/MemeCard';
import UploadButton from '../components/UploadButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiRefreshCw } from 'react-icons/fi';

const FeedContainer = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0;
  background-color: var(--background);
`;

const FeedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SquareMemeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Mantém aspecto quadrado */
  overflow: hidden;
  background: #000;
`;

const SquareMemeContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyFeed = styled.div`
  width: 100%;
  padding: 40px 20px;
  text-align: center;
  color: var(--text-light);
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

const LoadingIndicator = styled.div`
  width: 100%;
  padding: 40px;
  text-align: center;
  color: var(--text-light);
`;

const ErrorMessage = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  color: var(--dislike-color);
  
  button {
    margin-top: 15px;
    padding: 8px 16px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
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
            <h3>Nenhum post encontrado</h3>
            <p>Seja o primeiro a postar!</p>
            <UploadButton />
          </EmptyFeed>
        ) : (
          memes.map(meme => (
            <SquareMemeContainer key={meme._id}>
              <SquareMemeContent>
                <MemeCard 
                  meme={meme}
                  onDelete={handleMemeDeleted}
                  onCommentCountChange={(newCount) => {
                    setMemes(prevMemes => prevMemes.map(m => 
                      m._id === meme._id ? { ...m, commentCount: newCount } : m
                    ))}
                  }
                  isSquareView
                />
              </SquareMemeContent>
            </SquareMemeContainer>
          ))
        )}
      </FeedGrid>
    </FeedContainer>
  );
};

export default FeedPage;