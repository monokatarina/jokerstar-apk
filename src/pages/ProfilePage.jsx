import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../styles/ThemeContext';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';
import UserMemes from '../components/profile/UserMemes';
import UserLikes from '../components/profile/UserLikes';
import UserActivity from '../components/profile/UserActivity';
import UserGuests from '../components/profile/UserGuests';
import ProfileSettings from '../components/profile/ProfileSettings';
import { FiLoader } from 'react-icons/fi';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Styled Components
const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-out;
  background-color: var(--background);
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
`;

const LoadingSpinner = styled.div`
  animation: ${spin} 1s linear infinite;
  font-size: 40px;
  color: var(--primary);
`;

const LoadingText = styled.p`
  font-size: 18px;
  color: var(--text-light);
  font-weight: 500;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
  text-align: center;
`;

const ErrorText = styled.p`
  font-size: 18px;
  color: var(--dislike-color);
  font-weight: 500;
  max-width: 80%;
`;

const RetryButton = styled.button`
  padding: 12px 25px;
  background: var(--primary);
  color: var(--text-inverse);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
`;

const NotFoundText = styled.p`
  font-size: 18px;
  color: var(--text);
  font-weight: 500;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const ProfilePage = () => {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const { theme } = useTheme();
  const [profileData, setProfileData] = useState({
    user: null,
    stats: {
      posts: 0,
      followers: 0,
      following: 0
    },
    isFollowing: false
  });
  const [activeTab, setActiveTab] = useState('memes');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [userRes, statsRes, followStatusRes] = await Promise.all([
        api.get(`/users/${userId}`),
        api.get(`/users/${userId}/stats`),
        currentUser ? api.get(`/users/${userId}/follow-status`) : Promise.resolve({ data: { isFollowing: false } })
      ]);

      setProfileData({
        user: userRes.data,
        stats: statsRes.data.data,
        isFollowing: followStatusRes.data.isFollowing
      });
      
    } catch (error) {
      console.error('Error fetching profile data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    fetchProfileData();
  }, [userId, currentUser, retryCount]);

  const handleFollow = async () => {
    try {
      if (profileData.isFollowing) {
        await api.delete(`/users/${userId}/unfollow`);
      } else {
        await api.post(`/users/${userId}/follow`);
      }
      
      const [statsRes, followStatusRes] = await Promise.all([
        api.get(`/users/${userId}/stats`),
        api.get(`/users/${userId}/follow-status`)
      ]);

      setProfileData(prev => ({
        ...prev,
        stats: statsRes.data.data,
        isFollowing: followStatusRes.data.isFollowing
      }));
      
    } catch (error) {
      console.error('Error updating follow status:', error);
    }
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner>
          <FiLoader />
        </LoadingSpinner>
        <LoadingText>Loading profile...</LoadingText>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorText>Error loading profile. {error.message || 'Please try again.'}</ErrorText>
        <RetryButton onClick={handleRetry}>
          <FiLoader /> Retry
        </RetryButton>
      </ErrorContainer>
    );
  }

  if (!profileData.user && !loading) {
    return (
      <NotFoundContainer>
        <NotFoundText>User not found</NotFoundText>
      </NotFoundContainer>
    );
  }

  return (
    <ProfileContainer>
      <ProfileHeader 
        user={profileData.user} 
        stats={profileData.stats}
        isFollowing={profileData.isFollowing}
        onFollowToggle={handleFollow}
        isCurrentUser={currentUser?._id === userId}
      />
      
      <ContentContainer>
        <ProfileTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          showSettings={currentUser?._id === userId}
        />
        
        {activeTab === 'memes' && <UserMemes userId={userId} />}
        {activeTab === 'likes' && <UserLikes userId={userId} />}
        {activeTab === 'activity' && <UserActivity userId={userId} />}
        {activeTab === 'followers' && (
          <UserFollowers 
            userId={userId} 
            followersCount={profileData.stats.followers}
          />
        )}
        {activeTab === 'following' && (
          <UserFollowing 
            userId={userId} 
            followingCount={profileData.stats.following}
          />
        )}
        {activeTab === 'settings' && currentUser?._id === userId && (
          <ProfileSettings user={profileData.user} />
        )}
      </ContentContainer>
    </ProfileContainer>
  );
};

export default ProfilePage;