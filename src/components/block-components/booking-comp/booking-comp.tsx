import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './booking-comp.scss';
import FlightBookingComp from './flight-booking/flight-booking';
import RideBookingComp from './ride-booking/ride-booking';
import StaysBookingComp from './stays-booking/stays-booking';

interface iProps {
  mode?: 'FLIGHTS' | 'STAYS' |'RIDES';
  inActive?: boolean;
}

function BookingComp(props: iProps) {

  const [mode, setMode] = useState<'FLIGHTS' | 'STAYS' |'RIDES'>(props.mode || 'FLIGHTS');

  const switchMode = (modeString: 'FLIGHTS' | 'STAYS' |'RIDES') => {
    setMode(modeString);
  }

  useEffect(() => {}, [props]);

  return (
    <div className='booking-comp'>
      <div className='booking-tab-space'>
        <div className='tabs'>
          <div className={'tab' + (mode === 'FLIGHTS' ? ' active-tab' : '')} onClick={() => switchMode('FLIGHTS')}>
            <FontAwesomeIcon icon={'plane'}/> <span>Flights</span>
          </div>
          <div className='separator'></div>
          <div className={'tab' + (mode === 'STAYS' ? ' active-tab' : '')} onClick={() => switchMode('STAYS')}>
            <FontAwesomeIcon icon={'bed'}/> <span>Stays</span>
          </div>
          <div className='separator'></div>
          <div className={'tab' + (mode === 'RIDES' ? ' active-tab' : '')} onClick={() => switchMode('RIDES')}>
            <FontAwesomeIcon icon={'car'}/> <span>Rides</span>
          </div>
        </div>
        <div className='main-content'>
          {mode === 'FLIGHTS' && <FlightBookingComp/>}
          {mode === 'STAYS' && <StaysBookingComp/>}
          {mode === 'RIDES' && <RideBookingComp/>}
        </div>
      </div>
    </div>
  );
}

export default BookingComp;
