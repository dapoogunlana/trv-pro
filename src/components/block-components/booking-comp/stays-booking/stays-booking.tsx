import React, {  } from 'react';
import { BookingWidgetStays } from '../../../../assets/images';
import './stays-booking.scss';

interface IFlightBooking {
  cleanSelection?: boolean;
}

function StaysBookingComp({cleanSelection}: IFlightBooking) {
  return (
    <div className='stays-booking'>
      <div className='imh'>
        <img src={BookingWidgetStays} alt="" />
      </div>
    </div>
  );
}

export default StaysBookingComp;
