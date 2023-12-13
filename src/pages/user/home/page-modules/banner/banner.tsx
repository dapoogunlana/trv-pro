import React, {  } from 'react';
import {
  AppleButton,
  PlaystoreButton,
  CommingSoon,
  newScrollScreen,
  topPartnerKirobo,
  topPartnerReloadly,
  topPartnerSayfer,
  topPartnerSumsub,
} from '../../../../../assets/images';
import './banner.scss';
import { WebIntroVid, MobileIntroVid } from '../../../../../assets/videos';
import { WhitePaper } from '../../../../../assets/files';

function Hero() {

  const downloadPdf = () => {
    window.open(WhitePaper);
  }

  return (
    <div className='hero-case'>
      <div className='hero-case-bg'>
        <div className='bg-shape'></div>
      </div>
      <div className="underband">
          <video muted={true} playsInline={true} autoPlay={true} src={MobileIntroVid} loop id="myVideo">
              Your browser does not support HTML5 video.
          </video>
      </div>
      <div className='hero pt-5'>
        <div className='w96 max700 top-space' data-aos='fade-up'>
          <h3 className='center-mobile increased-xl-mobile md-close'>
            Bridging payment solutions from traditional fintech to Web 3.0 & 
            enabling utility bills settlement in Crypto
          </h3>
          <h3 className='center-mobile md-open'>
            Bridging Payment Solutions From Traditional Fintech to Web 3.0
          </h3>
          <div className='sect90-max350 mb-center'>
            {/* <div className='text-center w96 max250'>
              <button className='download-button increased rad-10-im' onClick={downloadPdf}>Download&nbsp;Whitepaper</button>
            </div> */}
            <div className='action-buttons'>
              <div className='input-divider mt-4 imh full'>
                <img src={ AppleButton } className='store-link' alt="" />
                <span></span>
                <img src={ PlaystoreButton } className='store-link' alt="" />
              </div>
              <div className='coming-soon imh max200'>
                <img src={CommingSoon} alt="" />
              </div>
            </div>
          </div>

          <div className='max550 text-center parter-sect'>
            <h6 className='increased trans-soft'>Development Partners</h6>
            <div className='spread-info'>
              <div className='imh max125'>
                <img src={topPartnerKirobo} alt="" />
              </div>
              <div className='imh max125 mx-2'>
                <img src={topPartnerReloadly} alt="" />
              </div>
              <div className='imh max125 mx-2'>
                <img src={topPartnerSayfer} alt="" />
              </div>
              <div className='imh max125'>
                <img src={topPartnerSumsub} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className='w90 max450 md-close'>
          <div className='imh max350' data-aos='flip-left' data-aos-delay='500'>
            <img src={newScrollScreen} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
