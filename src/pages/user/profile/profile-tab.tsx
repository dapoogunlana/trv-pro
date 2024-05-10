import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProfileOverviewPage from './profile-overview/profile-overview';
import ProfileSettingsPage from './profile-settings/profile-settings';
import './profile-tab.scss';

function ProfilePage() {

  const [activeKey, setActiveKey] = useState('Overview');

  const changKey = (key: any) => {
    setActiveKey(key);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='profile'>
    <Tabs  >
      <Tab eventKey="Overview" title="Overview" key={1}>
        <ProfileOverviewPage />
      </Tab>
      <Tab eventKey="Settings" title="Account Settings" key={2}>
        <ProfileSettingsPage />
      </Tab>
    </Tabs>
    </div>
  );
}

export default ProfilePage;
