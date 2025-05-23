import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styled, { keyframes } from 'styled-components';
import { FiPlus, FiUser, FiLogOut, FiHome, FiTrendingUp, FiMenu, FiBell, FiSearch } from 'react-icons/fi';
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
  box-sizing: content-box;
  background: var(--navbar-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  z-index: 1000;
  border-bottom: 1px solid var(--border);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $visible }) => $visible ? 'translateY(0)' : 'translateY(-100%)'};
  will-change: transform;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  border-radius: 20px;
  transition: var(--transition);

  &:active {
    transform: scale(0.95);
  }
`;

const BrandText = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.5px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  color: var(--text);
  border-radius: 50%;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: var(--hover-bg);
    transform: scale(0.9);
  }
`;

const SearchButton = styled(IconButton)`
  background: var(--input-bg);
  border-radius: 20px;
  padding: 8px 12px;
  flex: 1;
  max-width: 200px;
  justify-content: flex-start;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-light);

  &:active {
    background: var(--input-bg-hover);
  }
`;

const AvatarButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition);

  &:active {
    transform: scale(0.9);
  }
`;

const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const DefaultAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: var(--text-inverse);
  border-radius: 50%;
  font-size: 16px;
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 280px;
  height: 100vh;
  padding-top: env(safe-area-inset-top);
  background: var(--card-bg);
  z-index: 1002;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
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
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
`;

const DrawerAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--background-light);
`;

const DrawerUserInfo = styled.div`
  flex: 1;
`;

const DrawerUsername = styled.div`
  font-weight: 600;
  color: var(--text);
`;

const DrawerKarma = styled.div`
  font-size: 0.8rem;
  color: var(--text-light);
`;

const DrawerItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  color: ${({ $active }) => ($active ? 'var(--primary)' : 'var(--text)')};
  text-decoration: none;
  font-size: 0.95rem;
  transition: var(--transition);
  position: relative;

  &:hover {
    background: var(--hover-bg);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ $active }) => ($active ? 'var(--primary)' : 'var(--text-light)')};
  }
`;

const DrawerFooter = styled.div`
  margin-top: auto;
  padding: 16px;
  border-top: 1px solid var(--border);
`;

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';

const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  
  if (imagePath.startsWith('http://')) {
    return 'https://' + imagePath.substring(7);
  }
  
  if (imagePath.startsWith('https://') || imagePath.startsWith('blob:')) {
    return imagePath;
  }

  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${API_BASE_URL}${normalizedPath}`;
};

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
        <NavActions>
          <IconButton 
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </IconButton>
          
          <SearchButton aria-label="Search">
            <FiSearch size={18} />
            <span>Search</span>
          </SearchButton>
        </NavActions>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <BrandWrapper>
            <BrandText>iFunny</BrandText>
          </BrandWrapper>
        </Link>

        <NavActions>
          {user && <NotificationDropdown />}
          
          <AvatarButton 
            onClick={() => user ? navigate(`/users/${user._id}`) : navigate('/login')}
            aria-label={user ? "Your profile" : "Login"}
          >
            {user ? (
              user.profile?.avatar ? (
                <UserAvatar 
                  src={getImageUrl(user.profile.avatar)} 
                  alt="User avatar"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <DefaultAvatar>
                  <FiUser />
                </DefaultAvatar>
              )
            ) : (
              <DefaultAvatar>
                <FiUser />
              </DefaultAvatar>
            )}
          </AvatarButton>
        </NavActions>
      </MobileNavbarContainer>

      <Overlay 
        $isOpen={drawerOpen} 
        onClick={() => setDrawerOpen(false)} 
        {...handlers} 
      />

      <DrawerContainer $isOpen={drawerOpen} {...handlers}>
        {user && (
          <DrawerHeader>
            <DrawerAvatar>
              {user.profile?.avatar ? (
                <UserAvatar 
                  src={getImageUrl(user.profile.avatar)} 
                  alt="User avatar"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--background-light);color:var(--text-light);"><FiUser /></div>';
                  }}
                />
              ) : (
                <DefaultAvatar>
                  <FiUser />
                </DefaultAvatar>
              )}
            </DrawerAvatar>
            <DrawerUserInfo>
              <DrawerUsername>u/{user.username}</DrawerUsername>
              <DrawerKarma>1 karma • 1 day</DrawerKarma>
            </DrawerUserInfo>
          </DrawerHeader>
        )}

        <div style={{ padding: '8px 0', flex: 1 }}>
          {user ? (
            <>
              <DrawerItem 
                to="/" 
                $active={activeRoute === '/'}
              >
                <FiHome />
                Home
              </DrawerItem>

              <DrawerItem 
                to="/feed" 
                $active={activeRoute === '/feed'}
              >
                <FiTrendingUp />
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
                <FiUser />
                Login
              </DrawerItem>

              <DrawerItem to="/register" $active={activeRoute === '/register'}>
                <FiUser />
                Register
              </DrawerItem>
            </>
          )}
        </div>

        <DrawerFooter>
          <DrawerItem 
            as="button" 
            onClick={toggleTheme}
            $active={false}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </DrawerItem>

          {user && (
            <DrawerItem 
              as="button" 
              onClick={handleLogout}
              $active={false}
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