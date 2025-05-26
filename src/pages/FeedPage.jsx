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
  background-color: var(--background);
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  margin: 0;
`;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0;
  margin: 0;
  padding: 0;
`;

const MemeWrapper = styled.div`
  width: 100%;
  /* Removido min-height para não forçar espaçamento */
  position: relative;
  background: var(--background);
  margin: 0;
  padding: 0;
  /* Nenhum border, shadow, radius */
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

const POSTS_PER_PAGE = 20;

const FeedPage = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [commentOpen, setCommentOpen] = useState(false);
  const [displayedMemes, setDisplayedMemes] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);
  const [checkpoint, setCheckpoint] = useState(0);

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

  // Carrega mais memes quando necessário
  const loadMoreMemes = () => {
    if (memes.length === 0) return;
    let start = nextIndex;
    let end = nextIndex + POSTS_PER_PAGE;
    // Se chegou no fim, começa do início (loop infinito)
    if (start >= memes.length) {
      start = 0;
      end = POSTS_PER_PAGE;
    }
    const newMemes = memes.slice(start, end);
    setDisplayedMemes(prev => [...prev, ...newMemes]);
    setNextIndex(end);
  };

  // Reset checkpoint e posts vistos
  const handleCheckpoint = () => {
    setCheckpoint(displayedMemes.length);
  };

  // Atualiza displayedMemes quando memes mudam
  useEffect(() => {
    setDisplayedMemes([]);
    setNextIndex(0);
  }, [memes]);

  // Carrega os primeiros posts quando memes mudam
  useEffect(() => {
    if (memes.length > 0 && displayedMemes.length === 0) {
      loadMoreMemes();
    }
    // eslint-disable-next-line
  }, [memes, displayedMemes.length]);

  // Scroll infinito: carrega mais quando chega perto do fim
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        loadMoreMemes();
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [displayedMemes, memes, nextIndex]);

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
        {displayedMemes.length === 0 ? (
          <EmptyFeed>
            <h3>Nenhum meme encontrado</h3>
            <p>Seja o primeiro a compartilhar sua criação!</p>
            <UploadButton size="large" />
          </EmptyFeed>
        ) : (
          displayedMemes.map((meme, idx) => (
            <MemeWrapper key={meme._id + '-' + idx}>
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
              {/* Checkpoint visual */}
              {idx + 1 === checkpoint && (
                <div style={{
                  width: '100%',
                  textAlign: 'center',
                  background: 'var(--primary)',
                  color: '#fff',
                  padding: '4px 0',
                  fontSize: '0.9rem'
                }}>
                  Checkpoint
                </div>
              )}
            </MemeWrapper>
          ))
        )}
      </FeedGrid>
      {/* Botão para marcar checkpoint */}
      {displayedMemes.length > 0 && (
        <button
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 100,
            background: 'var(--primary)',
            color: '#fff',
            border: 'none',
            borderRadius: 24,
            padding: '12px 20px',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            cursor: 'pointer'
          }}
          onClick={handleCheckpoint}
        >
          Marcar checkpoint
        </button>
      )}
    </FeedContainer>
  );
};

export default FeedPage;