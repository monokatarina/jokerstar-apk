import styled, { keyframes } from 'styled-components';
import { FiEdit, FiUserPlus, FiUserCheck, FiUser, FiUsers, FiRefreshCw, FiCalendar, FiZap, FiStar, FiAward } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import UserFollowers from './UserFollowers';
import UserFollowing from './UserFollowing';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const loading = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

// Styled Components
const HeaderContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--card-bg);
  box-shadow: var(--shadow);
  animation: ${fadeIn} 0.6s ease-out;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;

const Skeleton = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${loading} 1.5s infinite;
  border-radius: var(--radius-md);
`;

const CoverPhoto = styled.div`
  height: 280px;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  background-color: var(--background-light);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5));
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -90px;
  position: relative;
  z-index: 2;
  padding: 0 20px 30px;
  text-align: center;
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px solid var(--card-bg);
  background: linear-gradient(135deg, var(--secondary), #9b59b6);
  box-shadow: var(--shadow);
  margin-bottom: 15px;
  transition: var(--transition);
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-hover);
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: var(--transition);
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
`;

const AvatarSkeleton = styled(Skeleton)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DefaultAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-inverse);
  font-size: 70px;
`;

const Username = styled.h1`
  margin: 10px 0 5px;
  font-size: 32px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.5px;
  background: linear-gradient(to right, var(--secondary), #9b59b6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Bio = styled.p`
  margin: 0 auto;
  color: var(--text-light);
  max-width: 600px;
  line-height: 1.6;
  font-size: 16px;
  padding: 0 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin: 30px 0;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 25px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  min-width: 80px;
  padding: 10px 15px;
  border-radius: var(--radius-md);
  background: var(--reply-bg);
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-5px);
    background: var(--input-bg);
    box-shadow: var(--shadow-hover);
  }
`;

const StatNumber = styled.div`
  font-weight: 800;
  font-size: 24px;
  color: var(--text);
  margin-bottom: 2px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-lighter);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const DaysBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: ${props => {
    if (props.days >= 365) return 'linear-gradient(135deg, #f39c12, #e67e22)';
    if (props.days >= 180) return 'linear-gradient(135deg, #2ecc71, #27ae60)';
    if (props.days >= 30) return 'linear-gradient(135deg, var(--secondary), #2980b9)';
    return 'linear-gradient(135deg, #9b59b6, #8e44ad)';
  }};
  color: var(--text-inverse);
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: var(--shadow);
  z-index: 3;
  animation: ${pulse} 2s infinite;
  border: 2px solid var(--card-bg);
  backdrop-filter: blur(5px);
  
  & > svg {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    top: 15px;
    left: 15px;
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--card-bg);
  color: var(--text);
  padding: 12px;
  border-radius: var(--radius-md);
  font-size: 13px;
  width: 220px;
  box-shadow: var(--shadow-hover);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  z-index: 10;
  text-align: center;

  ${DaysBadge}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(5px);
  }
