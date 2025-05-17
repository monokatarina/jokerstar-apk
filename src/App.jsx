import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './styles/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar/Navbar';
import { StatusBar } from '@capacitor/status-bar';
import { Keyboard } from '@capacitor/keyboard';
import { Capacitor } from '@capacitor/core';

// Importações individuais de páginas
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FeedPage from './pages/FeedPage';
import UploadPage from './pages/UploadPage';
import ProfilePage from './pages/ProfilePage';
import TrendingPage from './pages/TrendingPage';
import MemeDetailPage from './pages/MemeDetailPage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--background);
  padding-top: ${Capacitor.isNativePlatform() ? '20px' : 'env(safe-area-inset-top)'};
  padding-bottom: env(safe-area-inset-bottom);
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 60px 0 72px; /* 60px top para a navbar e 72px bottom para evitar o footer */
  -webkit-overflow-scrolling: touch;
  
  @media (max-width: 768px) {
    padding-bottom: 64px;
  }
`;

const KeyboardSpacer = styled.div`
  height: var(--keyboard-height, 0px);
  transition: height 0.3s ease;
`;

const NavbarWrapper = styled.div`
  position: fixed;
  top: env(safe-area-inset-top);
  width: 100%;
  z-index: 1000;
`;

function App() {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      // Configuração correta da StatusBar
      StatusBar.setOverlaysWebView({ overlay: false });
      StatusBar.setBackgroundColor({ color: '#121212' });
      StatusBar.setStyle({ style: 'dark' });
      
      // Configuração do teclado
      Keyboard.setAccessoryBarVisible({ isVisible: true });
      Keyboard.addListener('keyboardWillShow', (info) => {
        document.documentElement.style.setProperty('--keyboard-height', `${info.keyboardHeight}px`);
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
              <NavbarWrapper>
                <Navbar />
              </NavbarWrapper>
            
              
              <MainContent>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/memes/:id" element={<MemeDetailPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/users/:userId" element={<ProfilePage />} />
                  <Route path="/trending" element={<TrendingPage />} />

                  {/* Protected Routes */}
                  <Route path="/feed" element={<PrivateRoute><FeedPage /></PrivateRoute>} />
                  <Route path="/upload" element={<PrivateRoute><UploadPage /></PrivateRoute>} />

                  {/* Fallback Route */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </MainContent>

              <KeyboardSpacer />
              
            </AppContainer>
          </ThemeProvider>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;