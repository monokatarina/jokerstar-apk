import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';
import UserCard from './UserCard';

const FollowersContainer = styled.div`
  margin-top: 20px;
`;

const Header = styled.h3`
  margin-bottom: 15px;
  color: var(--text);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CountBadge = styled.span`
  background: var(--primary);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
`;

const UserFollowers = ({ userId }) => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/users/${userId}/followers`);
        setFollowers(data.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Erro ao carregar seguidores');
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [userId]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <FollowersContainer>
      <Header>
        Seguidores
        <CountBadge>{followers.length}</CountBadge>
      </Header>
      
      {followers.length > 0 ? (
        followers.map(follower => (
          <UserCard 
            key={follower.follower._id} 
            user={follower.follower}
            showFollowButton={true}
          />
        ))
      ) : (
        <p>Nenhum seguidor encontrado</p>
      )}
    </FollowersContainer>
  );
};

export default UserFollowers;