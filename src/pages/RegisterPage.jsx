import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { register } from '../services/auth';
import styled from 'styled-components';
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

const PasswordHint = styled.small`
  display: block;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  color: var(--text-lighter);
  font-size: 0.8rem;
`;

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState('0px');
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await register(userData);
      localStorage.setItem('token', response.token);
      
      navigate(location.state?.from?.pathname || '/feed', { 
        replace: true,
        state: {
          ...location.state,
          isMobile
        }
      });
    } catch (err) {
      setError(err.type === 'CONFLICT' 
        ? err.message 
        : 'Erro ao cadastrar. Por favor, tente novamente.');
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
        <Title>Crie sua conta</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome de usuário"
            value={userData.username}
            onChange={(e) => setUserData({...userData, username: e.target.value})}
            required
            minLength={3}
            autoCapitalize="none"
          />
          
          <Input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            required
            autoCapitalize="none"
          />
          
          <Input
            type="password"
            placeholder="Senha"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
            required
            minLength={6}
          />
          <PasswordHint>Mínimo de 6 caracteres</PasswordHint>
          
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Cadastrando...' : 'Criar conta'}
          </Button>
        </form>
        
        <FooterText>
          Já tem conta? <Link to="/login" state={{ isMobile }}>Faça login</Link>
        </FooterText>
      </FormContainer>
    </Container>
  );
};

export default RegisterPage;