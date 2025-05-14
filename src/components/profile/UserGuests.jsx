// src/components/profile/UserGuests.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiUser, FiClock } from 'react-icons/fi';
import api from '../../services/api';

const GuestListContainer = styled.div`
  margin-top: 25px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const GuestListHeader = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GuestList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`;

const GuestCard = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: all 0.2s;
  
  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
  margin-right: 15px;
`;

const GuestAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const GuestInfo = styled.div`
  flex: 1;
`;

const GuestUsername = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const VisitTime = styled.div`
  font-size: 0.8rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 30px;
  color: #666;
`;

const UserGuests = ({ userId }) => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

// No seu UserGuests.jsx, modifique o useEffect:
    useEffect(() => {
    const fetchGuests = async () => {
        try {
        const { data } = await api.get(`/users/${userId}/guest-history`);
        
        // Filtra visitas únicas por usuário (mantém a última visita)
        const uniqueGuests = data.reduce((acc, guest) => {
            const existing = acc.find(g => g.visitor._id === guest.visitor._id);
            if (!existing) {
            acc.push(guest);
            } else if (new Date(guest.visitedAt) > new Date(existing.visitedAt)) {
            // Mantém apenas a visita mais recente
            acc = acc.filter(g => g.visitor._id !== guest.visitor._id);
            acc.push(guest);
            }
            return acc;
        }, []);

        setGuests(uniqueGuests);
        } catch (error) {
        console.error('Error fetching guests:', error);
        } finally {
        setLoading(false);
        }
    };

    fetchGuests();
    }, [userId]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div>Loading guests...</div>;

  return (
    <GuestListContainer>
      <GuestListHeader>
        <FiUser size={20} />
        Recent Visitors ({guests.length})
      </GuestListHeader>

      {guests.length > 0 ? (
        <GuestList>
          {guests.map(guest => (
            <GuestCard key={guest._id} to={`/users/${guest.visitor._id}`}>
              <AvatarWrapper>
                <GuestAvatar
                  src={
                    guest.visitor.profile?.avatar
                      ? guest.visitor.profile.avatar.startsWith('https')
                        ? guest.visitor.profile.avatar
                        : `${process.env.REACT_APP_API_URL || 'https://api.jokesteronline.org'}${guest.visitor.profile.avatar}`
                      : '/default-avatar.jpg'
                  }
                  alt={guest.visitor.username}
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.src = '/default-avatar.jpg';
                  }}
                />
              </AvatarWrapper>
              <GuestInfo>
                <GuestUsername>@{guest.visitor.username}</GuestUsername>
                <VisitTime>
                  <FiClock size={12} />
                  {formatDate(guest.visitedAt)}
                </VisitTime>
              </GuestInfo>
            </GuestCard>
          ))}
        </GuestList>
      ) : (
        <EmptyState>
          <p>No visitors yet</p>
        </EmptyState>
      )}
    </GuestListContainer>
  );
};

export default UserGuests;