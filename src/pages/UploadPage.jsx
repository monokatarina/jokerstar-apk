import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { extractMentions } from '../utils/mentionUtils';
import { renderMentions } from '../utils/renderMentions';
import api from '../services/api';
import MentionInput from '../components/MentionInput';

const UploadPageContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

const Title = styled.h2`
  color: var(--text);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const LoadingMessage = styled.div`
  color: var(--text-light);
  text-align: center;
  padding: 1rem;
`;

const SuccessMessage = styled.div`
  color: var(--success);
  text-align: center;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-sm);
  margin: 1rem 0;
`;

const ErrorMessage = styled.div`
  color: var(--danger);
  text-align: center;
  padding: 1rem;
  background: rgba(255, 68, 68, 0.1);
  border-radius: var(--radius-sm);
  margin: 1rem 0;
`;

const UploadButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  
  &:hover {
    background: var(--primary-hover);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FileInputContainer = styled.div`
  margin: 1.5rem 0;
`;

const FileInputLabel = styled.label`
  display: block;
  padding: 1.5rem;
  border: 2px dashed var(--border);
  border-radius: var(--radius-md);
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--primary);
    background: rgba(255, 69, 0, 0.05);
  }
`;

const FilePreview = styled.div`
  margin-top: 1rem;
  text-align: center;
  
  img, video {
    max-width: 100%;
    max-height: 300px;
    border-radius: var(--radius-sm);
  }
`;

const FileName = styled.p`
  margin-top: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
`;

const PreviewContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
`;

const PreviewLabel = styled.p`
  margin-bottom: 0.5rem;
  color: var(--text-light);
`;

const UploadPage = () => {
  const { user, loading: authLoading, initialCheckDone } = useAuth();
  const navigate = useNavigate();
  
  const [uploadComplete, setUploadComplete] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  React.useEffect(() => {
    if (initialCheckDone && !user && !authLoading) {
      navigate('/login', { state: { from: '/upload' } });
    }
  }, [user, authLoading, initialCheckDone, navigate]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setError(null);

    // Criar preview
    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setFilePreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else if (selectedFile.type.startsWith('video/')) {
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('Selecione um arquivo para upload');
      return;
    }

    if (caption.length > 500) {
      setError('A legenda não pode ter mais de 500 caracteres');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      // Extrai menções da legenda
      const mentions = await extractMentions(caption);
      
      if (mentions.length > 5) {
        throw new Error('Você pode mencionar no máximo 5 pessoas');
      }

      const formData = new FormData();
      formData.append('media', file);
      formData.append('caption', caption);
      formData.append('mentions', JSON.stringify(mentions));

      const response = await api.post('/memes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setUploadComplete(true);
      setTimeout(() => navigate(`/memes/${response.data._id}`), 2000);
    } catch (err) {
      console.error('Upload failed:', err);
      setError(err.response?.data?.message || err.message || 'Erro ao fazer upload');
    } finally {
      setIsUploading(false);
    }
  };

  if (authLoading || !initialCheckDone) {
    return (
      <UploadPageContainer>
        <LoadingMessage>Carregando...</LoadingMessage>
      </UploadPageContainer>
    );
  }

  return (
    <UploadPageContainer>
      <Title>Criar Nova Postagem</Title>
      
      {uploadComplete ? (
        <SuccessMessage>
          Postagem criada com sucesso! Redirecionando...
        </SuccessMessage>
      ) : (
        <>
          <FileInputContainer>
            <FileInputLabel>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*,video/*"
                style={{ display: 'none' }}
              />
              {file ? 'Arquivo selecionado' : 'Clique para selecionar imagem ou vídeo'}
            </FileInputLabel>
            
            {filePreview && (
              <FilePreview>
                {file.type.startsWith('image/') ? (
                  <img src={filePreview} alt="Preview" crossOrigin="anonymous" />
                ) : (
                  <video controls src={filePreview} crossOrigin="anonymous" />
                )}
                <FileName>{file.name}</FileName>
              </FilePreview>
            )}
          </FileInputContainer>

          <MentionInput
            value={caption}
            onChange={setCaption}
            placeholder="Adicione uma legenda... mencione usuários com @"
          />

          {caption && (
            <PreviewContainer>
              <PreviewLabel>Pré-visualização:</PreviewLabel>
              <div style={{ lineHeight: 1.5 }}>
                {renderMentions(caption, navigate)}
              </div>
            </PreviewContainer>
          )}

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <UploadButton 
            onClick={handleSubmit} 
            disabled={isUploading || !file}
          >
            {isUploading ? (
              <>
                <span className="spinner"></span>
                Enviando...
              </>
            ) : (
              'Publicar'
            )}
          </UploadButton>
        </>
      )}
    </UploadPageContainer>
  );
};

export default UploadPage;