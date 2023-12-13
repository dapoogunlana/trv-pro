import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { PopupIconPartnership, PopupIconWhitelist } from '../../../../../assets/images';
import { externalLinkConstants } from '../../../../../config/environment';
import './hero-popup.scss';

function HeroPopup() {


  return (
    <div className='hero-popup'>
      <div className='popup-grid'>
        <div className='grid-content'>
          <h6 className='increased'>Partner With Us</h6>
          <div className='imh'>
            <img src={PopupIconPartnership} alt="" />
          </div>
          <a href={externalLinkConstants.partnershipForm} target='_blank' rel='no-referrer'>
            <button className='solid-button-2c px-5'>Apply Now</button>
          </a>
        </div>
        <div className='divider'></div>
        <div className='grid-content'>
          <h6 className='increased'>Join Our Whitelist</h6>
          <div className='imh'>
            <img src={PopupIconWhitelist} alt="" />
          </div>
          <a href={externalLinkConstants.whiteListForm} target='_blank' rel='no-referrer'>
            <button className='solid-button-2c px-5'>Apply Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroPopup;
