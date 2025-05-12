// src/components/profile/ProfileTabs.jsx
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.$active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.$active ? 'var(--primary)' : 'var(--text-light)'};
  font-weight: ${props => props.$active ? '600' : '500'};
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--primary);
    background: rgba(var(--primary-rgb), 0.05);
  }

  &:focus {
    outline: none;
  }
`;

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'memes', label: 'Posts' },
    { id: 'likes', label: 'Likes' },
    { id: 'activity', label: 'Activity' },
    { id: 'guests', label: 'Guests' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <TabsContainer>
      {tabs.map(tab => (
        <TabButton
          key={tab.id}
          $active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default ProfileTabs;