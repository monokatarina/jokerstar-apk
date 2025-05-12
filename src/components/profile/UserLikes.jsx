// src/components/profile/UserLikes.jsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';
import MemeThumbnail from '../MemeThumbnail';
import { useAuth } from '../../contexts/AuthContext';

const MemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const EmptyMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: var(--text-light);
  font-size: 1.1rem;
`;

const UserLikes = ({ userId }) => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchLikedMemes = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await api.get(`/users/${userId}/liked-memes`);
        
        // Filtro no frontend como camada adicional de segurança
        const validMemes = Array.isArray(data) 
          ? data.filter(meme => {
              // Verifica se o meme existe e não está deletado
              const isNotDeleted = !meme.isDeleted;
              // Verifica se o autor não deletou sua conta
              const hasValidAuthor = meme.author && !meme.author.isDeleted;
              return isNotDeleted && hasValidAuthor;
            })
          : [];
        
        setMemes(validMemes);
      } catch (error) {
        console.error('Error fetching liked memes:', error);
        setError('Failed to load liked memes');
        if (error.response?.status === 401) {
          // Tratamento para token inválido/não autorizado
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLikedMemes();
  }, [userId, user]); // Adicionei user como dependência para recarregar se o usuário mudar

  const handleMemeDeleted = (deletedMemeId) => {
    // Atualização otimista - remove o meme da lista imediatamente
    setMemes(prev => prev.filter(m => m._id !== deletedMemeId));
  };

  if (loading) return <EmptyMessage>Loading liked memes...</EmptyMessage>;
  if (error) return <EmptyMessage>{error}</EmptyMessage>;

  return (
    <>
      {memes.length === 0 ? (
        <EmptyMessage>
          {userId === user?._id 
            ? "You haven't liked any memes yet" 
            : "This user hasn't liked any memes"}
        </EmptyMessage>
      ) : (
        <MemeGrid>
          {memes.map(meme => (
            <MemeThumbnail 
              key={meme._id} 
              meme={meme}
              onDelete={handleMemeDeleted} // Passa a função de deleção
            />
          ))}
        </MemeGrid>
      )}
    </>
  );
};

export default UserLikes;