import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProfileOverviewPage from '../../user/profile/user-profile/profile-overview/profile-overview';
import ProfileSettingsPage from '../../user/profile/user-profile/profile-settings/profile-settings';
import './host-profile-tab.scss';
import { useSelector } from 'react-redux';
import { iStoreState, IUserData } from '../../../services/constants/interfaces/store-schemas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileSect from './profile-sect/profile-sect';
import ReviewsSect from './reviews-sect/reviews-sect';
import PropertiesSect from './properties-sect/properties-sect';
import { useNavigate } from 'react-router';
import { routeConstants } from '../../../services/constants/route-constants';
import { sendRequest } from '../../../services/utils/request';
import { toast } from 'react-toastify';

function HostProfilePage(props: any) {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'reviews' | 'properties'>('profile');
  const user: IUserData = useSelector((state: iStoreState) => state?.user);
  const [notifications, setNotifications] = useState()

  const goToNewProperty = () => {
    navigate(`/${routeConstants.addShortlet}`);
  }

  const getNotifications = () => {
      sendRequest({
          url: 'host-profile/notifications',
          method: 'GET',
      }, (res: any) => {
          setNotifications(res);
      }, (err: any) => {});
  }

  useEffect(() => {
    getNotifications();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);
  
  return (
    <div className='host-holder'>
      <div className='host-main-grid'>
        <div className='main-sect'>
          <div className='profile-tab-card h-balance'>
            <div className='spread-info-front pb-2'>
              <div className='profile-image'>
                <img src="" alt="" />
              </div>
              <div>
                <h5 className='f700 mb-2'>{user.first_name} {user.last_name}</h5>
                <div className='spread-info-front'>
                  <FontAwesomeIcon icon={'star'} className='mr-2 reduced' />
                  <span className='reduced number-medium px-2'>({2}) Unread notifications</span>
                </div>
              </div>
            </div>
            <div className='spread-info-front'>
              <div className='pr-3'>
                <FontAwesomeIcon icon={'star'} className='orange-tx mr-2 reduced' />
                <span className='reduced-x pl-1 pr-2 number-light'> {4.3} ({343} reviews) </span>
              </div>
              <div className=''>
                <span>&nbsp;</span>
                <FontAwesomeIcon icon={'house'} className='faint-tx mr-2 reduced' />
                <span className='reduced-x pl-1 number-light'> {4.3} properties</span>
              </div>
            </div>
          </div>
        </div>
        <div className='main-sect'>
          <div className='profile-tab-card h-balance'>
            <h4 className='f700 mb-4'>{'My Tabs'}</h4>
            <div className='tab-grid'>
              <div className={'tab-button-sect ' + (activeTab === 'profile' ? 'active-tab' : '')}>
                <button onClick={() => setActiveTab('profile')}>Profile</button>
              </div>
              <div className={'tab-button-sect ' + (activeTab === 'reviews' ? 'active-tab' : '')}>
                <button onClick={() => setActiveTab('reviews')}>Reviews</button>
              </div>
              <div className={'tab-button-sect ' + (activeTab === 'properties' ? 'active-tab' : '')}>
                <button onClick={() => setActiveTab('properties')}>Properties</button>
              </div>
              <div className='tab-button-sect'>
                <button onClick={goToNewProperty}>New Property</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='host-tab-content'>
        {activeTab === 'profile' && <ProfileSect/>}
        {activeTab === 'reviews' && <ReviewsSect/>}
        {activeTab === 'properties' && <PropertiesSect/>}
      </div>
    </div>
  );
}

export default HostProfilePage;
