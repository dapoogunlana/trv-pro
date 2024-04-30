import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { DownloadAppstoreFooter, DownloadPlaystoreFooter, HomeDownloadCustomers, HomeDownloadTopic, HomeMobilePhone } from '../../../../../assets/images';
import './subscribe.scss';

function SubscribeSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <div className='subscribe'>
        <div className='subscribe-card'>
          <h4>Get Every Booking and Travel Update</h4>
          <div className='subscribe-grid'>
            <div className='icon-holder'>
              <FontAwesomeIcon className='icon' icon={['far', 'envelope']} />
            </div>
            <input
              type="text"
              placeholder='Enter your email.'
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscribeSect;
