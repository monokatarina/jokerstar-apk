import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/auth';
import styled from 'styled-components';

// Componentes estilizados (podem ser movidos para um arquivo separado para reutilização)
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.3s ease;

  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4f7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  background-color: #fdecea;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 28px;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #7f8c8d;

  a {
    color: #4a90e2;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PasswordHint = styled.small`
  display: block;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  color: #7f8c8d;
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await register(userData);
      localStorage.setItem('token', response.token);
      navigate('/feed', { replace: true });
    } catch (err) {
      setError(err.type === 'CONFLICT' 
        ? err.message 
        : 'Erro ao cadastrar. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
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
          />
          
          <Input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            required
          />
          
          <Input
            type="password"
            placeholder="Senha"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
            required
            minLength={6}
          />
          <PasswordHint>Mínimo de 8 caracteres e numeros</PasswordHint>
          
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Cadastrando...' : 'Criar conta'}
          </Button>
        </form>
        
        <FooterText>
          Já tem conta? <Link to="/login">Faça login</Link>
        </FooterText>
      </FormContainer>
    </Container>
  );
};

export default RegisterPage;