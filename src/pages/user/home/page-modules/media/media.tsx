import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { ManillaCard } from '../../../../../assets/images';
import { Carousel } from '../../../../../components/block-components/carousel';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { mediaList } from './media-data';
import './media.scss';

function Media() {
  const previewCount = () => {
    const width = window.innerWidth;
    if(width > 800) {
      return 4;
    } else if(width > 600) {
      return 3;
    } else {
      return 2;
    }
  }
  const imageSlide = mediaList.map((item, index) => {
    return <div className='media-slide' key={index}>
      {
        item.link ? 
        <a href={item.link} target={'_blank'}>
          <img src={item.image} alt="" />
        </a> :
        <img src={item.image} alt="" />
      }
    </div>
  })
  return (
    <div className='media-space py-5'>
      {/* <div className='top-gradient'></div> */}
      <div className='w96 max1200 py-4'>
        <h3 className='text-center'>Spend MNLA On-The-Go</h3>
        <div className='row'>
          <div className='col-md-6 center-info py-3'>
            <div className='imh w90 max450 hover-rotate'>
              <div data-aos='zoom-in'>
                <img src={ManillaCard} alt="" />
              </div>
            </div>
          </div>
          <div className='col-md-6 center-info py-3'>
            <div className='imh w90 max450'>
              <p>
                Through a combination of next generation fintech & blockchain technology gateways, we provide 
                our users the Manilla Debit Card so they can pay for transactions digitally using crypto
              </p>
              <Link to={`/${routeConstants.manillaCard}`}>
                <button className='hollow-button-2cb rad-10-im' data-aos='fade-up' data-aos-delay='500'>Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='w96 max1200 py-4'>
        <h3 className='text-center'>Manilla In The Media</h3>
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

export default Media;
