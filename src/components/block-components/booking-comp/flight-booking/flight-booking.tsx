import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AppPopup from '../../app-popup/app-popup';
import DateSelectionComp from './date-selection/date-selection';
import './flight-booking.scss';
import FlightClassSelectionComp from './flight-class-selection/flight-class-selection';
import LocationSelectionComp from './location-selection/location-selection';
import LuggageSelectionComp from './luggage-selection/luggage-selection';

function FlightBookingComp() {

  const [showPopup, setShowPopup] = useState<0 | 1 | 2>(0);
  const [flightType, setFlightType] = useState<'multi' | 'return' | 'one-way'>('return');
  const [location, setLocation] = useState({takeoff: '', destination: ''});
  const [date, setDate] = useState<Date | undefined | { startDate: Date | undefined, endDate: Date| undefined, key: string }>({ startDate: undefined, endDate: undefined, key: 'selection' });
  const [luggageCounts, setLuggageCounts] = useState<{checkedInCount: number, handLuggageCounts: number}>({checkedInCount: 0, handLuggageCounts: 0});
  const [flightClass, setFlightClass] = useState<any>();

  const updateFlightType = (type: 'multi' | 'return' | 'one-way') => {
    setFlightType(type);
  }

  const updateLocation = (type: {takeoff: string, destination: string}) => {
    console.log({type});
    setLocation(type);
  }

  const updateDate = (type: Date | undefined | { startDate: Date | undefined, endDate: Date| undefined, key: string }) => {
    console.log({type})
    setDate(type);
  }
  const updateLuggageCounts = (counts: {checkedInCount: number, handLuggageCounts: number}) => {
    console.log({counts})
    setLuggageCounts(counts);
  }
  const updateFlightClass = (counts: any) => {
    console.log({flightClass})
    setFlightClass(counts);
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
        <div className='col-lg-3 col-sm-6'>
          <DateSelectionComp setDate={updateDate} multiple={flightType === 'return'} />
        </div>
        <div className='col-lg-3 col-sm-6'>
          <LuggageSelectionComp setLuggageCounts={updateLuggageCounts} />
        </div>
        <div className='col-lg-3 col-sm-6'>
          <FlightClassSelectionComp setFlightClass={updateFlightClass} />
        </div>
      </div>
      
    </div>
  );
}

export default FlightBookingComp;
