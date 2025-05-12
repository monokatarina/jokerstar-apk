import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FiUser, FiCalendar, FiAward, FiStar, FiZap } from 'react-icons/fi';

// Animação para o badge
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: var(--radius-md);
  background: var(--card-bg);
  box-shadow: var(--shadow-sm);
  position: relative;
  transition: var(--transition);
  margin-bottom: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 3px solid var(--border-light);
  transition: var(--transition);

  ${CardContainer}:hover & {
    transform: scale(1.05);
    border-color: var(--border);
  }
`;

const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const Username = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: var(--text);
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: var(--transition);

  &:hover {
    color: var(--primary);
    text-decoration: none;
  }
`;

const Bio = styled.p`
  font-size: 13px;
  color: var(--text-light);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FollowButton = styled.button`
  padding: 6px 16px;
  border-radius: 20px;
  border: none;
  background: ${props => props.$isFollowing ? 'var(--reply-bg)' : 'var(--secondary)'};
  color: ${props => props.$isFollowing ? 'var(--text)' : 'var(--text-inverse)'};
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: ${props => props.$isFollowing ? 'var(--input-bg)' : 'var(--secondary-hover)'};
    transform: translateY(-1px);
  }
`;

const DaysBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${props => {
    if (props.days >= 365) return 'linear-gradient(135deg, #f39c12, #e67e22)';
    if (props.days >= 180) return 'linear-gradient(135deg, #2ecc71, #27ae60)';
    if (props.days >= 30) return 'linear-gradient(135deg, var(--secondary), var(--secondary-hover))';
    return 'linear-gradient(135deg, #9b59b6, #8e44ad)';
  }};
  color: var(--text-inverse);
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: var(--shadow-sm);
  z-index: 1;
  animation: ${pulse} 2s infinite;
  border: 2px solid var(--card-bg);

  & > svg {
    font-size: 12px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--card-bg);
  color: var(--text);
  padding: 10px;
  border-radius: var(--radius-sm);
  font-size: 12px;
  width: 200px;
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

const UserCard = ({ user, showFollowButton = false }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Função para construir URL segura (HTTPS)
  const buildUrl = (url) => {
    if (!url) return 'https://i.pravatar.cc/150?img=3'; // Fallback HTTPS
    
    // Forçar HTTPS se for HTTP
    if (url.startsWith('http://')) {
      url = 'https://' + url.substring(7);
    }
    
    // Se já for HTTPS ou blob, retorna diretamente
    if (url.startsWith('https://') || url.startsWith('blob:')) {
      return url;
    }

    // Normalizar caminho (garantir que comece com /)
    const normalizedPath = url.startsWith('/') ? url : `/${url}`;
    
    // Usar API URL com HTTPS
    const apiUrl = process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org';
    return `${apiUrl}${normalizedPath}`;
  };
  
  const calculateDaysSinceJoin = () => {
    if (!user?.createdAt) return 0;
    
    try {
      const joinDate = new Date(user.createdAt);
      const today = new Date();
      const diffTime = today - joinDate;
      return Math.max(1, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
    } catch (error) {
      return 1;
    }
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

  return (
    <CardContainer>
      <DaysBadge days={daysSinceJoin}>
        {getBadgeIcon()}
        {daysSinceJoin}d
        <Tooltip>
          <div style={{ fontWeight: 'bold', marginBottom: '3px' }}>
            {getMemberLevel()}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>
            Na plataforma há {daysSinceJoin} dia{daysSinceJoin !== 1 ? 's' : ''}
          </div>
          <div style={{ 
            fontSize: '10px', 
            marginTop: '5px', 
            color: 'var(--text-lighter)',
            borderTop: '1px solid var(--border)',
            paddingTop: '5px'
          }}>
            Desde {new Date(user.createdAt).toLocaleDateString()}
          </div>
        </Tooltip>
      </DaysBadge>

      <Avatar 
        src={user.profile?.avatar ? buildUrl(user.profile.avatar) : 'https://i.pravatar.cc/150?img=3'} 
        alt={user.username}
        crossOrigin="anonymous"
        onError={(e) => {
          e.target.src = 'https://i.pravatar.cc/150?img=3';
          e.target.onerror = null;
        }}
      />
      
      <UserInfo>
        <Username to={`/users/${user._id}`}>@{user.username}</Username>
        <Bio>{user.profile?.bio || 'Sem biografia ainda...'}</Bio>
      </UserInfo>
      
      {showFollowButton && (
        <FollowButton 
          $isFollowing={isFollowing}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {isFollowing ? 'Seguindo' : 'Seguir'}
        </FollowButton>
      )}
    </CardContainer>
  );
};

export default UserCard;