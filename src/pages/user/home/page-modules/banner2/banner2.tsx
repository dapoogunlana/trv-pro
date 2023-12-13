import React, { useState } from 'react';
import {
  AppleButtonWhite,
  PlaystoreButtonWhite,
  AppleIconWhiteFaint,
  PlaystoreIconWhiteFaint,
  CommingSoon,
  PhoneHand,
  PhoneMobile,
  topPartnerKirobo,
  topPartnerReloadly,
  topPartnerSayfer,
  topPartnerSumsub,
  topPartnerChainanalysis,
  topPartnerFireblocks,
  topPartnerHacken,
} from '../../../../../assets/images';
import './banner2.scss';
import { WhitePaper } from '../../../../../assets/files';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../../../services/constants/route-constants';

function Hero2() {

  const [comingSoon, setComingSoon] = useState(false);

  const toggleComingSoon = (status: boolean) => {
    setComingSoon(status);
  }

  return (
    <div className='hero2-case'>
      <div className='hero2 pt-5'>
          <div className='imh absolute-hand md-close' data-aos='fade-left' data-aos-delay='500'>
            <img src={PhoneHand} alt="" />
          </div>
        <div className='w96 max600 top-space' data-aos='fade-up'>
          <h3 className='center-mobile md-close'>
            Bridging Payment Solution from Traditional Fintech to Web 3.0 & 
            Enabling Bills Settlement in Cryptocurrency
          </h3>
          <h3 className='center-mobile md-open mb-4'>
            Bridging Payment Solutions From Traditional Fintech to Web 3.0 & Enabling Bills Settlement in Cryptocurrency
          </h3>
          <div className='imh md-open mb-4' data-aos='fade-left' data-aos-delay='500'>
            <img src={PhoneMobile} alt="" />
          </div>
          <div className='sect90-max500 mb-center md-close'>
            <p className='md-close'>
              Maximize Your Crypto Potential with Our Saving & Loan
              Solutions, Achieve Financial Stability 
            </p>
          </div>
          <div className='sect90-max350 mb-center-in-flex'>
            {/* <p className='md-open'>
              Maximize Your Crypto Potential with Our Saving & Loan
              Solutions, Achieve Financial Stability 
            </p> */}
            <div className='action-buttons mb-3'>
              <Link to={`/${routeConstants.userLogin}`}><button>Get Started</button></Link>
              <div className='download-icons imh full'>
                <img 
                  src={ AppleIconWhiteFaint } className='store-link' alt="" 
                  onClick={() => toggleComingSoon(true)}
                  onMouseLeave={() => toggleComingSoon(false)} 
                />
                <span></span>
                <img 
                  src={ PlaystoreIconWhiteFaint } className='store-link' alt="" 
                  onClick={() => toggleComingSoon(true)}
                  onMouseLeave={() => toggleComingSoon(false)}
                />
              </div>
            </div>
            <div className={'coming-soon imh max200' + (comingSoon ? ' coming-soon-active' : '')}>
              <img src={CommingSoon} alt="" />
            </div>
          </div>

        </div>

        <div className='w90 max450 md-close'>
          <div className='imh max350 temp-hidden' data-aos='flip-left' data-aos-delay='500'>
            <img src={PhoneHand} alt="" />
          </div>
        </div>
        <div className='hero-pat-sect'>
          <h6 className=''>OUR TRUSTED PARTNERS</h6>
          <div></div>
        </div>

      </div>
      <div className='max900 text-center parter-sect md-close'>
        <div className='spread-info'>
          <div className='imh max125'>
            <img src={topPartnerKirobo} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerReloadly} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerSayfer} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerSumsub} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerChainanalysis} alt="" />
          </div>
          <div className='imh max125 mx-2 px-2'>
            <img src={topPartnerFireblocks} alt="" />
          </div>
          <div className='imh max125 px-2'>
            <img src={topPartnerHacken} alt="" />
          </div>
        </div>
      </div>
      <div className='max900 text-center parter-sect md-open'>
        <Marquee speed={50} gradient={false}>
          <div className='spread-info'>
            <div className='imh max125'>
              <img src={topPartnerKirobo} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerReloadly} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerSayfer} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerSumsub} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerChainanalysis} alt="" />
            </div>
            <div className='imh max125 mx-2 px-2'>
              <img src={topPartnerFireblocks} alt="" />
            </div>
            <div className='imh max125 px-2'>
              <img src={topPartnerHacken} alt="" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Hero2;
