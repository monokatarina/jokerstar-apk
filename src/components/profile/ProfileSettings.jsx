import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiUpload, FiX } from 'react-icons/fi';
import api from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
`;

const FormTitle = styled.h2`
  color: var(--primary);
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.8rem;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--text);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  background: var(--input-bg);
  color: var(--text);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  min-height: 120px;
  resize: vertical;
  font-size: 1rem;
  background: var(--input-bg);
  color: var(--text);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const FileInputContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 2px dashed var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition);
  background: var(--reply-bg);

  &:hover {
    border-color: var(--primary);
    background: rgba(var(--primary-rgb), 0.05);
  }

  svg {
    margin-right: 8px;
    color: var(--primary);
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

const ImagePreviewWrapper = styled.div`
  position: relative;
  width: ${props => props.$isAvatar ? '120px' : '100%'};
  height: ${props => props.$isAvatar ? '120px' : '200px'};
  border-radius: ${props => props.$isAvatar ? '50%' : 'var(--radius-sm)'};
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(var(--primary-rgb), 0.9);
  border: none;
  color: var(--text-inverse);
  width: 30px;
  height: 30px;
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

const SaveButton = styled.button`
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
  margin-top: 10px;

  &:hover {
    background: ${props => props.disabled ? 'var(--border)' : 'var(--primary-hover)'};
  }
`;

const ErrorMessage = styled.div`
  color: var(--dislike-color);
  margin-top: 10px;
  font-size: 0.9rem;
`;

const SuccessMessage = styled.div`
  color: var(--success);
  margin-top: 10px;
  font-size: 0.9rem;
`;

const ProfileSettings = ({ user }) => {
  const [formData, setFormData] = useState({
    bio: user.profile?.bio || ''
  });
  const [avatar, setAvatar] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(user.profile?.avatar || '');
  const [coverPreview, setCoverPreview] = useState(user.profile?.coverPhoto || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { updateUser } = useAuth();

  // Clean up object URLs
  useEffect(() => {
    return () => {
      if (avatarPreview && avatarPreview.startsWith('blob:')) {
        URL.revokeObjectURL(avatarPreview);
      }
      if (coverPreview && coverPreview.startsWith('blob:')) {
        URL.revokeObjectURL(coverPreview);
      }
    };
  }, [avatarPreview, coverPreview]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Por favor, selecione um arquivo de imagem válido');
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB
      setError('A imagem de perfil deve ter menos de 2MB');
      return;
    }

    setAvatar(file);
    setAvatarPreview(URL.createObjectURL(file));
    setError('');
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Por favor, selecione um arquivo de imagem válido');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB
      setError('A imagem de capa deve ter menos de 5MB');
      return;
    }

    setCoverPhoto(file);
    setCoverPreview(URL.createObjectURL(file));
    setError('');
  };

  const removeAvatar = () => {
    setAvatar(null);
    setAvatarPreview(user.profile?.avatar || '');
  };

  const removeCover = () => {
    setCoverPhoto(null);
    setCoverPreview(user.profile?.coverPhoto || '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const formDataToSend = new FormData();
      if (avatar) formDataToSend.append('avatar', avatar);
      if (coverPhoto) formDataToSend.append('coverPhoto', coverPhoto);
      formDataToSend.append('bio', formData.bio);

      const { data } = await api.put('/users/profile', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      updateUser(data);
      setSuccess('Perfil atualizado com sucesso!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.response?.data?.message || 'Falha ao atualizar o perfil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Configurações do Perfil</FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Biografia</Label>
          <TextArea
            value={formData.bio}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
            placeholder="Conte um pouco sobre você..."
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Foto de Perfil</Label>
          <FileInputContainer>
            <FileInputLabel>
              <FiUpload size={18} />
              {avatar ? 'Imagem selecionada' : 'Selecionar imagem'}
              <Input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: 'none' }}
              />
            </FileInputLabel>
          </FileInputContainer>
          
          {(avatarPreview || user.profile?.avatar) && (
            <PreviewContainer>
              <ImagePreviewWrapper $isAvatar>
                <ImagePreview 
                  src={avatarPreview || user.profile?.avatar} 
                  alt="Preview da foto de perfil" 
                  crossOrigin="anonymous"
                />
                {avatar && (
                  <RemoveButton onClick={removeAvatar}>
                    <FiX size={16} />
                  </RemoveButton>
                )}
              </ImagePreviewWrapper>
            </PreviewContainer>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label>Foto de Capa</Label>
          <FileInputContainer>
            <FileInputLabel>
              <FiUpload size={18} />
              {coverPhoto ? 'Imagem selecionada' : 'Selecionar imagem'}
              <Input
                type="file"
                accept="image/*"
                onChange={handleCoverChange}
                style={{ display: 'none' }}
                crossOrigin="anonymous"
              />
            </FileInputLabel>
          </FileInputContainer>
          
          {(coverPreview || user.profile?.coverPhoto) && (
            <PreviewContainer>
              <ImagePreviewWrapper>
                <ImagePreview 
                  src={coverPreview || user.profile?.coverPhoto} 
                  alt="Preview da foto de capa" 
                />
                {coverPhoto && (
                  <RemoveButton onClick={removeCover}>
                    <FiX size={16} />
                  </RemoveButton>
                )}
              </ImagePreviewWrapper>
            </PreviewContainer>
          )}
        </FormGroup>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        
        <SaveButton type="submit" disabled={loading}>
          {loading ? 'Salvando...' : 'Salvar Alterações'}
        </SaveButton>
      </form>
    </FormContainer>
  );
};

export default ProfileSettings;