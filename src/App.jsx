import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './styles/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar/Navbar';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Keyboard } from '@capacitor/keyboard';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import { LocalNotifications } from '@capacitor/local-notifications';
import api from './services/api';

// Importações de páginas
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
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 60px 0 72px;
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
  const checkForNotifications = async () => {
    try {
      // Chamada real à API para verificar notificações não lidas
      const response = await api.get('/notifications/unread-count');
      if (response.data.count > 0) {
        await LocalNotifications.schedule({
          notifications: [{
            title: 'Novas notificações',
            body: `Você tem ${response.data.count} novas notificações`,
            id: new Date().getTime(),
            extra: { type: 'unread-notifications' },
            smallIcon: 'ic_stat_icon',
            iconColor: '#121212'
          }]
        });
      }
    } catch (error) {
      console.error('Error checking notifications:', error);
    }
  };

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      // Configuração da StatusBar - Corrigido
      StatusBar.setBackgroundColor({ color: '#121212' }).catch(console.error);
      StatusBar.setStyle({ style: Style.Dark }).catch(console.error);
      StatusBar.setOverlaysWebView({ overlay: false }).catch(console.error);
      
      // Configuração do teclado
      Keyboard.setAccessoryBarVisible({ isVisible: true });
      Keyboard.addListener('keyboardWillShow', (info) => {
        document.documentElement.style.setProperty('--keyboard-height', `${info.keyboardHeight}px`);
      });
      Keyboard.addListener('keyboardWillHide', () => {
        document.documentElement.style.setProperty('--keyboard-height', '0px');
      });

      // Verifica notificações quando o app é aberto
      checkForNotifications();

      // Listener para quando o app volta ao foreground
      CapacitorApp.addListener('appStateChange', ({ isActive }) => {
        if (isActive) {
          checkForNotifications();
        }
      });

      // Solicita permissão para notificações
      LocalNotifications.requestPermissions().catch(console.error);
    }

    // Configuração inicial de notificações (para web também)
    const init = async () => {
      if ('Notification' in window && Notification.permission !== 'denied') {
        await Notification.requestPermission();
      }
    };
    init();

    return () => {
      // Limpeza dos listeners
      Keyboard.removeAllListeners();
      CapacitorApp.removeAllListeners();
    };
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

              <KeyboardSpacer />
            </AppContainer>
          </ThemeProvider>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;