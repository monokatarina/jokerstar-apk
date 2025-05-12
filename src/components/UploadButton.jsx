import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ff4500;
  color: white;
  border: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    background-color: #e03d00;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const UploadButton = () => {
  const { user, loading, initialCheckDone } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (loading || !initialCheckDone) return;
    
    if (!user) {
      navigate('/login', { state: { from: '/upload' } });
      return;
    }
    navigate('/upload');
  };

  if (loading || !initialCheckDone) {
    return null;
  }

  return (
    <Button 
      onClick={handleClick}
      disabled={loading}
      aria-label="Botão de upload"
    >
      <FiPlus />
    </Button>
  );
};

export default UploadButton;