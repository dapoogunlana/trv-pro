import React, {  } from 'react';
import { BookingWidgetStays } from '../../../../assets/images';
import './stays-booking-comp.scss';

interface IFlightBooking {
  cleanSelection?: boolean;
}

function StaysBookingComp({cleanSelection}: IFlightBooking) {
  return (
    <div className='stays-booking-comp'>
      <div className='imh'>
        <img src={BookingWidgetStays} alt="" />
      </div>
    </div>
  );
}

export default StaysBookingComp;
