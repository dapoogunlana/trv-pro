import React, { useEffect } from 'react';
import './travel-deals.scss';

function TravelDealsSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='travel-deals'>
      <h1>Travel-deals Sect</h1>
    </div>
  );
}

export default TravelDealsSect;
