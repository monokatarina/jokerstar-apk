import React, { useState, useEffect } from 'react';
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

const ProcessingSteps = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: var(--card-bg-light);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  color: ${props => props.completed ? 'var(--success)' : 'var(--text-light)'};
  transition: var(--transition);
`;

const StepIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 50%;
  background: ${props => props.completed ? 'var(--success)' : 'var(--border)'};
  color: white;
  font-size: 0.8rem;
`;

const StepText = styled.span`
  flex: 1;
`;

const ProgressBarContainer = styled.div`
  height: 8px;
  background: var(--border-light);
  border-radius: 4px;
  margin: 1rem 0;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  background: var(--primary);
  border-radius: 4px;
  transition: width 0.5s ease;
`;

const FunMessages = [
  "vc sabia que vc não respirar vc morre ?",
  "piorando seu video/imgem",
  "vc sabia que sua mae deu pro seu pai ?",
  "texto inutil , para efeito placebo"
];

const UploadPage = () => {
  const { user, loading: authLoading, initialCheckDone } = useAuth();
  const navigate = useNavigate();
  
  const [uploadComplete, setUploadComplete] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [processingSteps, setProcessingSteps] = useState([
    { id: 1, text: "Verificando arquivo, para ver ser não pinto", completed: false },
    { id: 2, text: "Otimizando mídia'piorando imagem'", completed: false },
    { id: 3, text: "te enrolando para não ver os bugs", completed: false },
    { id: 4, text: "Gerando miniaturas", completed: false }
  ]);
  const [progress, setProgress] = useState(0);
  const [funMessage, setFunMessage] = useState(FunMessages[0]);
  const [showProcessing, setShowProcessing] = useState(false);

  useEffect(() => {
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

  const startProcessingAnimation = () => {
    let lastStepTime = Date.now();
    
    // Animação de progresso
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Progresso mais lento após 80%
        const increment = prev < 80 ? 
          Math.random() * 10 : 
          Math.random() * 5;
        return Math.min(prev + increment, 100);
      });
    }, 500);

    // Atualiza os passos de processamento
    const stepsInterval = setInterval(() => {
      setProcessingSteps(prev => {
        const nextStep = prev.find(step => !step.completed);
        if (!nextStep) {
          clearInterval(stepsInterval);
          return prev;
        }
        // Passos mais rápidos no início, mais lentos no final
        const delay = nextStep.id < 3 ? 1500 : 5000;
        if (Date.now() - lastStepTime > delay) {
          lastStepTime = Date.now();
          return prev.map(step => 
            step.id === nextStep.id ? {...step, completed: true} : step
          );
        }
        return prev;
      });
    }, 1000);

    // Mensagens divertidas que mudam aleatoriamente
    const messageInterval = setInterval(() => {
      setFunMessage(FunMessages[Math.floor(Math.random() * FunMessages.length)]);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepsInterval);
      clearInterval(messageInterval);
    };
  };

  const completePlaceboAnimation = () => {
    setProgress(100);
    setProcessingSteps(prev => prev.map(step => ({...step, completed: true})));
    setFunMessage("parabens seu post podre foi criado!");
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('Selecione um arquivo para upload, pintos não seram tolerados');
      return;
    }

    if (caption.length > 500) {
      setError('A legenda não pode ter mais de 500 caracteres');
      return;
    }

    setIsUploading(true);
    setError(null);
    setShowProcessing(true);
    setProgress(0);
    setProcessingSteps(prev => prev.map(step => ({...step, completed: false})));

    // Inicia a animação placebo
    const cleanupAnimation = startProcessingAnimation();

    try {
      // Processamento real em paralelo
      const mentions = await extractMentions(caption);
      
      if (mentions.length > 5) {
        throw new Error('Você pode mencionar no máximo 5 pessoas');
      }

      const formData = new FormData();
      formData.append('media', file);
      formData.append('caption', caption);
      formData.append('mentions', JSON.stringify(mentions));

      // Faz o upload real
      const response = await api.post('/memes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Completa a animação placebo
      completePlaceboAnimation();

      // Espera um pouco para mostrar a conclusão
      await new Promise(resolve => setTimeout(resolve, 1500));

      setUploadComplete(true);
      
      // Redireciona para a página do meme usando o padrão getMemeLink()
      setTimeout(() => navigate(`/memes/${response.data._id}`), 1500);
    } catch (err) {
      console.error('Upload failed:', err);
      setError(err.response?.data?.message || err.message || 'Erro ao fazer upload');
      setShowProcessing(false);
    } finally {
      setIsUploading(false);
      cleanupAnimation();
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
            placeholder="Adicione uma legenda se quiser"
          />

          {caption && (
            <PreviewContainer>
              <PreviewLabel>Pré-visualização:</PreviewLabel>
              <div style={{ lineHeight: 1.5 }}>
                {renderMentions(caption, navigate)}
              </div>
            </PreviewContainer>
          )}

          {showProcessing && (
            <ProcessingSteps>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text)' }}>{funMessage}</h4>
              
              {processingSteps.map(step => (
                <Step key={step.id} completed={step.completed}>
                  <StepIcon completed={step.completed}>
                    {step.completed ? '✓' : step.id}
                  </StepIcon>
                  <StepText>{step.text}</StepText>
                </Step>
              ))}
              
              <ProgressBarContainer>
                <ProgressBar progress={progress} />
              </ProgressBarContainer>
              
              <p style={{ 
                textAlign: 'center', 
                marginTop: '0.5rem', 
                color: 'var(--text-light)', 
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                {progress < 30 ? "Isso pode levar alguns instantes..." : 
                 progress < 70 ? "Estamos quase lá! Continue conosco..." : 
                 progress < 100 ? "Finalizando... Obrigado pela paciência!" :
                 "Pronto! Redirecionando..."}
              </p>
            </ProcessingSteps>
          )}

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <UploadButton 
            onClick={handleSubmit} 
            disabled={isUploading || !file}
          >
            {isUploading ? (
              <>
                <span className="spinner"></span>
                {progress < 30 ? "Processando..." : 
                 progress < 70 ? "Quase pronto..." : 
                 progress < 100 ? "Finalizando..." :
                 "Concluído!"}
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