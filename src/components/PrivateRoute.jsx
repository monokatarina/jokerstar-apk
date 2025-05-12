// src/components/PrivateRoute.jsx
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from './LoadingSpinner';
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';

const PrivateRoute = ({ children }) => {
  const { user, loading, initialCheckDone } = useAuth();
  const location = useLocation();

  // Configurações específicas para mobile
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#121212' });
    }
  }, []);

  if (loading || !initialCheckDone) {
    return <LoadingSpinner fullPage />;
  }

  if (!user) {
    // Redirecionamento otimizado para mobile
    return (
      <Navigate 
        to="/login" 
        replace 
        state={{ 
          from: location,
          message: 'Por favor faça login para acessar esta página',
          // Adiciona flag para mobile
          isMobile: Capacitor.isNativePlatform()
        }} 
      />
    );
  }

  // Adiciona container seguro para mobile
  return Capacitor.isNativePlatform() ? (
    <div style={{ 
      paddingTop: 'env(safe-area-inset-top)',
      paddingBottom: 'env(safe-area-inset-bottom)',
      minHeight: 'calc(100vh - 60px)' // Ajuste para a navbar
    }}>
      {children}
    </div>
  ) : (
    children
  );
};

export default PrivateRoute;