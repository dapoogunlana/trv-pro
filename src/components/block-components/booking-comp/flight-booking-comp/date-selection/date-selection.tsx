import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, FormikValues } from 'formik';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { clipToLength, formatDate, formatDateMini } from '../../../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../../../services/utils/request';
import TypeSuggestComponent from '../../../../base-components/type-suggest/type-suggest';
import AppPopup from '../../../app-popup/app-popup';
import { DateRangePicker, Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './date-selection.scss';
import { IDateData, storedCombinedFlightData } from '../../../../../services/utils/flight-booking-service';

interface iDateProps {
  setDate: Function;
  multiple?: boolean;
  date?: IDateData
}

function DateSelectionComp(props: iDateProps) {

  const [showPopup, setShowPopup] = useState<0 | 1 | 2>(0);
  const [initialized, setInitialized] = useState(false)
  const [selectionRange, setSelectionRange] = useState<IDateData>(props.date?.startDate ? props.date : { startDate: new Date(), endDate: new Date(), key: 'selection' });
  const [confirmedSelectionRange, setConfirmedSelectionRange] = useState<IDateData>(props.date || { startDate: undefined, endDate: undefined, key: 'selection' });
  const [selectionDate, setSelectionDate] = useState(props.date?.startDate || undefined);
  const [activeDate, setActiveDate] = useState(false);

  const toggleShowPopup = (status?: 0 | 1 | 2) => {
    setShowPopup(status || 0);
  }
  const monthDisplayCount = window.innerWidth > 991 ? 2 : 1;
  const handleSelect = (date: any) => {
    setSelectionDate(date);
    setActiveDate(date ? true : false);
  }
  const handleRangeSelect = (ranges: any) => {
    setSelectionRange(ranges.selection)
    setActiveDate(ranges.selection.startDate !== ranges.selection.endDate);
    if(ranges.selection.startDate !== ranges.selection.endDate) {
      setConfirmedSelectionRange(ranges.selection);
    } else {
      setConfirmedSelectionRange({ startDate: undefined, endDate: undefined, key: 'selection' });
    }
  }
  const resetDates = () => {
    setSelectionRange({ startDate: new Date(), endDate: new Date(), key: 'selection' });
    setConfirmedSelectionRange({ startDate: undefined, endDate: undefined, key: 'selection' });
    setSelectionDate(undefined);
    setActiveDate(false);
  }
  
  const confirmDate = () => {
    toggleShowPopup(1);
  }

  useEffect(() => {
    setTimeout(() => {
      setInitialized(true);
    }, 1000);
  })
  useEffect(() => {
    if(initialized){
      resetDates();
      setActiveDate(false);
    }
  }, [props.multiple])

  useEffect(() => {
    if(initialized){
      if(props.multiple) {
        props.setDate(confirmedSelectionRange);
      } else {
        props.setDate({startDate: selectionDate});
      }
    }
  }, [confirmedSelectionRange, selectionDate])

  return (
    <div className='pt-3 pb-2'>
      <AppPopup
        switch={
          <div className='selector' 
            onClick={() => toggleShowPopup(2)} 
            title={
              props.multiple ?
              `${formatDate(confirmedSelectionRange.startDate, '...')} - ${formatDate(confirmedSelectionRange.endDate, '...')}` :
              formatDate(selectionDate, '...')
            }
          >
            <div className='label'>
              {
                props.multiple ?
                <span>Departure - Return</span> :
                <span>Departure</span>
              }
            </div>
            <p className='mb-0'>
              {
                props.multiple ?
                <span>{formatDateMini(confirmedSelectionRange.startDate, '...')} - {formatDateMini(confirmedSelectionRange.endDate, '...')}</span> :
                formatDateMini(selectionDate, '...')
              }
            </p>
            <FontAwesomeIcon icon={'calendar-alt'} className='fainter-tx' />
          </div>
        }
        switchClass='w100-flat'
        showPopup={showPopup}
        onClosePopup={() => toggleShowPopup()}
      >
        <div className='date-case'>
          {
            props.multiple ?
            <div className='range-holder'>
              <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={handleRangeSelect}
                  months={monthDisplayCount}
                  direction="horizontal"
              />
            </div> :
            <div className='single-date-holder'>
              <Calendar
                  date={selectionDate}
                  onChange={handleSelect}
              />
            </div>
          }
          <div className='text-center'>
            <button className='reset-button' onClick={resetDates}>Reset Date</button>
            {
              activeDate &&
              <>
                &nbsp; &nbsp; 
                <button className='reset-button' onClick={confirmDate}>Ok</button>
              </>
            }
          </div>
        </div>
      </AppPopup>
    </div>
  );
}

export default DateSelectionComp;
