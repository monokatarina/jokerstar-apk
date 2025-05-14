import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    padding-bottom: 2px; /* Space for scroll */
  }
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
  white-space: nowrap;
  flex-shrink: 0;
  position: relative;
  min-height: 44px; /* Minimum touch target size */

  &:hover {
    color: var(--primary);
    background: rgba(var(--primary-rgb), 0.05);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary);
  transform: scaleX(${props => props.$active ? 1 : 0});
  transform-origin: left;
  transition: transform 0.3s ease;
`;

const ProfileTabs = ({ activeTab, setActiveTab, showSettings = false }) => {
  const tabs = [
    { id: 'memes', label: 'Posts' },
    { id: 'likes', label: 'Likes' },
    { id: 'activity', label: 'Activity' },
    ...(showSettings ? [{ id: 'settings', label: 'Settings' }] : [])
  ];

  return (
    <TabsContainer>
      {tabs.map(tab => (
        <TabButton
          key={tab.id}
          $active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
          aria-label={tab.label}
          aria-selected={activeTab === tab.id}
        >
          {tab.label}
          <ActiveIndicator $active={activeTab === tab.id} />
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default ProfileTabs;