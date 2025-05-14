import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styled, { keyframes } from 'styled-components';
import { FiHome, FiPlus, FiBell, FiUser, FiCompass } from 'react-icons/fi';
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';
import { Keyboard } from '@capacitor/keyboard';
import NotificationDropdown from '../NotificationDropdown/NotificationDropdown';

// Animations
const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

// Styled Components
const MobileNavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${Capacitor.isNativePlatform() ? '64px' : '56px'};
  background: ${({ theme }) => theme.navBackground || 'rgba(255, 115, 0, 0.95)'};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding-bottom: env(safe-area-inset-bottom);
`;

const NavItem = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 100%;
  color: ${({ $active }) => $active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;
  transition: transform 0.1s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.9);
  }

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }
`;

const NavLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2px;
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: ${Capacitor.isNativePlatform() ? '84px' : '70px'};
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: var(--primary);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.1s ease;

  &:active {
    transform: translateX(-50%) scale(0.9);
  }
`;

const NotificationWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  // Configuração inicial da status bar
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#00000000' });
      StatusBar.setStyle({ style: 'light' });
    }
  }, []);

  const mainRoutes = [
    { path: '/', icon: FiCompass, label: 'Explorar' },
    { path: '/feed', icon: FiHome, label: 'Início' },
    { path: user ? `/users/${user._id}` : '/login', icon: FiUser, label: 'Perfil' },
  ];

  return (
    <>
      <MobileNavBar>
        {mainRoutes.map((route) => (
          <NavItem
            key={route.path}
            to={route.path}
            $active={activeRoute === route.path}
          >
            <route.icon />
            <NavLabel>{route.label}</NavLabel>
          </NavItem>
        ))}
        
        <NotificationWrapper>
          <NavItem
            as="div"
            style={{ cursor: 'pointer', width: '72px' }}
            $active={false}
          >
            <FiBell />
            <NavLabel>Notificações</NavLabel>
            <NotificationDropdown />
          </NavItem>
        </NotificationWrapper>
      </MobileNavBar>

      {user && (
        <FloatingButton 
          onClick={() => navigate('/upload')}
          aria-label="Criar novo meme"
        >
          <FiPlus size={24} />
        </FloatingButton>
      )}
    </>
  );
};

export default Navbar;