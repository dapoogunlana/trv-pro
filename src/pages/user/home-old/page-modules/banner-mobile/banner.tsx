import React, {  } from 'react';
import { WhitePaper } from '../../../../../assets/files';
import { AppleButton, PlaystoreButton } from '../../../../../assets/images';
import SubSpace from '../banner-sub-space/banner-sub-space';
import { banner1Item } from './banner-data';
import './banner.scss';

function Hero() {
  
  const downloadPdf = () => {
    window.open(WhitePaper);
  }
  
  return (
    <div className='mobile-hero-case'>
      <div className={'hero ' + banner1Item.styleClass}>
        <div className='header-spacer'></div>
        <div className='hero-spread'>
          <div className='text-content'>
            <h3>{banner1Item.writeUp}</h3>
            <div className='img-holder' data-aos="fade-in">
              <img src={banner1Item.image} alt="" />
            </div>
            <div className='action-holder md-close'>
              <button className='solid-button-2c px-4 my-3' data-aos="zoom-out" onClick={downloadPdf}>
                Download&nbsp;Whitepaper
              </button>
              <div className='info-grid'>
                <img src={AppleButton} alt="" data-aos="fade-up" />
                <span></span>
                <img src={PlaystoreButton} alt="" data-aos="fade-up" data-aos-delay="300" />
              </div>
            </div>
            <div className='action-holder md-open' data-aos="fade-up" data-aos-delay="300">
              <button className='solid-button-2c px-4 my-3' onClick={downloadPdf}>Download&nbsp;Whitepaper</button>
              <div className='info-grid'>
                <img src={AppleButton} alt="" />
                <span></span>
                <img src={PlaystoreButton} alt="" />
              </div>
            </div>
          </div>
          <div className='image' data-aos="fade-in">
            {/* <img src={BannerImg1} alt="" /> */}
            <div className='img-holder'>
              <img src={banner1Item.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
