import React, {  } from 'react';
import { Carousel } from '../../../../../components/block-components/carousel';
import SubSpace from '../banner-sub-space/banner-sub-space';
import { imageSlide } from './banner-data';
import './banner.scss';

function Hero() {
  return (
    <div className='mobile-hero-case'>
    <Carousel.Effects
      loop
      autoPlay
      delay={6000}
      freeMode={false}
      slidesPerView={1}
      spaceBetween={0}
      fade
      pauseOnMouseEnter={false}
      disableOnInteraction={false}
      data={imageSlide}
    />
    <SubSpace/>
    </div>
  );
}

export default Hero;
