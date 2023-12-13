import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { ServiceLogo, topCurve } from '../../../../../assets/images';
import { Carousel } from '../../../../../components/block-components/carousel';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { serviceList, serviceList1half, serviceList2half } from './services-data';
import './services.scss';

function Services() {

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

  // const serviceCarousel1 = serviceList1half.map((item, index) => {
  //   return <div className='service-card' data-aos="zoom-in">
  //     <div className='topic'>
  //       <div className='icon-sect'>
  //         <img src={item.image} alt="" />
  //       </div>
  //       <h6>{item.topic}</h6>
  //       <p className='mb-0 reduced-soft'>{item.writeup}</p>
  //     </div>
  //   </div>
  // });
  // const serviceCarousel2 = serviceList2half.map((item, index) => {
  //   return <div className='service-card' data-aos="zoom-in">
  //     <div className='topic'>
  //       <div className='icon-sect'>
  //         <img src={item.image} alt="" />
  //       </div>
  //       <h6>{item.topic}</h6>
  //       <p className='mb-0 reduced-soft'>{item.writeup}</p>
  //     </div>
  //   </div>
  // });
  const serviceCarousel = serviceList.map((item, index) => {
    return <div className='service-card' data-aos="zoom-in">
      <div className='topic'>
        <div className='icon-sect'>
          <img src={item.image} alt="" />
        </div>
        <h6>{item.topic}</h6>
        <p className='mb-0 reduced-soft'>{item.writeup}</p>
      </div>
    </div>
  });
  return (
    <div className='services py-5' id='features'>
      <div className='curve-holder'>
        <img src={topCurve} alt="" />
      </div>
      <div className='py-5'></div>
      <div className='w96 max1200 py-5'>
        <div className='w96 max800'>
          <h3 className='text-center pt-3'>Manilla Service Suite</h3>
          {/* <p className='text-center py-3'>
            Explore Endless Possibilities With Our Service Suite That Gives You the Power to Pay for a Variety 
            of Services Using Cryptocurrency
          </p> */}
        </div>
        <Carousel
            loop
            autoPlay
            delay={6000}
            freeMode
            slidesPerView={previewCount()}
            spaceBetween={0}
            data={serviceCarousel}
            navigation={true}
            pagination={true}
            customPagination={true}
        />
        <div className='text-center pt-4'>
          <Link to={routeConstants.userLogin}>
            <button className='hollow-button-2cwo px-5'><span className='px-5'>Join Waitlist</span></button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
