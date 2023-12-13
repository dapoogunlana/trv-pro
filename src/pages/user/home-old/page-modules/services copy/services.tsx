import React, {  } from 'react';
import { ServiceLogo } from '../../../../../assets/images';
import { serviceList } from './services-data';
import './services.scss';

function Services() {
  return (
    <div className='services py-5' id='features'>
    <div className='w96 max1200 py-4'>
      <h3 className='text-center mt-5 pt-5'>Why Choose Us</h3>
      <div className='row'>
        {serviceList.map((item, index) => {
          return <div className='col-lg-4 col-md-6' key={index} data-aos="fade-up" data-aos-delay={index * 200}>
            {!(index % 2) && <div className='service-spacer'></div>}
            <div className='service-card' data-aos="zoom-in">
              <div className='topic'>
                <div className='icon-sect'>
                  <div className='imh rel'>
                    <img src={item.iconW} alt="" />
                  </div>
                  <div className='abs imh'>
                    <img src={item.iconB} alt="" />
                  </div>
                </div>
                <h6>{item.topic}</h6>
                <p className='mb-0 reduced-soft'>{item.writeup}</p>
              </div>
            </div>
            {
              index === 1 && <div className='manilla-service-logo'>
                <img src={ServiceLogo} alt="" />
              </div>
            }
          </div>
        })}
      </div>
    </div>
  </div>
  );
}

export default Services;
