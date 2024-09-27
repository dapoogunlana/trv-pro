import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProfileOverviewPage from './../user-profile/profile-overview/profile-overview';
import ProfileSettingsPage from './../user-profile/profile-settings/profile-settings';
import './host-profile-tab.scss';
import { useSelector } from 'react-redux';
import { iStoreState } from '../../../../services/constants/interfaces/store-schemas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HostProfilePage() {

  const [activeTab, setActiveTab] = useState<'summary' | 'reviews' | 'contact'>('summary');

  const goHome = () => {}

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
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
                <h5 className='f700 mb-2'>{'Tunde Developer'}</h5>
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
              <div className={'tab-button-sect ' + (activeTab === 'summary' ? 'active-tab' : '')}>
                <button onClick={goHome}>Home</button>
              </div>
              <div className={'tab-button-sect ' + (activeTab === 'summary' ? 'active-tab' : '')}>
                <button onClick={goHome}>Reviews</button>
              </div>
              <div className={'tab-button-sect ' + (activeTab === 'summary' ? 'active-tab' : '')}>
                <button onClick={goHome}>Contact Details</button>
              </div>
              <div className='tab-button-sect'>
                <button onClick={goHome}>New Property</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostProfilePage;
