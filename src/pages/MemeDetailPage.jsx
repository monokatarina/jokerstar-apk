import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { Helmet } from 'react-helmet';
import api from '../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import MemeCard from '../components/MemeCard';
import { toast } from 'react-toastify';
import { buildUrl } from '../utils/utils';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

// Estilos simplificados
const MemeDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--background);
  color: var(--text);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  background: var(--background);
  z-index: 10;
  padding-top: 10px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
  margin-right: 15px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 69, 0, 0.1);
  }
`;

const MemeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchMeme = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/memes/${id}`);
      setMeme(response.data);
    } catch (err) {
      console.error('Erro ao carregar meme:', err);
      setError(err.response?.data?.message || 'Meme não encontrado');
      toast.error(err.response?.data?.message || 'Erro ao carregar meme');
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleDelete = useCallback(async () => {
    try {
      setIsDeleting(true);
      await api.delete(`/memes/${id}`);
      toast.success('Meme deletado com sucesso!');
      navigate('/');
    } catch (err) {
      console.error('Erro ao deletar meme:', err);
      toast.error(err.response?.data?.message || 'Erro ao deletar meme');
    } finally {
      setIsDeleting(false);
      setShowDeleteConfirm(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchMeme();
  }, [fetchMeme]);

  if (loading) {
    return (
      <MemeDetailContainer>
        <LoadingSpinner />
      </MemeDetailContainer>
    );
  }

  if (error) {
    return (
      <MemeDetailContainer>
        <ErrorMessage message={error} onRetry={fetchMeme} />
      </MemeDetailContainer>
    );
  }

  if (!meme) {
    return (
      <MemeDetailContainer>
        <ErrorMessage message="Meme não encontrado" />
      </MemeDetailContainer>
    );
  }

  return (
    <>
      <Helmet>
        <title>{meme.caption ? `${meme.caption.substring(0, 60)}...` : 'Visualizar Meme'} | iFunny Clone</title>
        <meta name="description" content={`Meme postado por @${meme.author?.username}`} />
        <meta property="og:title" content={meme.caption || 'Meme interessante'} />
        <meta property="og:description" content={`Meme postado por @${meme.author?.username}`} />
        <meta property="og:image" content={buildUrl(meme.mediaUrl)} />
        <meta property="og:url" content={`${window.location.origin}/memes/${meme._id}`} />
      </Helmet>

      <MemeDetailContainer>
        <Header>
          <BackButton onClick={() => navigate(-1)} aria-label="Voltar">
            <FiArrowLeft />
          </BackButton>
        </Header>

        <MemeCard 
          meme={meme}
          onDelete={handleDelete}
          showCommentsInitially={true}
        />
      </MemeDetailContainer>
    </>
  );
};

export default MemeDetailPage;