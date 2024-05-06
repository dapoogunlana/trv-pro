import React from 'react';
import BookingComp from '../../../../../components/block-components/booking-comp/booking-comp';
import './banner.scss';

function BannerSect(props: {searchFlights: Function}) {
  
  return (
    <div className='banner'>
      <div className='text'>
        <h1 className='f700'>Borderless</h1>
        <h3><span className='yellow-tx'>Seamless </span>booking,</h3>
        <h3><span className='orange-tx'>boundless </span>adventures</h3>
      </div>
      <div className='booking-sect'>
        <BookingComp hidecategories mode='FLIGHTS' searchFlights={props.searchFlights} />
      </div>
    </div>
  );
}

export default BannerSect;
