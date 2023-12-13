import React, { useEffect } from 'react';
import { PolicyImg, BulletKiteIcon } from '../../../assets/images';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { segrigateString } from '../../../services/utils/data-manipulation-utilits';
import { amlPolicyList } from './aml-policy-data';
import './aml-policy.scss';

function AMLPolicy() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='policy'>
      <div className='header-spacer'></div>
      <div className='top-band'>
        <div className='topic right-holder px-3 py-4'>
          <h2>Anti Money Laundering Policy</h2>
        </div>
        <div className='floating-img'>
          <img src={PolicyImg} alt="" />
        </div>
      </div>
      <div className='policy-body py-5'>
        <div className='w90 max1200 py-4'>
          <div className='policy-card right-holder my-4' data-aos='fade-up'>
            {amlPolicyList[0].body.map((item,index) => <p key={index}>{item.point}</p>)}
          </div>
          
          {amlPolicyList.map((point, index) => {
            return (index > 0) && <div className='policy-card my-4' key={index} data-aos='fade-up'>
              <div className='policy-heading'>
                <img src={BulletKiteIcon} alt="" />
                <h6 className='increased'>{point.topic}</h6>
              </div>
              <ul>
                {point.body.map((item, itemIndex) => {
                  return <li key={itemIndex} className={item.point ? '' : 'clear'}>
                    <p className='pt-3'>
                      {item.point}
                      {/* <b>{segrigateString(item.point).brief}</b>
                      {segrigateString(item.point).explanation} */}
                      <span className='c-white'>.</span>
                    </p>
                    <ul className='pl-3'>
                      {item.subPoints.map((subItem, subIndex) => {
                        return <li key={subIndex}>
                          <p>{subItem}</p>
                        </li>
                      })}
                    </ul>
                  </li>
                })}
              </ul>
            </div>
          })}
        </div>
      </div>
      
      <ContactSect/>
    </div>
  );
}

export default AMLPolicy;
