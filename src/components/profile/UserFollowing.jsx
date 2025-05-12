import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';
import UserCard from './UserCard';

const FollowingContainer = styled.div`
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
  background: var(--secondary);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
`;

const UserFollowing = ({ userId }) => {
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/users/${userId}/following`);
        setFollowing(data.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Erro ao carregar pessoas seguidas');
      } finally {
        setLoading(false);
      }
    };

    fetchFollowing();
  }, [userId]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <FollowingContainer>
      <Header>
        Seguindo
        <CountBadge>{following.length}</CountBadge>
      </Header>
      
      {following.length > 0 ? (
        following.map(follow => (
          <UserCard 
            key={follow.following._id} 
            user={follow.following}
            showFollowButton={true}
          />
        ))
      ) : (
        <p>Não está seguindo ninguém</p>
      )}
    </FollowingContainer>
  );
};

export default UserFollowing;