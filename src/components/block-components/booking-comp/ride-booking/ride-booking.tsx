import React, {  } from 'react';
import './ride-booking.scss';

interface IFlightBooking {
  cleanSelection?: boolean;
}

function RideBookingComp({cleanSelection}: IFlightBooking) {
  return (
    <div className='ride-booking'>
      <div className=''>Ride</div>
    </div>
  );
}

export default RideBookingComp;
