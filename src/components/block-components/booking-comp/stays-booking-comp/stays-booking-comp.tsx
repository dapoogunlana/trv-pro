import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Formik, FormikProps, FormikValues } from "formik";
import AppPopup from '../../app-popup/app-popup';
import DateSelectionComp from './date-selection/date-selection';
import './stays-booking-comp.scss';
import LocationSelectionComp from './location-selection/location-selection';
import {
  generateNewCombinedStayData,
  ICombinedStaySearchData,
  IDateData,
  ILocationData,
  storedCombinedStayData,
  updateCombinedStayData,
} from '../../../../services/utils/stay-booking-service';
import { toast } from 'react-toastify';

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
  const [location, setLocation] = useState<ILocationData | undefined>(combinedStayData.location);
  const [date, setDate] = useState<IDateData | undefined>(combinedStayData.date);

  const [canProceed, setCanProceed] = useState(true);
  const [errorListString, setErrorListString] = useState('');
  const [showPromoCode, setShowPromoCode] = useState(false);

  const updateLocation = (locationObj: {address: string, geolocation: string}) => {
    setLocation(locationObj);
  }

  const updateDate = (dateObj: { startDate: Date | undefined, endDate: Date | undefined, key: string| undefined }) => {
    setDate(dateObj);
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
    }
    const errors: string[] = [];
    setCombinedStayData(tempCombination);
    if (tempCombination.location && tempCombination.date) {
      setCanProceed(true);
      updateCombinedStayData(tempCombination);
    } else {
      if(!tempCombination.location) {
        errors.push('Location Information')
      }
      if(!tempCombination.date) {
        errors.push('Date Information')
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
  }, [location, date]);

  return (
    <div className='stay-booking-comp'>
      <div className={'stay-type-selector' + (hidecategories ? '' : ' floated-type')}>
        <button className='purple-button purple-shadow'>List Properties</button>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <LocationSelectionComp location={location} setLocation={updateLocation} />
        </div>
        {/* <div className='col-lg-3 col-sm-6'>
          <LuggageSelectionComp luggageCounts={luggageCounts} setLuggageCounts={updateLuggageCounts} />
        </div> */}
        <div className='col-md-6 col-sm-12'>
          <DateSelectionComp date={date} setDate={updateDate} />
        </div>
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
                  <button className='stay-button my-2' type='submit'>
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
