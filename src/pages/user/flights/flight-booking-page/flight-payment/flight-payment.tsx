import React, { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from 'react-toastify';
import MiniLoader from '../../../../../components/block-components/mini-loader/mini-loader';
import { apiLinks } from '../../../../../config/environment';
import { PaystackButtonProps } from '../../../../../services/constants/interfaces/utility-schemas';
import { IFlightPaymentData } from '../flight-booking-service';
import './flight-payment.scss';

interface IFlightProps {
  bookingData: IFlightPaymentData
}

function FlightPayment(props: IFlightProps) {

  const completePaymentModal = (response: any) => {
    console.log({response})
    setProcessing(true);
  }
  const closePaymentModal = (error: any) => {
    setProcessing(false);
    console.log({error})
  }

  const [processing, setProcessing] = useState(false);
  const [paystackProps, setPaystackProps] = useState<PaystackButtonProps>({
    email: props.bookingData.email,
    amount: props.bookingData.amount,
    publicKey: apiLinks.paystackPublicKey,
    text: 'Pay Now',
    metadata: {
      custom_fields: [],
      flight_id: props.bookingData.flight_id
    },
    onSuccess: completePaymentModal,
    onClose: closePaymentModal,
  });
const mabul = {
  flight_id: "ama_b8bd9d44-ccbc-44f7-8c88-9a962c364784",
  reference: "T505560676826318",
  transaction: "3816568449",
  time: 1716417103295,
}

  useEffect(() => {
    // setTimeout(() => {
    //   toast.error('Failed to load Flight details');
    //   toast.error('Field Validation error');
    // }, 5000);
    // setTimeout(() => {
    //   toast.error('Detail reload Failed');
    //   toast.error('Validation Failed');
    // }, 15000);
  }, [props])
  
  return (
    <div className='flight-payment loader-holder'>
      <div className='center-info-col pb-4 max300'>
        {
          processing &&
          <div className='center-info-col pb-4 max300'>
            <div><MiniLoader /></div>
            <p className='text-center black-tx mb-0'>
              Your payment has been confirmed and is been saved, please wait..
            </p>
          </div>
        }
        <PaystackButton {...paystackProps} className={'paystack-button' + (processing ? ' deactivated' : '' )} />
      </div>
    </div>
  );
}

export default FlightPayment;
