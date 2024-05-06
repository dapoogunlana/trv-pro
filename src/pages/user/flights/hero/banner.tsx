import React from 'react';
import { DownloadAppstoreHero, DownloadPlaystoreHero, HomeHeroImage, HomePlanePath } from '../../../../assets/images';
import BookingComp from '../../../../components/block-components/booking-comp/booking-comp';
import './banner.scss';

function BannerSect() {
  
  return (
    <div className='banner'>
      <div className='text'>
        <h1 className='f700'>Borderless</h1>
        <h3><span className='yellow-tx'>Seamless </span>booking,</h3>
        <h3><span className='orange-tx'>boundless </span>adventures</h3>
      </div>
      <div className='booking-sect'>
        <BookingComp />
      </div>
    </div>
  );
}

export default BannerSect;
