import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styled, { keyframes, css } from 'styled-components';
import { FiPlus, FiUser, FiLogOut, FiHome, FiTrendingUp, FiSettings, FiMenu, FiX, FiBell } from 'react-icons/fi';
import { FaLaughSquint } from 'react-icons/fa';
import { useTheme } from '../../styles/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useSwipeable } from 'react-swipeable';
import NotificationDropdown from '../NotificationDropdown/NotificationDropdown';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const MobileNavbarContainer = styled.div`
  position: fixed;
  top: env(safe-area-inset-top);
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(135deg, rgba(255, 115, 0, 0.95) 0%, rgb(230, 65, 5) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 85%;
  max-width: 300px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(255, 115, 0, 0.95) 0%, rgb(230, 65, 5) 100%);
  z-index: 1001;
  transition: left 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'all' : 'none')};
  transition: opacity 0.3s ease;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
`;

const DrawerItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 1.1rem;
  background: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.2)' : 'transparent')};
  
  &:active {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const DrawerFooter = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 8px;
`;

const NavbarPlaceholder = styled.div`
  height: 60px;
`;

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  // Fechar drawer quando a rota muda
  useEffect(() => {
    setActiveRoute(location.pathname);
    setDrawerOpen(false);
  }, [location]);

  // Configuração de gestos
  const handlers = useSwipeable({
    onSwipedLeft: () => setDrawerOpen(false),
    onSwipedRight: () => setDrawerOpen(true),
    trackMouse: true
  });

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      <MobileNavbarContainer>
        <NavButton onClick={() => setDrawerOpen(true)}>
          <FiMenu size={24} />
        </NavButton>
        
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>
            <FaLaughSquint />
            <span>iFuunny</span>
          </Logo>
        </Link>
        
        {user ? (
          <NotificationDropdown />
        ) : (
          <div style={{ width: 24 }}></div> // Espaçamento para alinhar
        )}
      </MobileNavbarContainer>
      
      <Overlay $isOpen={drawerOpen} onClick={() => setDrawerOpen(false)} {...handlers} />
      
      <DrawerContainer $isOpen={drawerOpen} {...handlers}>
        <Logo>
          <FaLaughSquint />
          <span>iFuunny</span>
        </Logo>
        
        {user ? (
          <>
            <DrawerItem 
              to="/" 
              $active={activeRoute === '/'}
              onClick={() => setDrawerOpen(false)}
            >
              <FiTrendingUp />
              <span>Destaques</span>
            </DrawerItem>
            
            <DrawerItem 
              to="/feed" 
              $active={activeRoute === '/feed'}
              onClick={() => setDrawerOpen(false)}
            >
              <FiHome />
              <span>Coletivo</span>
            </DrawerItem>
            
            <DrawerItem 
              to="/upload" 
              $active={activeRoute === '/upload'}
              onClick={() => setDrawerOpen(false)}
            >
              <FiPlus />
              <span>Criar</span>
            </DrawerItem>
            
            <DrawerItem 
              to={`/users/${user._id}`} 
              $active={activeRoute === `/users/${user._id}`}
              onClick={() => setDrawerOpen(false)}
            >
              <FiUser />
              <span>Meu Perfil</span>
            </DrawerItem>
            
            <DrawerItem 
              to="/settings" 
              $active={activeRoute === '/settings'}
              onClick={() => setDrawerOpen(false)}
            >
              <FiSettings />
              <span>Configurações</span>
            </DrawerItem>
            
            <DrawerFooter>
              <DrawerItem as="button" onClick={toggleTheme}>
                {theme === 'light' ? <FiMoon /> : <FiSun />}
                <span>{theme === 'light' ? 'Tema Escuro' : 'Tema Claro'}</span>
              </DrawerItem>
              
              <DrawerItem as="button" onClick={handleLogout}>
                <FiLogOut />
                <span>Sair</span>
              </DrawerItem>
            </DrawerFooter>
          </>
        ) : (
          <>
            <DrawerItem 
              to="/login" 
              $active={activeRoute === '/login'}
              onClick={() => setDrawerOpen(false)}
            >
              <span>Login</span>
            </DrawerItem>
            
            <DrawerItem 
              to="/register" 
              $active={activeRoute === '/register'}
              onClick={() => setDrawerOpen(false)}
            >
              <span>Registrar</span>
            </DrawerItem>
          </>
        )}
      </DrawerContainer>
      
      <NavbarPlaceholder />
    </>
  );
};

export default Navbar;