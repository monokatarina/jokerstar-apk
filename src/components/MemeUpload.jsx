import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../styles/ThemeContext';
import { FiX, FiPlus } from 'react-icons/fi';

const UploadContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
`;

const Title = styled.h2`
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.8rem;
`;

const Dropzone = styled.div`
  border: 2px dashed var(--border);
  border-radius: var(--radius-md);
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  margin-bottom: 1.5rem;
  background: ${props => props.$isDragging ? 'var(--border-light)' : 'var(--card-bg)'};

  &:hover {
    border-color: var(--primary);
  }
`;

const PreviewContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--border-light);
  border-radius: var(--radius-md);
  overflow: hidden;
`;

const MediaPreview = styled.div`
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img, video {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--primary);
  border: none;
  color: var(--text-inverse);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: var(--transition);

  &:hover {
    background: var(--primary-hover);
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
`;

const CaptionInput = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  background: var(--input-bg);
  color: var(--input-text);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: var(--border-light);
  padding: 6px 12px;
  border-radius: var(--radius-lg);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text);
`;

const TagInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const TagInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  font-size: 0.9rem;
  background: var(--input-bg);
  color: var(--input-text);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const AddTagButton = styled.button`
  background: var(--primary);
  color: var(--text-inverse);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--primary-hover);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: ${props => props.disabled ? 'var(--border)' : 'var(--primary)'};
  color: var(--text-inverse);
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: var(--radius-sm);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: var(--transition);

  &:hover {
    background: ${props => props.disabled ? 'var(--border)' : 'var(--primary-hover)'};
  }
`;

const ErrorMessage = styled.div`
  color: var(--dislike-color);
  margin-top: 1rem;
  text-align: center;
  padding: 0.5rem;
  background: rgba(var(--dislike-rgb), 0.1);
  border-radius: var(--radius-sm);
`;

const MemeUpload = ({ onSuccess }) => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const validateAndSetFile = (file) => {
    setError('');
    
    if (!file) return;

    if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
      setError('Apenas imagens e vídeos são permitidos');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB
      setError('O arquivo deve ter menos de 10MB');
      return;
    }

    setFile(file);
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Selecione um arquivo para enviar');
      return;
    }

    setIsUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('media', file);
      formData.append('caption', caption);
      formData.append('tags', JSON.stringify(tags));

      await api.post('/memes', formData);

      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Erro no upload:', err);
      setError(err.response?.data?.message || 'Erro ao enviar o meme');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <UploadContainer>
      <Title>Criar Novo Meme</Title>
      
      {!file ? (
        <Dropzone
          $isDragging={isDragging}
          onClick={() => fileInputRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FiPlus size={48} color="var(--primary)" />
          <p>Arraste e solte uma imagem ou vídeo aqui</p>
          <p>ou clique para selecionar</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*,video/*"
            style={{ display: 'none' }}
          />
        </Dropzone>
      ) : (
        <PreviewContainer>
          <MediaPreview>
            {file.type.startsWith('image/') ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Pré-visualização"
                style={{ objectFit: 'contain', maxHeight: '100%' }}
                onError={(e) => {
                  e.target.src = 'placeholder-image.jpg';
                }}
              />
            ) : (
              <video 
                src={URL.createObjectURL(file)} 
                controls 
                style={{ objectFit: 'contain', maxHeight: '100%' }}
              />
            )}
          </MediaPreview>
          <RemoveButton onClick={removeFile}>
            <FiX size={18} />
          </RemoveButton>
        </PreviewContainer>
      )}

      <InputGroup>
        <Label>Legenda</Label>
        <CaptionInput
          placeholder="Adicione uma legenda engraçada..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          disabled={isUploading}
        />
      </InputGroup>

      <InputGroup>
        <Label>Hashtags</Label>
        <TagsContainer>
          {tags.map(tag => (
            <Tag key={tag}>
              #{tag}
              <FiX size={14} onClick={() => removeTag(tag)} style={{ cursor: 'pointer' }} />
            </Tag>
          ))}
        </TagsContainer>
        <TagInputContainer>
          <TagInput
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value.replace(/\s/g, ''))}
            onKeyDown={handleTagInputKeyDown}
            placeholder="Digite uma hashtag e pressione Enter"
            disabled={isUploading}
          />
          <AddTagButton onClick={addTag} disabled={isUploading || !tagInput.trim()}>
            <FiPlus size={18} />
          </AddTagButton>
        </TagInputContainer>
      </InputGroup>

      <SubmitButton
        onClick={handleSubmit}
        disabled={isUploading || !file}
      >
        {isUploading ? 'Publicando...' : 'Publicar Meme'}
      </SubmitButton>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </UploadContainer>
  );
};

export default MemeUpload;