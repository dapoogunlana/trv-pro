import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
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
  const [flightClass, setFlightClass] = useState<'Economy' | 'Premium Economy' | 'Business' | 'First Class'>('Economy');

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

  const updateFlightClass = (flightClass: 'Economy' | 'Premium Economy' | 'Business' | 'First Class') => {
    setFlightClass(flightClass);
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
      flightClass,
      allPassengerCount,
    });
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
  }, [allPassengerCount])

  return (
    <div className='pt-3 pb-2'>
      <AppPopup
        switch={
          <div className='selector' onClick={() => toggleShowPopup(2)} title={`${allPassengerCount} Passenger${allPassengerCount === 1 ? '' : 's'}, ${flightClass}`}>
            <div className='label'>Passanger - Class</div>
            <p className='mb-0 reduced-info'>{allPassengerCount} Passenger{allPassengerCount === 1 ? '' : 's'}, {clipToLength(flightClass, 19)}</p>
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
              className={'flight-class-sect' + (flightClass === 'Economy' ? ' selected' : '')}
              onClick={() => updateFlightClass('Economy')}
            >
              <input
                type="radio"
                value={'Economy'}
                name='flight-class'
                checked={flightClass === 'Economy'}
                onChange={() => updateFlightClass('Economy')}
              />
              <span className=''>Economy</span>
            </div>
            <div 
              className={'flight-class-sect' + (flightClass === 'Premium Economy' ? ' selected' : '')}
              onClick={() => updateFlightClass('Premium Economy')}
            >
              <input
                type="radio"
                value={'Premium Economy'}
                name='flight-class'
                checked={flightClass === 'Premium Economy'}
                onChange={() => updateFlightClass('Premium Economy')}
              />
              <span className=''>Premium Economy</span>
            </div>
            <div 
              className={'flight-class-sect' + (flightClass === 'Business' ? ' selected' : '')}
              onClick={() => updateFlightClass('Business')}
            >
              <input
                type="radio"
                value={'Business'}
                name='flight-class'
                checked={flightClass === 'Business'}
                onChange={() => updateFlightClass('Business')}
              />
              <span className=''>Business</span>
            </div>
            <div 
              className={'flight-class-sect' + (flightClass === 'First Class' ? ' selected' : '')}
              onClick={() => updateFlightClass('First Class')}
            >
              <input
                type="radio"
                value={'First Class'}
                name='flight-class'
                checked={flightClass === 'First Class'}
                onChange={() => updateFlightClass('First Class')}
              />
              <span className=''>First Class</span>
            </div>
          </div>
        </div>
      </AppPopup>
    </div>
  );
}

export default FlightClassSelectionComp;
