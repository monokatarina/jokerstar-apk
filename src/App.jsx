import React, { useEffect, useRef, useState } from 'react';
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

// Páginas
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
  padding-top: calc(60px + env(safe-area-inset-top));
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
  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollPosition = useRef(0);
  const mainContentRef = useRef();

  useEffect(() => {
    const container = mainContentRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScroll = container.scrollTop;
      const isScrollingDown = currentScroll > lastScrollPosition.current;

      if (isScrollingDown && currentScroll > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }

      lastScrollPosition.current = currentScroll;
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#121212' }).catch(console.error);
      StatusBar.setStyle({ style: Style.Dark }).catch(console.error);
      StatusBar.setOverlaysWebView({ overlay: false }).catch(console.error);

      Keyboard.setAccessoryBarVisible({ isVisible: true });
      Keyboard.addListener('keyboardWillShow', (info) => {
        document.documentElement.style.setProperty('--keyboard-height', `${info.keyboardHeight}px`);
      });
      Keyboard.addListener('keyboardWillHide', () => {
        document.documentElement.style.setProperty('--keyboard-height', '0px');
      });

      CapacitorApp.addListener('appStateChange', ({ isActive }) => {});
    }

    return () => {
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
                <Navbar navbarVisible={navbarVisible} />
              </NavbarWrapper>

              <MainContent ref={mainContentRef}>
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
