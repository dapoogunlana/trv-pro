import React, {  } from 'react';
import { useNavigate } from 'react-router';
import {  } from '../../../../../assets/images';
import { Carousel } from '../../../../../components/block-components/carousel';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { clipToLength } from '../../../../../services/utils/data-manipulation-utilits';
import { newsList } from '../../../news/news-data';
import './latest-news.scss';

function LatestNews() {

  const navigate = useNavigate();

  const goToItem = (id: number) => {
    navigate(`/${routeConstants.industryNews}/${id}`);
  }
  
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
  const imageSlide = newsList.map((item, index) => {
    return <div className='news-slide-holder' key={index} onClick={() => goToItem(item.id)}>
      <div className='news-slide' data-aos='fade-up'>
        <div className='image-holder'>
          <img src={item.image} alt="" />
        </div>
        <div className='text-holder'>
          <h6 className=''>{item.title}</h6>
          <p className='faint-font reduced-soft content mb-2 faint-font'>
            {clipToLength(item.content[0].point || item.content[0].topic || item.content[1].point, 100)}
          </p>
          <p className='faint-font reduced-soft mb-0 faint-font'>{item.date}</p>
        </div>
      </div>
    </div>
  })
  return (
    <div className='latest-news py-5'>
      <div className='w96 max1200 py-4'>
        <h3 className='text-center'>Latest News</h3>
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

export default LatestNews;
