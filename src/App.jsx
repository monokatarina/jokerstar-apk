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
import { App as CapacitorApp } from '@capacitor/app';
import { LocalNotifications } from '@capacitor/local-notifications';
import { BackgroundFetch } from '@transistorsoft/capacitor-background-fetch';

// Importações de páginas (mantidas as mesmas)
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
      // Simulação - substitua por sua chamada real à API
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
      // Configuração da StatusBar
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

      // Configuração de notificações em segundo plano
      const setupBackgroundTasks = async () => {
        // 1. Verifica notificações quando o app é aberto
        await checkForNotifications();

        // 2. Configura o Background Fetch (para iOS/Android)
        try {
          await BackgroundFetch.configure({
            minimumFetchInterval: 15, // mínimo 15 minutos entre execuções
            stopOnTerminate: false,  // continuar mesmo quando app é fechado
            startOnBoot: true        // iniciar quando dispositivo é ligado
          }, async (taskId) => {
            console.log('BackgroundFetch executado', taskId);
            await checkForNotifications();
            BackgroundFetch.finish({ taskId });
          });
        } catch (error) {
          console.log('BackgroundFetch não suportado ou configurado', error);
        }

        // 3. Listener para quando o app volta ao foreground
        CapacitorApp.addListener('appStateChange', ({ isActive }) => {
          if (isActive) {
            checkForNotifications();
          }
        });
      };

      setupBackgroundTasks();
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