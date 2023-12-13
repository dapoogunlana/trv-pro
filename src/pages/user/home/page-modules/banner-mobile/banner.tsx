import React, {  } from 'react';
import { AppleButton, PlaystoreButton, CommingSoon } from '../../../../../assets/images';
import './banner.scss';
import { WebIntroVid, MobileIntroVid } from '../../../../../assets/videos';
import { WhitePaper } from '../../../../../assets/files';

function Hero() {

  const downloadPdf = () => {
    window.open(WhitePaper);
  }

  const selectBanner = () => {
    if(window.innerWidth > 750) {
      return WebIntroVid;
    } else {
      return MobileIntroVid;
    }
  }

  return (
    <div className='mobile-hero-case'>
      <div className='hero'>
        <div className="underband">
            <video muted={true} playsInline={true} autoPlay={true} src={selectBanner()} loop id="myVideo">
                Your browser does not support HTML5 video.
            </video>
        </div>
        <div className='w90 max400 full-button top-space' data-aos='fade-up'>
          <button className='hollow-button-2cw rad-10-im' onClick={downloadPdf}>Download&nbsp;Whitepaper</button>
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
    </div>
  );
}

export default Hero;
