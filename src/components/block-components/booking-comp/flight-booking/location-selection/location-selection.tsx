import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, FormikValues } from 'formik';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { sendRequest } from '../../../../../services/utils/request';
import AppPopup from '../../../app-popup/app-popup';
import './location-selection.scss';

interface iLocationProps {
  setLocation: Function
}

function LocationSelectionComp(props: iLocationProps) {

  const [showPopup, setShowPopup] = useState<0 | 1 | 2>(0);
  const [airportList, setAirportList] = useState<any[]>([]);

  const toggleShowPopup = (status?: 0 | 1 | 2) => {
    setShowPopup(status || 0);
  }

  const validate = (values: FormikValues) => {}

  const submitLocations = (values: FormikValues, controls: any) => {}

  const getAirportList = () => {
    console.log({one: 'One 1'});
      sendRequest({
          url: 'flight/fetch-airports',
          method: 'GET',
      }, (res: any) => {
          setAirportList(res);
      }, (err: any) => {});
  }

  useEffect(() => {
    getAirportList();
  }, [props])

  return (
    <div className='pt-3 pb-2'>
      <AppPopup
        switch={
          <div className='selector' onClick={() => toggleShowPopup(2)}>
            <div className='label'>From - To</div>
            <p className='mb-0'>{'walt'} - {'walt'}</p>
            <FontAwesomeIcon icon={'arrow-right-arrow-left'} />
          </div>
        }
        switchClass='w100-flat'
        showPopup={showPopup}
        onClosePopup={() => toggleShowPopup()}
      >
        <Formik
          initialValues={{takeoff: '', destination: ''}}
          validate={values => validate(values)}
          onSubmit={(values, controls) => submitLocations(values, controls)}
        >
          {
            (formProps) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleSubmit,
              } = formProps;
              return <form action="" onSubmit={handleSubmit}>
                <div>
                  <select
                    name="takeoff"
                    id="takeoff"

                  ></select>
                </div>
              </form>
            }
          }
        </Formik>
        <h1>Pangolo</h1>
        <button onClick={() => toggleShowPopup(1)}>Close Popup</button>
      </AppPopup>
    </div>
  );
}

export default LocationSelectionComp;
