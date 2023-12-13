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
    <div className='sub-hero pt-5'>
      <div className='w90 max1200'>
        <div className='row'>
          <div className='col-lg-6 py-4 center-info'>
                <div className='w96 py-3'>
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
                  <div className='sb-card' data-aos="fade-right" data-aos-delay='100'>
                    <div className='ich'>
                      <img src={SbCardIconEarn} alt="" />
                    </div>
                    <div className='ich'>
                      <p className='mb-0'>
                        Enjoy a Profit Share of 40% Every Fiscal Year When You Stake MNLA for 365 Days
                      </p>
                    </div>
                  </div>
                  <div className='sb-card' data-aos="fade-right" data-aos-delay='200'>
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
          <div className='col-lg-6 py-4 center-info'>
            <div className='vid-space' data-aos='zoom-in' data-aos-delay='800'>
                <div className='top-sphare-curve' data-aos='zoom-in' data-aos-delay='900'></div>
                <div className='bottom-sphare-curve' data-aos='zoom-in' data-aos-delay='900'></div>
                <div className='vid-holder'>
                  <div className="stream-vid">
                      <iframe width="100%" height="100%" title="vid-modal" src={`https://www.youtube.com/embed/${'kD-IIeri2Uo'}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubSpace;
