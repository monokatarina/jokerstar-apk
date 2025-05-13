import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import MemeCard from '../components/MemeCard';
import { useAuth } from '../contexts/AuthContext';
import { FiRefreshCw } from 'react-icons/fi';

const FeedContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  background: #000;
`;

const MemeSlide = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  background: #000;
`;

const ProgressIndicator = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 100;
`;

const ProgressDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$active ? '#fff' : 'rgba(255,255,255,0.3)'};
  transition: all 0.3s ease;
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
      <ProgressIndicator>
        {memes.map((_, index) => (
          <ProgressDot key={index} $active={currentIndex === index} />
        ))}
      </ProgressIndicator>

      {memes.map((meme, index) => (
        <MemeSlide key={meme._id}>
          <MemeCard 
            meme={meme}
            isFullScreen
            onDelete={handleMemeDeleted}
            onScroll={(direction) => {
              if(direction === 'up' && index > 0) setCurrentIndex(index - 1);
              if(direction === 'down' && index < memes.length - 1) setCurrentIndex(index + 1);
            }}
          />
        </MemeSlide>
      ))}
    </FeedContainer>
  );
};

export default FeedPage;