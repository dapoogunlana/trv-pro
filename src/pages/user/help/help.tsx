import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '../../../assets/images';
import { helpList } from './help-data';
import { routeConstants } from '../../../services/constants/route-constants';
import './help.scss';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';

function Help() {

  const navigate = useNavigate();

  const clipToLength = (item: string, length: number) => {
    if (!item) {
      return '';
    }
    if(item.length > length) {
      const trimedItem = item.substring(0, (length - 2));
      return trimedItem + '..';
    } else {
      return item;
    }
  }

  const goToItem = (id: number) => {
    navigate(`/${routeConstants.help}/${id}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='help'>
      <div className='w90 max1200 pt-5'>
        <div className='header-spacer'></div>
        <h2 className='pt-3'>Help</h2>

        <hr className='mb-0' />

        <div className='row' data-aos="fade-up">
          <div className='col-md-6 center-info-front py-4'>
            <div className='imh max500 shadowed rad-10'>
              <img src={helpList[0].image} className='rad-10' alt="" />
            </div>
          </div>
          <div className='col-md-6 center-info'>
            <div className='max500'>
              <p className='c-faint-font mb-2'>{helpList[0].date}</p>
              <h3>{helpList[0].title}</h3>
              <p>{clipToLength(helpList[0].content[0] || helpList[0].title || helpList[0].content[1], 100)}</p>
              <p className='c-pr-blue increased clickable' onClick={() => goToItem(helpList[0].id)}>Read More</p>
            </div>
          </div>
        </div>

        <hr className='pt-0 mt-0' />

        <div className='row'>
            {helpList.map((item, index) => {
              if (index > 0 && index < 4) {
                return <div className='col-lg-4 colmd-6 py-3' data-aos="fade-up" key={index}>
                  <div className='imh max500 shadowed rad-10'>
                    <img src={item.image} className='rad-10' alt="" />
                  </div>
                  <div className='max500 pt-3'>
                    <p className='c-faint-font mb-2'>{item.date}</p>
                    <h4 className='increased'>{item.title}</h4>
                    <p className='c-pr-blue increased-soft clickable' onClick={() => goToItem(item.id)}>Read More</p>
                  </div>
                </div>
              }
            })}
          
        </div>

        <hr className='pt-0 mt-0' />

      </div>

      {/* <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Help</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200'>
          <div className='row'>
            {helpList.map((item, index) => {
              return   <div className='col-lg-4 col-md-6 py-3' key={index}>
              <div className='cover' data-aos="fade-up">
                <div className='display-img'>
                  <img src={item.image} alt="" />
                </div>
                <div className='content mt-3'>
                  <div className='spread-info-front mb-2'>
                    <img src={CalendarIcon} alt="" className='mr-2' />
                    <p className='mb-0 reduced-soft faint-font'>{item.date}</p>
                  </div>
                  <h6 className='mb- increased min78'>{item.title}</h6>
                  <p>{clipToLength(item.content[0], 100)}</p>
                  <div className='full-button'>
                    <button className='solid-button-2c' onClick={() => goToItem(item.id)}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div> */}

      <ContactSect/>
    </div>
  );
}

export default Help;
