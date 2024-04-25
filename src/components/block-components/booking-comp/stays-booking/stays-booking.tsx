import React, {  } from 'react';
import './stays-booking.scss';

interface IFlightBooking {
  cleanSelection?: boolean;
}

function StaysBookingComp({cleanSelection}: IFlightBooking) {
  return (
    <div className='stays-booking'>
      <div className=''>Stays</div>
    </div>
  );
}

export default StaysBookingComp;
