// src/components/profile/UserActivity.jsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';

const ActivityList = styled.div`
  margin-top: 20px;
`;

const ActivityItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #eee;
`;

const UserActivity = ({ userId }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const { data } = await api.get(`/users/${userId}/activity`);
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [userId]);

  if (loading) return <div>Loading activity...</div>;

  return (
    <ActivityList>
      {activities.map(activity => (
        <ActivityItem key={activity._id}>
          {activity.type}: {activity.content}
        </ActivityItem>
      ))}
    </ActivityList>
  );
};

export default UserActivity;