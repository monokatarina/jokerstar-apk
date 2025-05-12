// src/components/LoadingSpinner.jsx
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.$fullPage && `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 1000;
  `}
`;

const SpinnerIcon = styled(FaSpinner)`
  animation: spin 1s linear infinite;
  font-size: 2rem;
  color: #ff4500;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const LoadingSpinner = ({ fullPage = false }) => {
  return (
    <SpinnerContainer $fullPage={fullPage}>
      <SpinnerIcon />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;