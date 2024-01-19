import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { DownloadAppstoreFooter, DownloadPlaystoreFooter, HomeDownloadCustomers, HomeDownloadTopic, MobilePhone } from '../../../../../assets/images';
import './downloads.scss';

function DownloadsSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <div className='downloads'>
        <div className='download-card' data-aos="fade-up">
          <div className='card-spread'>
            <div>
              <div className='imh'>
                <img src={HomeDownloadTopic} alt="" />
              </div>
              <p className='mb-1 mt-3'>for a seamless booking experience</p>
              <div className='customer-case'>
                <div className='customers'>
                  <img src={HomeDownloadCustomers} alt="" />
                </div>
                <p className='mb-0'>Join many happy customers</p>
              </div>
            </div>
            <div className='phone-img' data-aos="zoom-in" data-aos-delay="600">
              <div>
                <img src={MobilePhone} alt="" />
              </div>
            </div>
            <div className='mobile-grid'>
              <div className='imh py-2'>
                <img src={DownloadPlaystoreFooter} alt="" />
              </div>
              <div className='imh py-2'>
                <img src={DownloadAppstoreFooter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='hr9' />

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

export default DownloadsSect;
