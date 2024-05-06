import React, { useEffect } from 'react';
import BannerSect from './hero/banner';
import SubscribeSect from '../home/page-modules/subscribe/subscribe';
import './flights.scss';

function FlightsPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='flights'>
      <BannerSect/>
      <div className='flight-listout'></div>
      <SubscribeSect/>
    </div>
  );
}

export default FlightsPage;
