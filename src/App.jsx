import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  height: 100vh;
  background: var(--background);
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: calc(60px + env(safe-area-inset-top)); // Navbar + status bar
  padding-bottom: env(safe-area-inset-bottom);
  scroll-behavior: smooth;
`;

const KeyboardSpacer = styled.div`
  height: var(--keyboard-height, 0px);
  transition: height 0.3s ease;
`;

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding-top: env(safe-area-inset-top);
  background: linear-gradient(135deg, #FF6B00 0%, #FF3D00 100%);
`;

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollPosition = useRef(0);
  const mainContentRef = useRef();
  const scrollTimeout = useRef(null);

  const handleScroll = useCallback(() => {
    const currentScroll = mainContentRef.current?.scrollTop || 0;
    const scrollDirection = currentScroll > lastScrollPosition.current ? 'down' : 'up';
    const scrollDistance = Math.abs(currentScroll - lastScrollPosition.current);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    if (scrollDistance > 5) {
      if (scrollDirection === 'down' && currentScroll > 60) {
        setNavbarVisible(false);
      } else if (scrollDirection === 'up') {
        setNavbarVisible(true);
      }
    }

    lastScrollPosition.current = currentScroll;
    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 100);
  }, []);

  useEffect(() => {
    const container = mainContentRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#FF6B00' }).catch(console.error);
      StatusBar.setStyle({ style: Style.Light }).catch(console.error);
      StatusBar.setOverlaysWebView({ overlay: false }).catch(console.error);

      if (Capacitor.getPlatform() !== 'web') {
        Keyboard.setAccessoryBarVisible({ isVisible: true });
        Keyboard.addListener('keyboardWillShow', (info) => {
          document.documentElement.style.setProperty('--keyboard-height', `${info.keyboardHeight}px`);
        });
        Keyboard.addListener('keyboardWillHide', () => {
          document.documentElement.style.setProperty('--keyboard-height', '0px');
        });
      }
    }

    return () => {
      if (Capacitor.getPlatform() !== 'web') {
        Keyboard.removeAllListeners();
      }
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

              {Capacitor.isNativePlatform() && <KeyboardSpacer />}
            </AppContainer>
          </ThemeProvider>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;