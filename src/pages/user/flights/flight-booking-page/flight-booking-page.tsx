import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import MiniLoader from '../../../../components/block-components/mini-loader/mini-loader';
import './flight-booking-page.scss';

function FlightBookingPage(props: any) {

  useEffect(() => {
    setTimeout(() => {
      toast.error('Failed to load Flight details');
      toast.error('Field Validation error');
    }, 5000);
    setTimeout(() => {
      toast.error('Detail reload Failed');
      toast.error('Validation Failed');
    }, 15000);
  }, [props])
  
  return (
    <div className='flight-booking-page loader-holder'>
      <MiniLoader />
    </div>
  );
}

export default FlightBookingPage;
