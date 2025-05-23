import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styled, { keyframes } from 'styled-components';
import { FiPlus, FiUser, FiLogOut, FiHome, FiTrendingUp, FiMenu, FiBell, FiSearch } from 'react-icons/fi';
import { FaReddit } from 'react-icons/fa';
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
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  padding-top: env(safe-area-inset-top);
  background: ${({ theme }) => theme === 'dark' ? '#1A1A1B' : '#FFFFFF'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme === 'dark' ? '#343536' : '#EDEFF1'};
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $visible }) => $visible ? 'translateY(0)' : 'translateY(-100%)'};
  will-change: transform;
`;

const NavbarShadow = styled.div`
  position: fixed;
  top: calc(56px + env(safe-area-inset-top));
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent);
  z-index: 999;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: opacity 0.25s ease;
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

const BrandLogo = styled(FaReddit)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme === 'dark' ? '#D7DADC' : '#FF4500'};
`;

const BrandText = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme === 'dark' ? '#D7DADC' : '#1A1A1B'};
  letter-spacing: -0.5px;
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 280px;
  height: 100vh;
  padding-top: env(safe-area-inset-top);
  background: ${({ theme }) => theme === 'dark' ? '#1A1A1B' : '#FFFFFF'};
  z-index: 1002;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme === 'dark' ? '#343536' : '#EDEFF1'};
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
  background: ${({ theme }) => theme === 'dark' ? '#1A1A1B' : '#FFFFFF'};
  border-bottom: 1px solid ${({ theme }) => theme === 'dark' ? '#343536' : '#EDEFF1'};
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme === 'dark' ? '#343536' : '#EDEFF1'};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme === 'dark' ? '#D7DADC' : '#1A1A1B'};
`;

const Karma = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme === 'dark' ? '#818384' : '#787C7E'};
`;

const DrawerItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  color: ${({ $active, theme }) => ($active ? '#FF4500' : theme === 'dark' ? '#D7DADC' : '#1A1A1B')};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  position: relative;
  background: ${({ $active }) => ($active ? 'rgba(255, 69, 0, 0.1)' : 'transparent')};

  &:hover {
    background: ${({ theme }) => theme === 'dark' ? '#272729' : '#F6F7F8'};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ $active }) => ($active ? '#FF4500' : 'inherit')};
  }
`;

const DrawerFooter = styled.div`
  margin-top: auto;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme === 'dark' ? '#343536' : '#EDEFF1'};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  color: ${({ theme }) => theme === 'dark' ? '#D7DADC' : '#1A1A1B'};
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: ${({ theme }) => theme === 'dark' ? '#272729' : '#F6F7F8'};
  }
`;

const SearchButton = styled(IconButton)`
  background: ${({ theme }) => theme === 'dark' ? '#272729' : '#F6F7F8'};
  border-radius: 20px;
  padding: 8px 12px;
  flex: 1;
  max-width: 200px;
  justify-content: flex-start;
  gap: 8px;
  margin: 0 8px;
`;

const SearchText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme === 'dark' ? '#818384' : '#787C7E'};
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

  const buildUrl = (url) => {
    if (!url) return 'https://i.pravatar.cc/150?img=3';
    if (url.startsWith('http://')) url = 'https://' + url.substring(7);
    if (url.startsWith('https://') || url.startsWith('blob:')) return url;
    
    const normalizedPath = url.startsWith('/') ? url : `/${url}`;
    const apiUrl = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';
    return `${apiUrl}${normalizedPath}`;
  };

  return (
    <>
      <MobileNavbarContainer $visible={navbarVisible} theme={theme}>
        <IconButton 
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          theme={theme}
        >
          <FiMenu size={24} />
        </IconButton>

        <SearchButton 
          onClick={() => navigate('/search')}
          theme={theme}
        >
          <FiSearch size={18} />
          <SearchText theme={theme}>Search</SearchText>
        </SearchButton>

        {user ? (
          <IconButton 
            onClick={() => navigate(`/users/${user._id}`)}
            aria-label="Profile"
            theme={theme}
          >
            <UserAvatar 
              src={
                user.profile?.avatar 
                  ? buildUrl(user.profile.avatar)
                  : 'https://i.pravatar.cc/150?img=3'
              }
              alt={user.username}
              onError={(e) => {
                e.target.src = 'https://i.pravatar.cc/150?img=3';
              }}
              theme={theme}
            />
          </IconButton>
        ) : (
          <IconButton 
            onClick={() => navigate('/login')}
            aria-label="Login"
            theme={theme}
          >
            <FiUser size={24} />
          </IconButton>
        )}
      </MobileNavbarContainer>

      <NavbarShadow $visible={navbarVisible} />

      <Overlay 
        $isOpen={drawerOpen} 
        onClick={() => setDrawerOpen(false)} 
        {...handlers} 
      />

      <DrawerContainer $isOpen={drawerOpen} {...handlers} theme={theme}>
        <DrawerHeader theme={theme}>
          {user ? (
            <>
              <UserAvatar 
                src={
                  user.profile?.avatar 
                    ? buildUrl(user.profile.avatar)
                    : 'https://i.pravatar.cc/150?img=3'
                }
                alt={user.username}
                onClick={() => {
                  setDrawerOpen(false);
                  navigate(`/users/${user._id}`);
                }}
                onError={(e) => {
                  e.target.src = 'https://i.pravatar.cc/150?img=3';
                }}
                theme={theme}
              />
              <UserInfo>
                <Username theme={theme}>u/{user.username}</Username>
                <Karma theme={theme}>1 karma</Karma>
              </UserInfo>
            </>
          ) : (
            <BrandWrapper>
              <BrandLogo theme={theme} />
              <BrandText theme={theme}>iFunny</BrandText>
            </BrandWrapper>
          )}
        </DrawerHeader>

        <div style={{ padding: '16px 0', flex: 1 }}>
          {user ? (
            <>
              <DrawerItem 
                to="/" 
                $active={activeRoute === '/'}
                theme={theme}
              >
                <FiHome />
                Home
              </DrawerItem>

              <DrawerItem 
                to="/trending" 
                $active={activeRoute === '/trending'}
                theme={theme}
              >
                <FiTrendingUp />
                Popular
              </DrawerItem>

              <DrawerItem 
                to="/upload" 
                $active={activeRoute === '/upload'}
                theme={theme}
              >
                <FiPlus />
                Create Post
              </DrawerItem>

              <DrawerItem 
                to={`/users/${user._id}`} 
                $active={activeRoute === `/users/${user._id}`}
                theme={theme}
              >
                <FiUser />
                Profile
              </DrawerItem>
            </>
          ) : (
            <>
              <DrawerItem 
                to="/login" 
                $active={activeRoute === '/login'}
                theme={theme}
              >
                <FiUser />
                Login
              </DrawerItem>

              <DrawerItem 
                to="/register" 
                $active={activeRoute === '/register'}
                theme={theme}
              >
                <FiUser />
                Register
              </DrawerItem>
            </>
          )}
        </div>

        <DrawerFooter theme={theme}>
          <DrawerItem 
            as="button" 
            onClick={toggleTheme}
            $active={false}
            theme={theme}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </DrawerItem>

          {user && (
            <DrawerItem 
              as="button" 
              onClick={handleLogout}
              $active={false}
              theme={theme}
            >
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