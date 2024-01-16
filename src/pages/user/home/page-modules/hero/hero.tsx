import React, { useEffect } from 'react';
import { DownloadAppstoreHero, DownloadPlaystoreHero, HeroImage, PlanePath } from '../../../../../assets/images';
import BookingComp from '../../../../../components/block-components/booking-comp/booking-comp';
import './hero.scss';

function HeroSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='hero'>
      <div className='holder-1100 hero-spread'>
        <div className='plane-path' data-aos='fade-in' data-aos-delay='1600'>
          <img src={PlanePath} alt="" />
        </div>
        <div className='text-sect' data-aos='fade-right'>
          <h1>Borderless</h1>
          <h2>
            <span className='orange-tx'>Seamless</span> booking, <br/>
            <span className='yellow-tx'>boundless</span> adventures
          </h2>
          <p>
            Plan and book your perfect trip with expert advice, travel 
            tips, destination information and inspiration from us!
          </p>
          <div className='info-grid button-sect'>
            <div className='imh'>
              <img src={DownloadPlaystoreHero} alt="" />
            </div>
            <div className='imh'>
              <img src={DownloadAppstoreHero} alt="" />
            </div>
          </div>
        </div>
        <div className='img-sect' data-aos='zoom-out' data-aos-delay='800'>
          <img src={HeroImage} alt="" />
        </div>
      </div>
      <div className='booking-sect'>
        <BookingComp/>
      </div>
    </div>
  );
}

export default HeroSect;
