import React, {  } from 'react';
import {  } from '../../../../../assets/images';
import { Carousel } from '../../../../../components/block-components/carousel';
import { testimonialList } from './testimonial-data';
import './testimonials.scss';

function Testimonials() {
  const previewCount = () => {
    const width = window.innerWidth;
    if(width > 991) {
      return 3;
    } else if(width > 767) {
      return 2;
    } else {
      return 1;
    }
  }
  const imageSlide = testimonialList.map((item, index) => {
    return <div className='testimonial-slide text-center' key={index}>
      <div className='w90 max400' data-aos='fade-up'>
        <div className='imh w70 max175'>
          <img src={item.image} alt="" />
        </div>
        <h4>{item.name}</h4>
        <p>{item.info}</p>
      </div>
    </div>
  })
  return (
    <div className='testimonials py-5'>
      <div className='w96 max1200 py-4'>
        <h3 className='text-center'>Testimonials</h3>
        <Carousel
          loop
          autoPlay
          delay={6000}
          freeMode
          slidesPerView={previewCount()}
          spaceBetween={0}
          data={imageSlide}
        />
      </div>
    </div>
  );
}

export default Testimonials;
