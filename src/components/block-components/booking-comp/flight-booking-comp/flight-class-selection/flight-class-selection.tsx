import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { calculateAdult, calculateMinors } from '../../../../../pages/user/flights/flight-search/flight-search-service';
import { clipToLength } from '../../../../../services/utils/data-manipulation-utilits';
import { IFlightClassData } from '../../../../../services/utils/flight-booking-service';
import IncrementalCountComponent from '../../../../base-components/incremental-count/incremental-count';
import AppPopup from '../../../app-popup/app-popup';
import './flight-class-selection.scss';

interface iFlightClassProps {
  setFlightClass: Function;
  flightClass?: IFlightClassData;
}

function FlightClassSelectionComp(props: iFlightClassProps) {

  const [showPopup, setShowPopup] = useState<0 | 1 | 2>(0);
  const [adults18_64Count, setAdults18_64Count] = useState(props.flightClass?.adults18_64Count || 0);
  const [studentsOver18Count, setStudentsOver18Count] = useState(props.flightClass?.studentsOver18Count || 0);
  const [seniorsOver65Count, setSeniorsOver65Count] = useState(props.flightClass?.seniorsOver65Count || 0);
  const [youths12_17Count, setYouths12_17Count] = useState(props.flightClass?.youths12_17Count || 0);
  const [children2_11Count, setChildren2_11Count] = useState(props.flightClass?.children2_11Count || 0);
  const [toddlersInOwnSeatUnder2Count, setToddlersInOwnSeatUnder2Count] = useState(props.flightClass?.toddlersInOwnSeatUnder2Count || 0);
  const [infantsOnLapUnder2Count, setInfantsOnLapUnder2Count] = useState(props.flightClass?.infantsOnLapUnder2Count || 0);
  const [allPassengerCount, setAllPassengerCount] = useState(props.flightClass?.allPassengerCount || 0);
  const [cabinClass, setCabinClass] = useState<'Economy' | 'Premium' | 'Business' | 'First'>(props.flightClass?.cabinClass || 'Economy');

  const toggleShowPopup = (status?: 0 | 1 | 2) => {
    setShowPopup(status || 0);
  }

  const updateAdults18_64Count = (count: number) => {
    setAdults18_64Count(count);
  }
  const updateStudentsOver18Count = (count: number) => {
    setStudentsOver18Count(count);
  }
  const updateSeniorsOver65Count = (count: number) => {
    setSeniorsOver65Count(count);
  }
  const updateYouths12_17Count = (count: number) => {
    setYouths12_17Count(count);
  }
  const updateChildren2_11Count = (count: number) => {
    setChildren2_11Count(count);
  }
  const updateToddlersInOwnSeatUnder2Count = (count: number) => {
    setToddlersInOwnSeatUnder2Count(count);
  }
  const updateInfantsOnLapUnder2Count = (count: number) => {
    setInfantsOnLapUnder2Count(count);
  }

  const updateCabinClass = (cabinClass: 'Economy' | 'Premium' | 'Business' | 'First') => {
    setCabinClass(cabinClass);
  }

  const calculateAllPassengerCount = () => {
    const all = 
      adults18_64Count +
      studentsOver18Count +
      seniorsOver65Count +
      youths12_17Count +
      children2_11Count +
      toddlersInOwnSeatUnder2Count +
      infantsOnLapUnder2Count;
    setAllPassengerCount(all);
  }

  const sendFlightUpdates = () => {
    props.setFlightClass({
      adults18_64Count,
      studentsOver18Count,
      seniorsOver65Count,
      youths12_17Count,
      children2_11Count,
      toddlersInOwnSeatUnder2Count,
      infantsOnLapUnder2Count,
      cabinClass,
      allPassengerCount,
    });
  }
  
  const confirmPassangerCounts = () => {
    toggleShowPopup(1);
  }

  const sendAdults = () => {
    return calculateAdult({allPassengerCount, children2_11Count, toddlersInOwnSeatUnder2Count, infantsOnLapUnder2Count}, true);
  }

  const sendMinors = () => {
    return calculateMinors({allPassengerCount, children2_11Count, toddlersInOwnSeatUnder2Count, infantsOnLapUnder2Count}, true);
  }

  useEffect(() => {
    calculateAllPassengerCount();
  }, [
    adults18_64Count,
    studentsOver18Count,
    seniorsOver65Count,
    youths12_17Count,
    children2_11Count,
    toddlersInOwnSeatUnder2Count,
    infantsOnLapUnder2Count
  ])
  useEffect(() => {
    sendFlightUpdates();
  }, [allPassengerCount, cabinClass])

  return (
    <div className='pt-3 pb-2'>
      <AppPopup
        switch={
          <div className='selector' onClick={() => toggleShowPopup(2)} 
            title={
              `${sendAdults()} Adult${sendAdults() === 1 ? '' : 's'}, ` +
              `${sendMinors()} Minor${sendMinors() === 1 ? '' : 's'}, ${cabinClass}`
            }
          >
            <div className='label'>Passanger - Class</div>
            <p className='mb-0 reduced-info'>{allPassengerCount} Passenger{allPassengerCount === 1 ? '' : 's'}, {clipToLength(cabinClass, 19)}</p>
            <FontAwesomeIcon icon={'chevron-down'} className='fainter-tx' />
          </div>
        }
        switchClass='w100-flat'
        showPopup={showPopup}
        onClosePopup={() => toggleShowPopup()}
      >
        <div className='flight-class-case'>
          <div className='sect-holder'>
            <div className='label'>Passanger</div>
            <div className='passenger-sect'>
              <span className='faint-tx'>Adults 18 - 64</span>
              <IncrementalCountComponent updateCount={updateAdults18_64Count} count={adults18_64Count} />
            </div>
            <div className='passenger-sect'>
              <span className='faint-tx'>Students over 18</span>
              <IncrementalCountComponent updateCount={updateStudentsOver18Count} count={studentsOver18Count} />
            </div>
            <div className='passenger-sect'>
              <span className='faint-tx'>Seniors over 65</span>
              <IncrementalCountComponent updateCount={updateSeniorsOver65Count} count={seniorsOver65Count} />
            </div>
            <div className='passenger-sect'>
              <span className='faint-tx'>Youths 12 - 17</span>
              <IncrementalCountComponent updateCount={updateYouths12_17Count} count={youths12_17Count} />
            </div>
            <div className='passenger-sect'>
              <span className='faint-tx'>Children 2 - 11</span>
              <IncrementalCountComponent updateCount={updateChildren2_11Count} count={children2_11Count} />
            </div>
            <div className='passenger-sect'>
              <span className='faint-tx'>Toddlers in own seat under 2</span>
              <IncrementalCountComponent updateCount={updateToddlersInOwnSeatUnder2Count} count={toddlersInOwnSeatUnder2Count} />
            </div>
            <div className='passenger-sect'>
              <span className='faint-tx'>Infants on lap under 2</span>
              <IncrementalCountComponent updateCount={updateInfantsOnLapUnder2Count} count={infantsOnLapUnder2Count} />
            </div>
          </div>
          <div className='separator'></div>
          <div className='sect-holder pb-3'>
            <div className='label'>Passanger</div>
            <div 
              className={'flight-class-sect' + (cabinClass === 'Economy' ? ' selected' : '')}
              onClick={() => updateCabinClass('Economy')}
            >
              <input
                type="radio"
                value={'Economy'}
                name='flight-class'
                checked={cabinClass === 'Economy'}
                onChange={() => updateCabinClass('Economy')}
              />
              <span className=''>Economy</span>
            </div>
            <div 
              className={'flight-class-sect' + (cabinClass === 'Premium' ? ' selected' : '')}
              onClick={() => updateCabinClass('Premium')}
            >
              <input
                type="radio"
                value={'Premium'}
                name='flight-class'
                checked={cabinClass === 'Premium'}
                onChange={() => updateCabinClass('Premium')}
              />
              <span className=''>Premium Economy</span>
            </div>
            <div 
              className={'flight-class-sect' + (cabinClass === 'Business' ? ' selected' : '')}
              onClick={() => updateCabinClass('Business')}
            >
              <input
                type="radio"
                value={'Business'}
                name='flight-class'
                checked={cabinClass === 'Business'}
                onChange={() => updateCabinClass('Business')}
              />
              <span className=''>Business</span>
            </div>
            <div 
              className={'flight-class-sect mb-2' + (cabinClass === 'First' ? ' selected' : '')}
              onClick={() => updateCabinClass('First')}
            >
              <input
                type="radio"
                value={'First'}
                name='flight-class'
                checked={cabinClass === 'First'}
                onChange={() => updateCabinClass('First')}
              />
              <span className=''>First Class</span>
            </div>
            {
              (allPassengerCount - children2_11Count - toddlersInOwnSeatUnder2Count - infantsOnLapUnder2Count) > 0 ?
              <button className='flight-button py-1 px-3' onClick={confirmPassangerCounts}>OK</button> :
              <p className='reduced red-tx italic'>You need an adult present to book a flight</p>
            }
          </div>
        </div>
      </AppPopup>
    </div>
  );
}

export default FlightClassSelectionComp;
