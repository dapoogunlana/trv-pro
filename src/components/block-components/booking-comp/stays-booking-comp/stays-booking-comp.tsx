import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Formik, FormikProps, FormikValues } from "formik";
import AppPopup from '../../app-popup/app-popup';
import DateSelectionComp from './date-selection/date-selection';
import './stays-booking-comp.scss';
import FlightClassSelectionComp from './flight-class-selection/flight-class-selection';
import LocationSelectionComp from './location-selection/location-selection';
import LuggageSelectionComp from './luggage-selection/luggage-selection';
import {
  generateNewCombinedStayData,
  ICombinedStaySearchData,
  IDateData,
  IStayClassData,
  ILaugageData,
  ILocationData,
  storedCombinedStayData,
  updateCombinedStayData,
} from '../../../../services/utils/stay-booking-service';
import { toast } from 'react-toastify';
import { calculateAdult } from '../../../../pages/user/stays/stay-search/stay-search-service';

interface IStayBooking {
  cleanSelection?: boolean;
  hidecategories?: boolean;
  searchStays?: Function;
}

function StayBookingComp({cleanSelection, hidecategories, searchStays}: IStayBooking) {

  const [combinedStayData, setCombinedStayData] = useState<ICombinedStaySearchData>(
    cleanSelection ? generateNewCombinedStayData() : storedCombinedStayData
  );

  const [initialized, setInitialized] = useState(false);
  const [stayType, setStayType] = useState<'return' | 'one-way'>(combinedStayData.stayType);
  const [location, setLocation] = useState<ILocationData | undefined>(combinedStayData.location);
  const [date, setDate] = useState<IDateData | undefined>(combinedStayData.date);
  const [luggageCounts, setLuggageCounts] = useState<ILaugageData | undefined>(combinedStayData.luggageCounts);
  const [stayClass, setStayClass] = useState<IStayClassData | undefined>(combinedStayData.stayClass);

  const [canProceed, setCanProceed] = useState(true);
  const [errorListString, setErrorListString] = useState('');
  const [showPromoCode, setShowPromoCode] = useState(false);

  const updateStayType = (type: 'return' | 'one-way') => {
    setStayType(type);
  }

  const updateLocation = (locationObj: {address: string, geolocation: string}) => {
    setLocation(locationObj);
  }

  const updateDate = (dateObj: { startDate: Date | undefined, endDate: Date | undefined, key: string| undefined }) => {
    setDate(dateObj);
  }
  const updateLuggageCounts = (counts: {checkedInCount: number, handLuggageCount: number}) => {
    setLuggageCounts(counts);
  }
  const updateStayClass = (counts: any) => {
    setStayClass(counts);
  }

  const searchForStays = (values: FormikValues, controls: any) => {
    if(!canProceed) {
      toast.error('Please complete stay details: ' + errorListString);
      return;
    }
    if (searchStays){
      searchStays(false);
    }
  }

  const validate = (values: FormikValues) => {
    const errors: any = {};
    if(showPromoCode) {
      if(!values.code) {
        errors.code = 'Enter a valid promo code';
      }
    } else {
      // errors.code = 
    }
    return errors;
  }

  const compileCombinedData = () => {
    const tempCombination = {
      location: location?.address ? location : undefined ,
      date: date?.startDate ? date : undefined,
      luggageCounts: (luggageCounts?.checkedInCount || luggageCounts?.handLuggageCount) ? luggageCounts : undefined,
      stayClass: stayClass?.allPassengerCount ? stayClass: undefined,
      stayType: stayType,
    }
    const errors: string[] = [];
    setCombinedStayData(tempCombination);
    if (tempCombination.location && tempCombination.date && calculateAdult(tempCombination.stayClass, true) && tempCombination.luggageCounts) {
      setCanProceed(true);
      updateCombinedStayData(tempCombination);
    } else {
      if(!tempCombination.location) {
        errors.push('Location Information')
      }
      if(!tempCombination.date) {
        errors.push('Date Information')
      }
      if(!calculateAdult(tempCombination.stayClass, true)) {
        errors.push('Passenger Information')
      }
      if(!tempCombination.luggageCounts) {
        errors.push('Luggage Information')
      }
      setCanProceed(false);
      updateCombinedStayData(generateNewCombinedStayData());
    }
    setErrorListString(errors.join(', '))
  }

  useEffect(() => {
    setTimeout(() => setInitialized(true), 1000);
  }, [cleanSelection, hidecategories])

  useEffect(() => {
    compileCombinedData();
  }, [location, date, luggageCounts, stayClass]);

  return (
    <div className='stay-booking-comp'>
      <div className={'stay-type-selector' + (hidecategories ? '' : ' floated-type')}>
        {/* <div onClick={() => updateStayType('multi')}>
          <input
            type="radio"
            value={'multi'}
            name='stay-type'
            checked={stayType === 'multi'}
            onChange={() => updateStayType('multi')}
          />
          <span>Multi city</span>
        </div> */}
        {/* <div onClick={() => updateStayType('return')}>
          <input
            type="radio"
            value={'return'}
            // defaultChecked
            name='stay-type'
            checked={stayType === 'return'}
            onChange={() => updateStayType('return')}
          />
          <span>Return</span>
        </div>
        <div onClick={() => updateStayType('one-way')}>
          <input
            type="radio"
            value={'one-way'}
            name='stay-type'
            checked={stayType === 'one-way'}
            onChange={() => updateStayType('one-way')}
          />
          <span>One way</span>
        </div> */}
        <button className='purple-button purple-shadow'>List Properties</button>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-sm-6'>
          <LocationSelectionComp location={location} setLocation={updateLocation} />
        </div>
        <div className='col-lg-3 col-sm-6'>
          <LuggageSelectionComp luggageCounts={luggageCounts} setLuggageCounts={updateLuggageCounts} />
        </div>
        <div className='col-lg-5 col-sm-12'>
          <DateSelectionComp date={date} setDate={updateDate} />
        </div>
        {/* <div className='col-lg-3 col-sm-6'>
          <FlightClassSelectionComp flightClass={stayClass} setFlightClass={updateStayClass} />
        </div> */}
      </div>
      <Formik
        initialValues={{code: ''}}
        validate={validate}
        onSubmit={(values, controls) => searchForStays(values, controls)}
      >
        {
          (formProps: FormikProps<{code: string}>) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
              setValues,
            } = formProps;
            return (
              <form action="" onSubmit={handleSubmit} className={canProceed ? '' : 'deactivated-view'}>
                <div className='proceed-sect'>
                  {showPromoCode && 
                    <div className={'promo-code-sect ' + (errors.code && touched.code ? "im-error" : "")}>
                      <input
                        type="text"
                        name="code"
                        id="code"
                        value={values.code}
                        onChange={handleChange}
                        placeholder="Enter promo code"
                      />
                      <div className="center-info" onClick={(ev) => {setShowPromoCode(false); setValues({code: ' '})}}>
                        <FontAwesomeIcon className='close-code' icon={'times'} />
                      </div>
                    </div>
                  }
                  {!showPromoCode && 
                    <p className='mb-0 orange-tx f700 reduced-soft clickable px-3' onClick={(ev) => {setShowPromoCode(true); setValues({code: ''})}}>
                      <span><FontAwesomeIcon icon={'plus'} className='reduced-soft' /> </span>
                      Add Promo Code
                    </p>
                  }
                  <button className='stay-button my-2'>
                    <FontAwesomeIcon className='reduced-soft' icon={'paper-plane'} /> Show Stays
                  </button>
                </div>
                {errors.code && touched.code && <p className='booking-error'>{errors.code}</p>}
              </form>
            )
          }
        }
      </Formik>
      
    </div>
  );
}

export default StayBookingComp;
