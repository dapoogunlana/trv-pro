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

interface iDateProps {
  setDate: Function;
  multiple?: boolean;
}

function DateSelectionComp(props: iDateProps) {

  const [showPopup, setShowPopup] = useState<0 | 1 | 2>(0);
  const [selectionRange, setSelectionRange] = useState({ startDate: new Date(), endDate: new Date(), key: 'selection' });
  const [confirmedSelectionRange, setConfirmedSelectionRange] = useState({ startDate: undefined, endDate: undefined, key: 'selection' });
  const [selectionDate, setSelectionDate] = useState();
  const [activeDate, setActiveDate] = useState(false);

  const toggleShowPopup = (status?: 0 | 1 | 2) => {
    setShowPopup(status || 0);
  }
  const monthDisplayCount = window.innerWidth > 991 ? 2 : 1;
  const handleSelect = (date: any) => {
    setSelectionDate(date);
  }
  const handleRangeSelect = (ranges: any) => {
    setSelectionRange(ranges.selection)
    // console.log({range: ranges.selection?.endDate?.toISOString()?.split('T')[0]});
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
  }

  useEffect(() => {
    resetDates();
  }, [props.multiple])

  useEffect(() => {
    if(props.multiple) {
      props.setDate(confirmedSelectionRange);
    } else {
      props.setDate(selectionDate);
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
          </div>
        </div>
      </AppPopup>
    </div>
  );
}

export default DateSelectionComp;
