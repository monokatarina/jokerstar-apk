import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import MemeCard from '../MemeCard';
import { PulseLoader } from 'react-spinners';
import { FaSadTear, FaSmileWink } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
`;

const MemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
  gap: 16px;
  padding: 0;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
`;

const StatusMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 24px;
  background: ${({ theme }) => theme.cardBg || '#f8f9fa'};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 16px;

  svg {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.primary || '#6c5ce7'};
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.text || '#333'};
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textLight || '#666'};
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text || '#333'};
  margin: 0 16px 20px;
  padding-left: 12px;
  position: relative;
  font-weight: 600;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 60%;
    width: 3px;
    background: ${({ theme }) => theme.primary || '#6c5ce7'};
    border-radius: 2px;
  }
`;

// Novos estilos para o MemeCard (adicionar ao componente MemeCard ou criar um wrapper)
const MobileCardWrapper = styled.div`
  .meme-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:active {
      transform: scale(0.98);
    }

    img {
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    .card-footer {
      padding: 12px;
      background: ${({ theme }) => theme.cardBg || '#fff'};

      h3 {
        font-size: 0.95rem;
        line-height: 1.3;
        margin-bottom: 8px;
      }

      .stats {
        font-size: 0.8rem;
      }
    }
  }
`;
const UserMemes = () => {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleMemeDeleted = (deletedMemeId) => {
    setMemes(prev => prev.filter(m => m._id !== deletedMemeId));
  };

  useEffect(() => {
    const fetchUserMemes = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 1. Busca memes do backend (que já deve filtrar isDeleted)
        const { data } = await api.get(`/users/${userId}/memes`);
        
        // 2. Filtro adicional no frontend como segurança redundante
        const validMemes = data.filter(meme => {
          // Verifica se o meme não está deletado
          const isNotDeleted = !meme.isDeleted;
          // Verifica se o autor não foi deletado
          const hasValidAuthor = meme.author && !meme.author.isDeleted;
          return isNotDeleted && hasValidAuthor;
        });

        setMemes(validMemes);
      } catch (err) {
        setError('Falha ao carregar memes');
        console.error('Erro ao buscar memes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserMemes();
  }, [userId]);

  // Função para deletar meme
  const handleDeleteMeme = async (memeId) => {
    try {
      await api.delete(`/memes/${memeId}`);
      handleMemeDeleted(memeId); // Atualização otimista
    } catch (error) {
      console.error('Erro ao deletar meme:', error);
      if (error.response?.status === 410) {
        // Se o meme já foi deletado, remove da lista mesmo assim
        handleMemeDeleted(memeId);
      }
      alert(error.response?.data?.message || 'Erro ao deletar meme');
    }
  };


  if (loading) return (
    <Container>
      <StatusMessage>
        <PulseLoader color="#6c5ce7" size={15} />
        <h3>Carregando memes...</h3>
        <p>Preparando as melhores piadas pra você</p>
      </StatusMessage>
    </Container>
  );

  if (error) return (
    <Container>
      <StatusMessage>
        <FaSadTear />
        <h3>Oops! Algo deu errado</h3>
        <p>{error}</p>
        <p>Tente recarregar a página</p>
      </StatusMessage>
    </Container>
  );

  if (memes.length === 0) return (
    <Container>
      <StatusMessage>
        <FaSmileWink />
        <h3>Nenhum meme encontrado</h3>
        <p>Parece que este usuário ainda não criou memes</p>
      </StatusMessage>
    </Container>
  );

  return (
    <Container>
      <Title>Posts</Title>
      <MemeGrid>
        {memes.map(meme => (
          <MobileCardWrapper key={meme._id}>
            <MemeCard 
              meme={meme}
              onDelete={handleDeleteMeme}
              isOwner={currentUser?._id === meme.author?._id}
              className="meme-card"
            />
          </MobileCardWrapper>
        ))}
      </MemeGrid>
    </Container>
  );
};

export default UserMemes;