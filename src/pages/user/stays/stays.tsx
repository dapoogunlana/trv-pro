import React, { useEffect } from 'react';
import { 
  PropertyRecentSearch1,
  PropertyRecentSearch2,
  PropertyRecentSearch3,
  PropertyRecentSearch4,
 } from '../../../assets/images';
import BannerSect from './hero/banner';
import OffersSect from './offers/offers';
import PropertiesSect from './properties/properties';
import StayLocationDealsSect from './stay-location-deals/stay-location-deals';
import './stays.scss';

function StaysPage() {

  const searchStays = (stay: any) => {}

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='stays'>
      <BannerSect searchStays={searchStays} />
      <div className='stay-info'>
        <div className='w90 max1100 pt-5'>
          <h3 className='h3b pb-4 pt-5'>Your recent <span className='orange-tx'> searches</span></h3>
          <div className='row'>
            <div className='col-lg-3 col-sm-6 py-2'>
              <div className='description-grid-80' data-aos="zoom-out">
                <div className='imh'>
                  <img src={PropertyRecentSearch1} className='rad-10 shadowed' alt="" />
                </div>
                <div className='px-2 pt-3'>
                  <h6 className='increased mb-0'>Istanbul, Turkey</h6>
                  <p className='mb-0 faint-tx number-light'>325 places</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 py-2'>
              <div className='description-grid-80' data-aos="zoom-out" data-aos-delay='200'>
                <div className='imh'>
                  <img src={PropertyRecentSearch2} className='rad-10 shadowed' alt="" />
                </div>
                <div className='px-2 pt-3'>
                  <h6 className='increased mb-0'>Sydney, Australia</h6>
                  <p className='mb-0 faint-tx number-light'>325 places</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 py-2'>
              <div className='description-grid-80' data-aos="zoom-out" data-aos-delay='400'>
                <div className='imh'>
                  <img src={PropertyRecentSearch3} className='rad-10 shadowed' alt="" />
                </div>
                <div className='px-2 pt-3'>
                  <h6 className='increased mb-0'>Baku, Azerbaijan</h6>
                  <p className='mb-0 faint-tx number-light'>325 places</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 py-2'>
              <div className='description-grid-80' data-aos="zoom-out" data-aos-delay='600'>
                <div className='imh'>
                  <img src={PropertyRecentSearch4} className='rad-10 shadowed' alt="" />
                </div>
                <div className='px-2 pt-3'>
                  <h6 className='increased mb-0'>Malé, Maldives</h6>
                  <p className='mb-0 faint-tx number-light'>325 places</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StayLocationDealsSect>
          <div className='w90 max1100 pt-5'>
            <h3 className='h3b'>Favorite Hotels <span className='orange-tx'> Round the Globe</span></h3>
            <p className='increased'>
              Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the 
              travel tools to get you to your destination.
            </p>
          </div>
        </StayLocationDealsSect>
        <OffersSect/>
        <PropertiesSect/>
      </div>
    </div>
  );
}

export default StaysPage;
