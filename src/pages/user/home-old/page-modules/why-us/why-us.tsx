
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomWhiteArc } from '../../../../../assets/images';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { whyChooseList } from './why-us-data';
import './why-us.scss';

function WhyUs(props: any) {

  const [adjustableChooseList, setAdjustableChooseList] = useState(whyChooseList);
  
  // const flipCard = (index: number) => {
  //   const newList = [...adjustableChooseList];
  //   newList[index].flipped = !newList[index].flipped;
  //   setAdjustableChooseList(newList);
  // }

  useEffect(() => {
    const newList = [...adjustableChooseList];
    newList.map((item) => {
      props.flipped ? item.flipped = true : item.flipped = false;
      return item;
    });
    setAdjustableChooseList(newList);
  }, [props]);

  return (
    <>
      {/* <div className='why-us pb-5'>
        {props.spaceUp && <div className='why-spacing'></div>}
        <div className='w96 max1200 pb-4 pt-3'>
          <h3 className='text-center pt-5'>Why Choose Us</h3>
          <div className='row'>
            {adjustableChooseList.map((item, index) => {
              return <div className='col-lg-3 col-md-6' key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className={'why-us-card ' + (item.flipped ? 'flipped' : '')}>
                <div className='text-sect'>
                  <div className='w40 max70 imh pb-3'>
                    <img src={item.darkIcon} alt="" />
                  </div>
                  <div className='writeup'>
                    <p className='mb-0'>{item.text}</p>
                  </div>
                  <div className='spread-info pt-2'>
                  </div>
                </div>
                <div className='topic'>
                  <div className='icon-sect'>
                    <img src={item.icon} alt="" />
                  </div>

                  <h6>{item.topic}</h6>
                  <div className='flip-menu'>
                    <p className='clickable reduced c-white mb-0' onClick={() => flipCard(index)}>Click to flip</p>
                  </div>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div> */}
      <div className='why-us'>
        {props.spaceUp && <div className='why-spacing'></div>}
        <div className='w96 max1200 pb-4 pt-5'>
          <h3 className='text-center pt-4'>Why Choose Us</h3>
          <div className='row'>
            {adjustableChooseList.map((item, index) => {
              return <div className='col-lg-3 col-md-6' key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className={'why-us-card ' + (index > 0 && 'block-side')}>
                <div className='topic'>
                  <div className='mb-2'>
                    <img src={item.redIcon} alt="" />
                  </div>
                  <h6>{item.topic}</h6>
                  <div className='writeup'>
                    <p className='mb-0'>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
        <div className='text-center'>
          <Link to={routeConstants.register}>
            <button className='solid-button-2c'>
              <div className='spread-info'>
                Get Started
                <i className='fa-solid fa-arrow-right-long increased ml-3'></i>
              </div>
            </button>
          </Link>
        </div>
        <div className='bottom-arc'>
          <img src={BottomWhiteArc} alt="" />
        </div>
      </div>
    </>
  );
}

export default WhyUs;
