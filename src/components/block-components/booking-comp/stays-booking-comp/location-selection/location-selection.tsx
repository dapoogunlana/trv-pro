import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, FormikValues } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getAirport } from '../../../../../services/actions-reducers/airport-list';
import { iStoreState } from '../../../../../services/constants/interfaces/store-schemas';
import { clipToLength } from '../../../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../../../services/utils/request';
import TypeSuggestComponent from '../../../../base-components/type-suggest/type-suggest';
import AppPopup from '../../../app-popup/app-popup';
import './location-selection.scss';

interface ILocationSelection {
  address: any,
  geolocation: any
}
interface iLocationProps {
  setLocation: Function;
  componentState?: any;
  location?: ILocationSelection;
}

function LocationSelectionComp(props: iLocationProps) {

  const [showPopup, setShowPopup] = useState<0 | 1 | 2>(0);
  // const [airportList, setAirportList] = useState<any[]>([]);
  const [location, setLocation] = useState<ILocationSelection>(props.location || {address: undefined, geolocation: undefined});
  const [confirmedLocation, setConfirmedLocation] = useState<ILocationSelection>(props.location || {address: undefined, geolocation: undefined});

  const airportList = useSelector((state: iStoreState) => state.airportList);

  const toggleShowPopup = (status?: 0 | 1 | 2) => {
    setShowPopup(status || 0);
  }

  const validate = (values: FormikValues) => {}

  const submitLocations = (values: FormikValues, controls: any) => {}

  const updateSelection = (data: any, type: 'address' | 'geolocation') => {
    const currentLocation = {...location};
    if(type === 'address') {
      currentLocation.address = data;
    } else {
      currentLocation.geolocation = data;
    }
    console.log({data, type})
    setLocation(currentLocation);
    setConfirmedLocation({address: undefined, geolocation: undefined});
  }

  const confirmLocation = () => {
    setConfirmedLocation(location);
    toggleShowPopup(1);
  }

  useEffect(() => {
    // getAirportList();
  }, [props.componentState])

  useEffect(() => {
    if(location.address) {
      setConfirmedLocation(location);
      if(showPopup === 2){
        toggleShowPopup(1);
      }
    }
  }, [location])
  useEffect(() => {
    props.setLocation(confirmedLocation);
  }, [confirmedLocation])

  return (
    <div className='pt-3 pb-2'>
      <AppPopup
        switch={
          <div className='selector2' onClick={() => toggleShowPopup(2)} title={`${confirmedLocation?.address?.name || '...'}`}>
            <div className='label'><FontAwesomeIcon icon={'map-marker-alt'} className='fainter-tx' /> Location</div>
            <p className='mb-0'>
              {clipToLength(confirmedLocation?.address?.name, 10) || '...'}
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
            <div className='col-12'>
              <div className='location-selection'>
                <p className='reduced mb-0 mt-2'>Location</p>
                <TypeSuggestComponent
                  data={airportList}
                  typePlaceholder='Enter city name'
                  floatOption initialValue={location.address?.name}
                  selected={(data: any) => updateSelection(data, 'address')}
                  subKey='name'
                  subKey2='city'
                  listLength={20}
                />
              </div>
            </div>
          </div>
          {/* {
            location.address &&
            <div className='pt-3 text-center'>
              <button className='confirm-location-button' onClick={confirmLocation}>Confirm Location</button>
            </div>
          } */}
        </div>
      </AppPopup>
    </div>
  );
}

export default LocationSelectionComp;
