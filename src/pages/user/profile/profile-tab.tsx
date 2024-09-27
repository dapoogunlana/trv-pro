import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProfileOverviewPage from './user-profile/profile-overview/profile-overview';
import ProfileSettingsPage from './user-profile/profile-settings/profile-settings';
import './profile-tab.scss';
import { useSelector } from 'react-redux';
import { iStoreState } from '../../../services/constants/interfaces/store-schemas';
import HostProfilePage from './host-profile/host-profile-tab';

function ProfilePage() {

  const [activeKey, setActiveKey] = useState('Overview');
  // const [userType, setUserType] = useState<'user' | 'host'>('host')
  const userType: 'user' | 'host' = useSelector((state: iStoreState) => state?.user?.userMode || 'user');

  const changKey = (key: any) => {
    setActiveKey(key);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
    {userType === 'user' && 
      <div className='user-profile'>
        <Tabs  >
          <Tab eventKey="Overview" title="Overview" key={1}>
            <ProfileOverviewPage />
          </Tab>
          <Tab eventKey="Settings" title="Account Settings" key={2}>
            <ProfileSettingsPage />
          </Tab>
        </Tabs>
      </div>
    }
    {userType === 'host' && 
      <div className='host-profile'>
        <HostProfilePage/>
      </div>
    }
    </>
  );
}

export default ProfilePage;
