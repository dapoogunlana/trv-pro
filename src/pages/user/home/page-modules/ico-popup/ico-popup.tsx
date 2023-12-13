import React, { useEffect, useState } from 'react';
import { IcoPopup } from '../../../../../assets/images';
import { externalLinkConstants } from '../../../../../config/environment';
import './ico-popup.scss';

function IcoPopupComp(props: any) {

  const [popUpClosed, setPopUpClosed] = useState(true);

  const closePopup = () => {
    setPopUpClosed(true);
  }

  const gotoPresaleLink = () => {
    window.open(externalLinkConstants.presaleLink);
  }

  useEffect(() => {
    setTimeout(() => setPopUpClosed(false), 3000);
  }, [props])

  return (
    <div className={'ico-popup' + (popUpClosed ? ' ico-closed' : '')}>
      <img src={IcoPopup} alt="" />
      <div className='overlay' onClick={gotoPresaleLink}>
        <h4>
          Click to participate in the 
          <span>MNLA ICO</span>
        </h4>
      </div>
      <div className='close-botton' onClick={closePopup}>
        <i className='fas fa-times'></i>
      </div>
    </div>
  );
}

export default IcoPopupComp;
