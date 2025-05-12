import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { login } from '../services/auth';
import styled from 'styled-components';
import { initSocket } from '../services/socket';
import { Capacitor } from '@capacitor/core';
import { Keyboard } from '@capacitor/keyboard';

// Componentes estilizados otimizados para mobile
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--background);
  color: var(--text);
  padding: ${Capacitor.isNativePlatform() ? 'env(safe-area-inset-top) 16px env(safe-area-inset-bottom)' : '0'};
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: ${Capacitor.isNativePlatform() ? '100%' : '400px'};
  margin: auto;
  padding: ${Capacitor.isNativePlatform() ? '2rem 1rem' : '2rem'};
  background: var(--card-bg);
  border-radius: ${Capacitor.isNativePlatform() ? '0' : '16px'};
  box-shadow: ${Capacitor.isNativePlatform() ? 'none' : '0 10px 25px rgba(0, 0, 0, 0.1)'};
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 1rem;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-size: 16px;
  background: var(--input-bg);
  color: var(--text);
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-top: 0.5rem;
  
  &:active {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: var(--danger);
  background-color: rgba(231, 76, 60, 0.1);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
`;

const Title = styled.h1`
  color: var(--text);
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${Capacitor.isNativePlatform() ? '24px' : '28px'};
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-lighter);

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
  }
`;

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    usernameOrEmail: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState('0px');
  
  const { user, initialCheckDone, verifyAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = Capacitor.isNativePlatform();

  // Configuração do teclado para mobile
  useEffect(() => {
    if (isMobile) {
      Keyboard.addListener('keyboardWillShow', (info) => {
        setKeyboardHeight(`${info.keyboardHeight}px`);
      });

      Keyboard.addListener('keyboardWillHide', () => {
        setKeyboardHeight('0px');
      });

      return () => {
        Keyboard.removeAllListeners();
      };
    }
  }, [isMobile]);

  useEffect(() => {
    if (!initialCheckDone) return;
    
    if (user) {
      navigate(location.state?.from?.pathname || '/feed', { 
        replace: true,
        state: {
          ...location.state,
          isMobile
        }
      });
    }
  }, [user, initialCheckDone, navigate, location, isMobile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await login(credentials);
      localStorage.setItem('token', response.token);
      initSocket(response.token);
      await verifyAuth();
      
      navigate(location.state?.from?.pathname || '/trending', { 
        replace: true,
        state: {
          ...location.state,
          isMobile
        }
      });
    } catch (err) {
      setError(err.message || 'Credenciais inválidas. Por favor, tente novamente.');
      localStorage.removeItem('token');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container style={{ 
      paddingBottom: keyboardHeight,
      transition: 'padding-bottom 0.3s ease'
    }}>
      <FormContainer>
        <Title>Bem-vindo de volta</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Usuário ou Email"
            value={credentials.usernameOrEmail}
            onChange={(e) => setCredentials({...credentials, usernameOrEmail: e.target.value})}
            required
            autoCapitalize="none"
          />
          <Input
            type="password"
            placeholder="Senha"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
        
        <FooterText>
          Não tem conta? <Link to="/register" state={{ isMobile }}>Cadastre-se</Link>
        </FooterText>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;