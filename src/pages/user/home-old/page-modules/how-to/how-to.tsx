import React, {  } from 'react';
import { HowToIconCreateAccount, HowToIconKYC, HowToIconEasyBuy, HowToInnerRing, HowToOuterRing, ManillaCoin } from '../../../../../assets/images';
import './how-to.scss';

function HowTo() {
  return (
    <div className='how-to py-5' id='how-it-works'>
      <div className='w96 max1200 py-4'>
        <h3 className='text-center'>How It Works</h3>
        <div className='step-ring'>
          <div className='outer-ring'>
            <img src={HowToOuterRing} alt="" />
          </div>
          <div className='inner-ring'>
            <img src={HowToInnerRing} alt="" />
          </div>
          <div className='manilla-coin'>
            <img src={ManillaCoin} alt="" />
          </div>
          <div className='step-card card-1' data-aos='zoom-in'>
            <div className='inner-liner'>
              <div className='description-grid-80'>
                <div className='imh'>
                  <img src={HowToIconCreateAccount} alt="" />
                </div>
                <div className='topic'>
                  <h6 className='pl-2 mb-0 reduced-soft'>CREATE AN ACCOUNT</h6>
                </div>
              </div>
              <p className='mb-0 pt-3 reduced'>
                To start using our platform, you are expected to create an account. It will usually 
                not take more than 2 minutes to complete the account creation process.
              </p>
            </div>
          </div>
          <div className='step-card card-2' data-aos='zoom-in'>
            <div className='inner-liner'>
              <div className='description-grid-80'>
                <div className='imh'>
                  <img src={HowToIconKYC} alt="" />
                </div>
                <div className='topic'>
                  <h6 className='pl-2 mb-0 reduced-soft'>KYC VERIFICATION</h6>
                </div>
              </div>
              <p className='mb-0 pt-3 reduced'>
                Top-of-the-line identity authentication systems process your KYC in a matter of minutes after you sign up, 
                ensuring that the proper KYC protocol is followed. We are incorporating robustness to cut verification 
                times in half.
              </p>
            </div>
          </div>
          <div className='step-card card-3' data-aos='zoom-in'>
            <div className='inner-liner'>
              <div className='description-grid-80'>
                <div className='imh'>
                  <img src={HowToIconEasyBuy} alt="" />
                </div>
                <div className='topic'>
                  <h6 className='pl-2 mb-0 reduced-soft'>PAY BILLS & TRADE DIGITAL ASSETS</h6>
                </div>
              </div>
              <p className='mb-0 pt-3 reduced'>
                Whether you are a buyer or seller, an expert trader, a beginner, or you want to pay everyday bills, this 
                platform has been designed to be intuitive and guide you through all the processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
