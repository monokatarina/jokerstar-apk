import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { StatusBar} from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FeedPage from './pages/FeedPage';
import UploadPage from './pages/UploadPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import TrendingPage from './pages/TrendingPage';
import { ThemeProvider } from './styles/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import MemeDetailPage from './pages/MemeDetailPage';
import { Keyboard } from '@capacitor/keyboard';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: ${Capacitor.isNativePlatform() ? 'env(safe-area-inset-top)' : '0'};
  padding-bottom: ${Capacitor.isNativePlatform() ? 'env(safe-area-inset-bottom)' : '0'};
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${Capacitor.isNativePlatform() ? '0' : '1rem'};
  background-color: var(--background);
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MobileSafeArea = styled.div`
  padding-top: ${Capacitor.isNativePlatform() ? '60px' : '0'};
`;

function App() {
  // Configurações específicas para mobile
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      // Configura a status bar
      StatusBar.setOverlaysWebView({ overlay: true });
      StatusBar.setBackgroundColor({ color: '#00000000' });
      
      // Ajusta o layout quando o teclado aparece
      Keyboard.addListener('keyboardWillShow', () => {
        document.documentElement.style.setProperty('--keyboard-height', '300px');
      });
      
      Keyboard.addListener('keyboardWillHide', () => {
        document.documentElement.style.setProperty('--keyboard-height', '0px');
      });
    }
  }, []);

  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <ThemeProvider>
            <GlobalStyles />
            <AppContainer>
              {Capacitor.isNativePlatform() ? (
                <>
                  <Navbar />
                  <MobileSafeArea>
                    <MainContent>
                      <Routes>
                        {/* Rotas públicas */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/memes/:id" element={<MemeDetailPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/users/:userId" element={<ProfilePage />} />
                        <Route path="/trending" element={<TrendingPage />} />
                        
                        {/* Rotas protegidas */}
                        <Route path="/feed" element={
                          <PrivateRoute>
                            <FeedPage />
                          </PrivateRoute>
                        } />
                        
                        <Route path="/upload" element={
                          <PrivateRoute>
                            <UploadPage />
                          </PrivateRoute>
                        } />
                        
                        {/* Rota para páginas não encontradas */}
                        <Route path="*" element={<Navigate to="/" />} />
                      </Routes>
                    </MainContent>
                  </MobileSafeArea>
                </>
              ) : (
                <>
                  <Navbar />
                  <MainContent>
                    <Routes>
                      {/* Mesmas rotas para versão web */}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/memes/:id" element={<MemeDetailPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/register" element={<RegisterPage />} />
                      <Route path="/users/:userId" element={<ProfilePage />} />
                      <Route path="/trending" element={<TrendingPage />} />
                      <Route path="/feed" element={<PrivateRoute><FeedPage /></PrivateRoute>} />
                      <Route path="/upload" element={<PrivateRoute><UploadPage /></PrivateRoute>} />
                      <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                  </MainContent>
                </>
              )}
            </AppContainer>
          </ThemeProvider>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;