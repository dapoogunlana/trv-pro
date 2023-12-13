
import React, { useEffect, useState } from 'react';
import { BottomWhiteArc } from '../../../../../assets/images';
import { whyChooseList } from '../why-us/why-us-data';
import './why-us-2.scss';

function WhyUs2(props: any) {

  const [adjustableChooseList, setAdjustableChooseList] = useState(whyChooseList);
  
  const flipCard = (index: number) => {
    const newList = [...adjustableChooseList];
    newList[index].flipped = !newList[index].flipped;
    setAdjustableChooseList(newList);
  }

  useEffect(() => {
    const newList = [...adjustableChooseList];
    newList.map((item, index) => {
      props.flipped ? item.flipped = true : item.flipped = false;
      return item;
    });
    setAdjustableChooseList(newList);
  }, [props]);

  return (
    <>
      <div className='why-us-2 pb-5'>
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
      </div>
    </>
  );
}

export default WhyUs2;
