import React, { useState, useEffect } from 'react';
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
const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const popIn = keyframes`
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

// Styled Components
const MobileNavbarContainer = styled.nav`
  position: fixed;
  top: env(safe-area-inset-top);
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(135deg, #FF6B00 0%, #FF3D00 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  transform: ${({ $visible }) => $visible ? 'translateY(0)' : 'translateY(-100%)'};
`;
const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
`;

const BrandLogo = styled(FaLaughSquint)`
  font-size: 1.8rem;
  color: #FFF;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`;

const BrandText = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #FFF;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 280px;
  height: 100vh;
  background: #1A1A1A;
  z-index: 1002;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'all' : 'none')};
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
`;

const DrawerHeader = styled.div`
  padding: 24px 20px;
  background: linear-gradient(135deg, #FF6B00 0%, #FF3D00 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const DrawerItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  color: ${({ $active }) => ($active ? '#FF6B00' : '#FFF')};
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  position: relative;
  background: ${({ $active }) => ($active ? 'rgba(255, 107, 0, 0.1)' : 'transparent')};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #FF6B00;
    opacity: ${({ $active }) => ($active ? '1' : '0')};
    transition: opacity 0.2s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ $active }) => ($active ? '#FF6B00' : 'rgba(255, 255, 255, 0.7)')};
  }
`;

const DrawerFooter = styled.div`
  margin-top: auto;
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  color: #FFF;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(0.9);
  }
`;

const Navbar = ({ navbarVisible }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
    setDrawerOpen(false);
  }, [location]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setDrawerOpen(false),
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
      <MobileNavbarContainer $visible={navbarVisible}>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <FiMenu size={24} />
        </IconButton>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <BrandWrapper>
            <BrandLogo />
            <BrandText>iFunny</BrandText>
          </BrandWrapper>
        </Link>

        <div style={{ display: 'flex', gap: '12px' }}>
          {user && <NotificationDropdown />}
        </div>
      </MobileNavbarContainer>

      <Overlay $isOpen={drawerOpen} onClick={() => setDrawerOpen(false)} {...handlers} />

      <DrawerContainer $isOpen={drawerOpen} {...handlers}>
        <DrawerHeader>
          <BrandWrapper>
            <BrandLogo />
            <BrandText>iFunny</BrandText>
          </BrandWrapper>
        </DrawerHeader>

        <div style={{ padding: '16px 0', flex: 1 }}>
          {user ? (
            <>
              <DrawerItem 
                to="/" 
                $active={activeRoute === '/'}
              >
                <FiTrendingUp />
                Trending
              </DrawerItem>

              <DrawerItem 
                to="/feed" 
                $active={activeRoute === '/feed'}
              >
                <FiHome />
                Feed
              </DrawerItem>

              <DrawerItem 
                to="/upload" 
                $active={activeRoute === '/upload'}
              >
                <FiPlus />
                Create
              </DrawerItem>

              <DrawerItem 
                to={`/users/${user._id}`} 
                $active={activeRoute === `/users/${user._id}`}
              >
                <FiUser />
                Profile
              </DrawerItem>
            </>
          ) : (
            <>
              <DrawerItem to="/login" $active={activeRoute === '/login'}>
                Login
              </DrawerItem>

              <DrawerItem to="/register" $active={activeRoute === '/register'}>
                Register
              </DrawerItem>
            </>
          )}
        </div>

        <DrawerFooter>
          <DrawerItem as="button" onClick={toggleTheme}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </DrawerItem>

          {user && (
            <DrawerItem as="button" onClick={handleLogout}>
              <FiLogOut />
              Logout
            </DrawerItem>
          )}
        </DrawerFooter>
      </DrawerContainer>
    </>
  );
};

export default Navbar;