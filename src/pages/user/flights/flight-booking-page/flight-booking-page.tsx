import React, { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from 'react-toastify';
import MiniLoader from '../../../../components/block-components/mini-loader/mini-loader';
import { apiLinks } from '../../../../config/environment';
import { PaystackButtonProps } from '../../../../services/constants/interfaces/utility-schemas';
import './flight-booking-page.scss';
import { IFlightPaymentData } from './flight-booking-service';
import FlightPayment from './flight-payment/flight-payment';

function FlightBookingPage(props: any) {

  const [processing, setProcessing] = useState(false);
  const [openPayment, setOpenPayment] = useState(true);
  const [bookingData, setBookingData] = useState<IFlightPaymentData>({
    email: 'dapo@gmail.ng',
    amount: 125000,
    flight_id: 'ama_kut_kut',
  });

  useEffect(() => {
  }, [props])
  
  return (
    <div className='flight-booking-page loader-holder'>
      {openPayment && <FlightPayment bookingData={bookingData} />}
    </div>
  );
}

export default FlightBookingPage;
