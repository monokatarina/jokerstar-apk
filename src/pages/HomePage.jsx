import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import TrendingPage from './TrendingPage';

const HomePage = () => {
  const { user } = useAuth();

  if (user) {
    return <TrendingPage />;
  }

  return (
    <div>
      <h1>Bem-vindo ao iFunny Clone</h1>
      <p>Faça login para ver o conteúdo</p>
    </div>
  );
};

export default HomePage;