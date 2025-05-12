// MemeOptions.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEllipsisH, FaTrash } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

const OptionsButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

const OptionsMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 5px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 3;
  min-width: 150px;
  transform-origin: top right;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const OptionItem = styled.button`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #ff4500;
  }

  svg {
    font-size: 14px;
  }
`;

const MemeOptions = ({ memeId, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/memes/${memeId}`);
      onDelete(memeId);
    } catch (err) {
      console.error('Erro ao deletar meme:', err);
    }
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <OptionsButton onClick={() => setIsOpen(!isOpen)}>
        <FaEllipsisH size={14} />
      </OptionsButton>

      {isOpen && (
        <OptionsMenu>
          <OptionItem onClick={handleDelete}>
            <FaTrash />
            <span>Deletar</span>
          </OptionItem>
        </OptionsMenu>
      )}
    </div>
  );
};

export default MemeOptions;