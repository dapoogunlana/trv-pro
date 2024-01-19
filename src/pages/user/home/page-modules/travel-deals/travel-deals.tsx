import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Carousel } from '../../../../../components/block-components/carousel';
import { travelDealsData } from './travel-deals-data';
import './travel-deals.scss';

function TravelDealsSect() {

  const previewCount = () => {
    const width = window.innerWidth;
    if(width > 1100) {
      return 4;
    } else if(width > 767) {
      return 3;
    } else if(width > 550) {
      return 2;
    } else {
      return 1;
    }
  }

  const travelDealsCarousel = travelDealsData.map((data, index) => {
    return <div className='deal-case' key={index}>
      <div className='deal-card' data-aos='zoom-in' data-aos-delay={((index % 5) * 200) + 100}>
        <div className='img-sect'>
          <div className='imh'>
            <img src={data.image} alt="" />
          </div>
          <div className='overlay'>
            <button>Book Now</button>
          </div>
        </div>
        <div className='text-sect'>
          <div className='spread-info'>
            <h6>{data.location}</h6>
            <p><FontAwesomeIcon icon={'star'} className='yellow-bright-tx icon' /> {data.rating}</p>
          </div>
          <div className='spread-info mt-2'>
            <p><FontAwesomeIcon icon={'map-marker-alt'} className='icon' /> {data.country}</p>
            <div className='spread-info'>
              <p className='canceled number-light'>${data.oldPrice}</p>
              <p className='highlighted number-light'>${data.currentPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  });

  const bookDeal = (id: number) => {
    console.log({deal_id: id});
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='travel-deals'>
      <div className='bg-fade'></div>
      <div>
        <h3 className='text-center h3b'>Today’s <span className='orange-tx'> Travel deals</span></h3>
        <div className='holder-1100'>
        <Carousel
            loop
            autoPlay
            delay={6000}
            freeMode
            slidesPerView={previewCount()}
            spaceBetween={0}
            data={travelDealsCarousel}
            navigation={true}
            pagination={false}
            customPagination={true}
        />
        </div>
      </div>
    </div>
  );
}

export default TravelDealsSect;
