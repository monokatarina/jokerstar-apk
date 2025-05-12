import React from 'react';
import styled from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';
import { FaRedo } from 'react-icons/fa';

const ErrorContainer = styled.div`
  background-color: rgba(255, 0, 0, 0.1);
  border-left: 4px solid var(--danger);
  color: var(--danger);
  padding: 1rem;
  border-radius: var(--radius-sm);
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ErrorText = styled.p`
  margin: 0;
  flex: 1;
`;

const RetryButton = styled.button`
  background: none;
  border: none;
  color: var(--danger);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);

  &:hover {
    background: rgba(255, 0, 0, 0.1);
  }
`;

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <FiAlertCircle size={20} />
      <ErrorText>{message || 'Ocorreu um erro inesperado'}</ErrorText>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          <FaRedo size={14} />
          Tentar novamente
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

export default ErrorMessage;