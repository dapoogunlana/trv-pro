import React, {  } from 'react';
import { Link } from 'react-router-dom';
import {  } from '../../../../../assets/images';
import { Carousel } from '../../../../../components/block-components/carousel';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { groupedOperatorList, operatorList } from './operator-data';
import Marquee from "react-fast-marquee";
import './operators.scss';

function Operators(props: any) {
  const slideSpeed = () => {
    const width = window.innerWidth;
    if(width > 767) {
      return 100;
    } else {
      return 50;
    }
  }
  const imageSlide = operatorList.map((item, index) => {
    return <div className="operator_image" key={index} data-aos="zoom-in">
      <img src={item.icon} alt="" />
    </div>
  });
  const openModal = () => {
    props.openOperatorModal()
  }
  return (
    <div className='operators'>
      <div className=''>
        {/* <Carousel
          loop
          autoPlay
          delay={6000}
          freeMode
          slidesPerView={previewCount()}
          spaceBetween={0}
          data={imageSlide}
        /> */}

        <Marquee speed={slideSpeed()} gradient={false}>
          <div className='center-info pt-5 pb-4'>
            {groupedOperatorList.map((category, categoryIndex) => {
              return <React.Fragment key={categoryIndex}>
                <div className='operator-cat-tag'>
                  <h6 className='mb-0'>{category.category}</h6>
                </div>
                {category.operators.map((item, index) => (
                  <div className='operator-card' title={item.icon} key={index}>
                    <img src={item.icon} alt="" />
                  </div>
                ))}
              </React.Fragment>
            })}
          </div>
        </Marquee>

        <div className='text-center w96 pb-5'>
          <Link to={routeConstants.operators}>
            <button className='hollow-button-2cb rad-10' data-aos='fade-up' onClick={openModal}>See Supported Operators in Your Region</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Operators;
