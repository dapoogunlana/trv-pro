import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AppPopup from '../../app-popup/app-popup';
import './flight-booking.scss';
import LocationSelectionComp from './location-selection/location-selection';

function FlightBookingComp() {

  const [showPopup, setShowPopup] = useState<0 | 1 | 2>(0);
  const [flightType, setFlightType] = useState<'multi' | 'return' | 'one-way'>('return');
  const [location, setLocation] = useState({takeoff: '', destination: ''});

  const updateFlightType = (type: 'multi' | 'return' | 'one-way') => {
    setFlightType(type);
  }

  const updateLocation = (type: {takeoff: string, destination: string}) => {
    setLocation(type);
  }

  const toggleShowPopup = (status?: 0 | 1 | 2) => {
    setShowPopup(status || 0);
  }

  return (
    <div className='flight-booking'>
      <div className='flight-type-selector'>
        <div onClick={() => updateFlightType('multi')}>
          <input
            type="radio"
            value={'multi'}
            name='flight-type'
            checked={flightType === 'multi'}
            onChange={() => updateFlightType('multi')}
          />
          <span>Multi city</span>
        </div>
        <div onClick={() => updateFlightType('return')}>
          <input
            type="radio"
            value={'return'}
            // defaultChecked
            name='flight-type'
            checked={flightType === 'return'}
            onChange={() => updateFlightType('return')}
          />
          <span>Return</span>
        </div>
        <div onClick={() => updateFlightType('one-way')}>
          <input
            type="radio"
            value={'one-way'}
            name='flight-type'
            checked={flightType === 'one-way'}
            onChange={() => updateFlightType('one-way')}
          />
          <span>One way</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-sm-6'>
          <LocationSelectionComp setLocation={updateLocation} />
        </div>
      </div>
      
    </div>
  );
}

export default FlightBookingComp;
