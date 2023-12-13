import React, {  } from 'react';
import {
  SbCardIconExperience,
  SbCardIconEarn,
  SbCardIconExplore,
  SubBannerIconEarn,
  SubBannerIconUtility,
  SubBannerIconGiftcard,
  SubBannerIconBorrow,
  SubBannerIconData,
  SubBannerIconExchange,
  SbDottedSpinner,
  SbSpinnerImage,
} from '../../../../../assets/images';
import './banner-sub-space.scss';

function SubSpace() {
  return (
    <div className='sub-hero py-5'>
      <div className='w90'>
        <div className='row'>
          <div className='col-md-6 py-4 center-info'>
            <div>
              <div className='sb-card' data-aos="fade-right">
                <div className='ich'>
                  <img src={SbCardIconExperience} alt="" />
                </div>
                <div className='ich'>
                  <p className='mb-0'>
                    Experience the Power of True Decentralization When You Exchange Cypto With Your Peers
                  </p>
                </div>
              </div>
              <div className='sb-card my-3 spc-right' data-aos="fade-left">
                <div className='ich'>
                  <img src={SbCardIconEarn} alt="" />
                </div>
                <div className='ich'>
                  <p className='mb-0'>
                    Enjoy a Profit Share of 40% Every Fiscal Year When You Stake MNLA for 365 Days
                  </p>
                </div>
              </div>
              <div className='sb-card' data-aos="fade-right">
                <div className='ich'>
                  <img src={SbCardIconExplore} alt="" />
                </div>
                <div className='ich'>
                  <p className='mb-0'>
                    Explore & Benefit from the Manilla’s Service Suite Enabling Users Pay with Crypto for their Daily Bills.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 py-4'>
            <div className='w96 max500 sb-spinner'>
              <div className='imh faded'>
                <img src={SbDottedSpinner} alt="" />
              </div>
              <div className='abs-f'>
                <div className='w90 imh spinner'>
                  <img src={SbDottedSpinner} alt="" />
                </div>
              </div>
              <div className='abs-f'>
                <div className='w50 imh'>
                  <img src={SbSpinnerImage} alt="" />
                </div>
              </div>
              <div className='feature-icon earn' data-aos="zoom-in">
                <img src={SubBannerIconEarn} alt="" />
                <div className='name'>Earn High APY</div>
              </div>
              <div className='feature-icon utility' data-aos="zoom-in">
                <img src={SubBannerIconUtility} alt="" />
                <div className='name'>Pay for Utilities</div>
              </div>
              <div className='feature-icon giftcard' data-aos="zoom-in">
                <img src={SubBannerIconGiftcard} alt="" />
                <div className='name'>Gift Cards</div>
              </div>
              <div className='feature-icon borrow' data-aos="zoom-in">
                <img src={SubBannerIconBorrow} alt="" />
                <div className='name'>Borrow</div>
              </div>
              <div className='feature-icon data' data-aos="zoom-in">
                <img src={SubBannerIconData} alt="" />
                <div className='name'>Airtime & Data</div>
              </div>
              <div className='feature-icon exchange' data-aos="zoom-in">
                <img src={SubBannerIconExchange} alt="" />
                <div className='name'>P2P Exchange</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubSpace;