`;

const EditButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: var(--input-bg);
  color: var(--text);
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  box-shadow: var(--shadow);
  font-size: 15px;
  
  &:hover {
    background: var(--comment-bg);
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const FollowButton = styled.button`
  margin-top: 20px;
  padding: 14px 35px;
  background: ${props => props.$isFollowing ? 'linear-gradient(135deg, #e74c3c, #c0392b)' : 'linear-gradient(135deg, var(--secondary), var(--secondary-hover))'};
  color: var(--text-inverse);
  border: none;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  box-shadow: ${props => props.$isFollowing ? '0 5px 20px rgba(231, 76, 60, 0.3)' : 'var(--shadow)'};
  font-size: 16px;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.$isFollowing ? '0 8px 25px rgba(231, 76, 60, 0.4)' : 'var(--shadow-hover)'};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0));
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 15px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: var(--card-bg);
  color: var(--text);
  padding: 40px;
  border-radius: var(--radius-lg);
  width: 90%;
  max-width: 700px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: var(--shadow-hover);
  position: relative;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--reply-bg);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  font-size: 18px;
  color: var(--text);
  
  &:hover {
    background: var(--dislike-color);
    color: var(--text-inverse);
    transform: rotate(90deg);
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  animation: ${pulse} 1.5s infinite ease-in-out;
  margin-left: 10px;
`;

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';

// Custom Hook para estatísticas do usuário
const useUserStats = (userId) => {
  const [stats, setStats] = useState({ posts: 0, followers: 0, following: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get(`/users/${userId}/stats`);
        setStats(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Erro ao carregar estatísticas');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [userId]);

  return { stats, loading, error, setStats };
};

// Custom Hook para status de follow
const useFollowStatus = (userId, isOwnProfile) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOwnProfile) {
      const checkStatus = async () => {
        try {
          const { data } = await api.get(`/users/${userId}/follow-status`);
          setIsFollowing(data.isFollowing);
        } catch (error) {
          console.error('Erro ao verificar follow:', error);
        }
      };
      checkStatus();
    }
  }, [userId, isOwnProfile]);

  const toggleFollow = async () => {
    setLoading(true);
    try {
      if (isFollowing) {
        await api.delete(`/users/${userId}/unfollow`);
      } else {
        await api.post(`/users/${userId}/follow`);
      }
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error('Erro ao alternar follow:', error);
      throw error; // Rejeita a promise para tratamento no componente
    } finally {
      setLoading(false);
    }
  };

  return { isFollowing, loading, toggleFollow };
};

const ProfileHeader = ({ user, isOwnProfile }) => {
  const [coverLoaded, setCoverLoaded] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  
  const { stats, loading: statsLoading, setStats } = useUserStats(user._id);
  const { isFollowing, loading: followLoading, toggleFollow } = useFollowStatus(user._id, isOwnProfile);

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

  const calculateDaysSinceJoin = () => {
    if (!user?.createdAt) return 1;
    const joinDate = new Date(user.createdAt);
    const today = new Date();
    return Math.max(1, Math.floor((today - joinDate) / (1000 * 60 * 60 * 24)));
  };

  const daysSinceJoin = calculateDaysSinceJoin();

  const getBadgeIcon = () => {
    if (daysSinceJoin >= 365) return <FiAward />;
    if (daysSinceJoin >= 180) return <FiStar />;
    if (daysSinceJoin >= 30) return <FiZap />;
    return <FiCalendar />;
  };

  const getMemberLevel = () => {
    if (daysSinceJoin >= 365) return 'Veterano';
    if (daysSinceJoin >= 180) return 'Experiente';
    if (daysSinceJoin >= 30) return 'Membro Ativo';
    return 'Novato';
  };

  const handleFollow = async () => {
    try {
      const wasFollowing = isFollowing;
      await toggleFollow();
      
      // Atualiza a contagem local
      setStats(prev => ({
        ...prev,
        followers: wasFollowing ? prev.followers - 1 : prev.followers + 1
      }));
    } catch (error) {
      console.error('Erro ao alternar follow:', error);
    }
  };

  return (
    <HeaderContainer>
      <DaysBadge days={daysSinceJoin}>
        {getBadgeIcon()}
        {daysSinceJoin} dias
        <Tooltip>
          <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>
            {getMemberLevel()}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>
            Na plataforma há {daysSinceJoin} dia{daysSinceJoin !== 1 ? 's' : ''}
          </div>
          <div style={{ 
            fontSize: '11px', 
            marginTop: '8px', 
            color: 'var(--text-lighter)',
            borderTop: '1px solid var(--border)',
            paddingTop: '8px'
          }}>
            Desde {new Date(user.createdAt).toLocaleDateString()}
          </div>
        </Tooltip>
      </DaysBadge>

      <CoverPhoto>
        {!coverLoaded && <Skeleton style={{ position: 'absolute', width: '100%', height: '100%' }} />}
        <CoverImage
          src={getImageUrl(user.profile?.coverPhoto) || `${API_BASE_URL}/default-cover.jpg`}
          alt="Capa do perfil"
          crossOrigin="anonymous"
          $loaded={coverLoaded}
          onLoad={() => setCoverLoaded(true)}
          onError={(e) => {
            e.target.src = `${API_BASE_URL}/default-cover.jpg`;
            setCoverLoaded(true);
          }}
        />
      </CoverPhoto>

      <ProfileInfo>
        <AvatarContainer>
          {!avatarLoaded && <AvatarSkeleton />}
          {user.profile?.avatar ? (
            <Avatar 
              src={getImageUrl(user.profile.avatar)} 
              alt={`Avatar de ${user.username}`}
              crossOrigin="anonymous"
              $loaded={avatarLoaded}
              onLoad={() => setAvatarLoaded(true)}
              onError={(e) => {
                e.target.src = '';
                e.target.parentNode.querySelector('div').style.display = 'flex';
                setAvatarLoaded(true);
              }}
            />
          ) : (
            <DefaultAvatar>
              <FiUser />
            </DefaultAvatar>
          )}
        </AvatarContainer>
        
        <Username>@{user.username}</Username>
        <Bio>{user.profile?.bio || 'Sem biografia ainda...'}</Bio>
        
        {statsLoading ? (
          <StatsContainer>
            {[1, 2, 3].map((i) => (
              <StatItem key={i}>
                <StatNumber as={Skeleton} style={{ width: '40px', height: '24px', margin: '0 auto' }} />
                <StatLabel as={Skeleton} style={{ width: '60px', height: '14px', margin: '0 auto' }} />
              </StatItem>
            ))}
          </StatsContainer>
        ) : (
          <StatsContainer>
            <StatItem>
              <StatNumber>{stats.posts}</StatNumber>
              <StatLabel>Posts</StatLabel>
            </StatItem>
            <StatItem 
              onClick={() => setShowFollowersModal(true)}
              aria-label={`Ver seguidores (${stats.followers})`}
            >
              <StatNumber>{stats.followers}</StatNumber>
              <StatLabel>Seguidores</StatLabel>
            </StatItem>
            <StatItem 
              onClick={() => setShowFollowingModal(true)}
              aria-label={`Ver seguindo (${stats.following})`}
            >
              <StatNumber>{stats.following}</StatNumber>
              <StatLabel>Seguindo</StatLabel>
            </StatItem>
          </StatsContainer>
        )}

        {!isOwnProfile && (
          <FollowButton 
            onClick={handleFollow}
            disabled={followLoading}
            $isFollowing={isFollowing}
            aria-label={isFollowing ? 'Deixar de seguir' : 'Seguir usuário'}
          >
            {isFollowing ? (
              <>
                <FiUserCheck /> Seguindo
                {followLoading && <LoadingSpinner><FiRefreshCw /></LoadingSpinner>}
              </>
            ) : (
              <>
                <FiUserPlus /> Seguir
                {followLoading && <LoadingSpinner><FiRefreshCw /></LoadingSpinner>}
              </>
            )}
          </FollowButton>
        )}
      </ProfileInfo>

      {isOwnProfile && (
        <EditButton aria-label="Editar perfil">
          <FiEdit /> Editar Perfil
        </EditButton>
      )}

      {showFollowersModal && (
        <Modal onClick={() => setShowFollowersModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton 
              onClick={() => setShowFollowersModal(false)}
              aria-label="Fechar modal"
            >
              ×
            </CloseButton>
            <h2 style={{ 
              marginBottom: '25px', 
              color: 'var(--text)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <FiUsers size={28} /> Seguidores
            </h2>
            <UserFollowers userId={user._id} />
          </ModalContent>
        </Modal>
      )}

      {showFollowingModal && (
        <Modal onClick={() => setShowFollowingModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton 
              onClick={() => setShowFollowingModal(false)}
              aria-label="Fechar modal"
            >
              ×
            </CloseButton>
            <h2 style={{ 
              marginBottom: '25px', 
              color: 'var(--text)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <FiUsers size={28} /> Seguindo
            </h2>
            <UserFollowing userId={user._id} />
          </ModalContent>
        </Modal>
      )}
    </HeaderContainer>
  );
};

export default ProfileHeader;