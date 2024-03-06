import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, FormikValues } from 'formik';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { clipToLength } from '../../../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../../../services/utils/request';
import TypeSuggestComponent from '../../../../base-components/type-suggest/type-suggest';
import AppPopup from '../../../app-popup/app-popup';
import './location-selection.scss';

interface iLocationProps {
  setLocation: Function
  componentState?: any;
}

function LocationSelectionComp(props: iLocationProps) {

  const [showPopup, setShowPopup] = useState<0 | 1 | 2>(0);
  const [airportList, setAirportList] = useState<any[]>([]);
  const [location, setLocation] = useState<{from: any, to: any}>({from: undefined, to: undefined});
  const [confirmedLocation, setConfirmedLocation] = useState<{from: any, to: any}>({from: undefined, to: undefined});

  const toggleShowPopup = (status?: 0 | 1 | 2) => {
    setShowPopup(status || 0);
  }

  const validate = (values: FormikValues) => {}

  const submitLocations = (values: FormikValues, controls: any) => {}

  const getAirportList = () => {
      sendRequest({
          url: 'flight/fetch-airports',
          method: 'GET',
      }, (res: any) => {
          setAirportList(res.data);
      }, (err: any) => {});
  }

  const updateSelection = (data: any, type: 'from' | 'to') => {
    const currentLocation = {...location};
    if(type === 'from') {
      currentLocation.from = data;
    } else {
      currentLocation.to = data;
    }
    setLocation(currentLocation);
    setConfirmedLocation({from: undefined, to: undefined});
  }

  const confirmLocation = () => {
    setConfirmedLocation(location);
    toggleShowPopup(1);
  }

  useEffect(() => {
    getAirportList();
  }, [props.componentState])

  useEffect(() => {
    props.setLocation(confirmedLocation);
  }, [confirmedLocation])

  return (
    <div className='pt-3 pb-2'>
      <AppPopup
        switch={
          <div className='selector' onClick={() => toggleShowPopup(2)} title={`${confirmedLocation.from?.name || '...'} - ${confirmedLocation.to?.name || '...'}`}>
            <div className='label'>From - To</div>
            <p className='mb-0'>
              {clipToLength(confirmedLocation.from?.name, 10) || '...'} - {clipToLength(confirmedLocation.to?.name, 10) || '...'}
            </p>
            <FontAwesomeIcon icon={'arrow-right-arrow-left'} />
          </div>
        }
        switchClass='w100-flat'
        showPopup={showPopup}
        onClosePopup={() => toggleShowPopup()}
      >
        <div className='location-case'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='location-selection'>
                <p className='reduced mb-0 mt-2'>Take off</p>
                <TypeSuggestComponent
                  data={airportList}
                  typePlaceholder='Enter Take off'
                  floatOption initialValue={location.from?.name}
                  selected={(data: any) => updateSelection(data, 'from')}
                  subKey='name'
                  listLength={20}
                />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='location-selection'>
                <p className='reduced mb-0 mt-2'>Destination</p>
                <TypeSuggestComponent
                  data={airportList}
                  typePlaceholder='Enter Destination'
                  floatOption initialValue={location.to?.name}
                  selected={(data: any) => updateSelection(data, 'to')}
                  subKey='name'
                  listLength={20}
                />
              </div>
            </div>
          </div>
          {
            location.from && location.to &&
            <div className='pt-3 text-center'>
              <button className='confirm-location-button' onClick={confirmLocation}>Confirm Location</button>
            </div>
          }
        </div>
      </AppPopup>
    </div>
  );
}

export default LocationSelectionComp;
