import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { UnlockingUtilitiesPhone, UnlockingUtilitiesPoints, UnlockingUtilitiesStats, ReferralPhone, VidCurve, ManillaLaptop } from '../../../../../assets/images';
import { routeConstants } from '../../../../../services/constants/route-constants';
import './unolcking-utilities.scss';

function UnolckingUtilities() {
  return (
    <div className='unlocking-utilities pt-5'>
      <div className='w90 max1000 pt-4'>
        <h3 className='text-center'>Unlocking Crypto Utilities</h3>
        <p className='text-center'>
          Through a solid alliance with our ecosystem development partners, Manilla Finance is giving a 
          robust use-case to multiple cryptocurrency assets. We are leveraging our years of experience in blockchain 
          technology to continuously improve our ecosystem with hopes that before long, crypto will be used for just 
          about anything in our everyday payments on the Manilla application.
        </p>
        <div className='mock-sect full-hidden'>
          <div className='phone-mockup'>
            <div className='imh'>
              <img src={UnlockingUtilitiesPhone} data-aos='fade-up' alt="" />
            </div>
          </div>
          <div className='tips-sect imh'>
            <img src={UnlockingUtilitiesPoints} data-aos='zoom-in' data-aos-delay='300' alt="" />
          </div>
          <div className='stats-sect imh'>
            <img src={UnlockingUtilitiesStats} data-aos='zoom-in' data-aos-delay='800' alt="" />
          </div>
        </div>
      </div>
      <div className='w96 max1400 pb-5' data-aos="zoom-in">
        <div className='imh'>
          <img src={ManillaLaptop} alt="" />
        </div>
      </div>



      <div className='rf-grid'>
        <div className='referal center-info center-mobile'>
          <div className='w90 max500 py-5'>
            <h6 className='increased-x mb-3'>
              Referral Program
            </h6>
            <p className='mb-4'>
              <span className="px-2">“</span>If earning passive income is something you desire, then this program is exactly what you need to earn 
              consistent income on the go. We offer a 20% single level referral bonus to all registered Manilla traders. 
              Bonuses accumulated through referrals can be withdrawn at any time to your secure wallets. To get started, 
              simply get a referral link.<span className="px-2">”</span>
            </p>
            <Link to={`/${routeConstants.userLogin}`}>
              <button className='hollow-button-2cw rad-10-im' data-aos='fade-up' data-aos-delay='500'>Join Waitlist</button>
            </Link>
          </div>
        </div>
        <div className='sale-info center-info center-mobile'>
          <div className='w90 max500 py-5'>
            <h6 className='increased-x mb-3'>
              Manilla Finance offers a practical application for digital assets, allowing for seamless payment of utility 
              bills and real-time exchange of fiat for assets.
            </h6>
            <p className='mb-0'>
              With our platform, early adopters can confidently and easily engage in bill payment and trading within a truly 
              decentralized environment that utilizes automated processes. The Manilla P2P platform provides uninterrupted 
              purchasing, selling, and exchanging of digital assets with a 99% uptime. Whether you're a new or returning 
              customer, Manilla has you covered.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UnolckingUtilities;
