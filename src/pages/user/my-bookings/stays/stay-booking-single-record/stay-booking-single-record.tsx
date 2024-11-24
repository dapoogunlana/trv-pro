import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { resourceLinks } from '../../../../../config/environment';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { sendRequest } from '../../../../../services/utils/request';
import { iBookedAppartmentInfo, iFullShortletInfo } from '../../../../host/add-stay/add-shortlet/add-shortlet-data';
import './stay-booking-single-record.scss';

function StayBookingSingleRecord(props: any) {
  const stayId = useParams().id || '';
  const [loading, setLoading] = useState(0);
  const [stayDetails, setStayDetails] = useState<iBookedAppartmentInfo>();
  const navigate = useNavigate();

  const getStayDetails = () => {
    setLoading(0);
    
    sendRequest(
      {
        url: "user-profile/single-shortlet-booking/" + stayId,
        method: "GET",
      },
      (res: any) => {
        const refinedData = res.data;
        refinedData.images = res.data.apartment_img.split(', ').map((image: string) => resourceLinks.shortletImages + image);
        setStayDetails(refinedData);
        console.log({refinedData})
        setLoading(1);
      },
      (err: any) => {
        setLoading(2);
      }
    );
  };

  const goToPreview = () => {
    navigate(`/${routeConstants.stayPreview}/${stayDetails?.apartment_id}`);
  }
  const returnToBookings = () => {
    navigate(`/${routeConstants.myBookings}/stay`);
  }
  const goHome = () => {
    navigate(`/`);
  }

  useEffect(() => {
    getStayDetails();
    window.scrollTo(0, 0);
  }, [props]);
  
  return (
    <div className='stay-tickets'>
    <div className='preview-sect'>
      <div className='spread-info-web pt-3 pb-2'>
        <h5>
          <span className='orange-tx'>{stayDetails?.apartment_country} </span> <span className='px-2 fainter-tx'> &gt; </span>
          <span className='orange-tx'> {stayDetails?.apartment_state} </span> <span className='px-2 fainter-tx'> &gt; </span>
          <span className='increased-soft'> {stayDetails?.apartment_name}</span>
        </h5>
        <h6 className='purple-tx clickable' onClick={goToPreview}> <FontAwesomeIcon icon={'chevron-left'} /> View Stay Details</h6>
      </div>

      <div className='spread-info-web pb-3'></div>

      <div>
        <div className='row pt-3 pb-4'>
          <div className='col-lg-6 spread-col py-3'>
            <div className='text'>
              <div className='spread-info-front'>
                <div className='orange-box'></div>
                <h5 className='mb-0 f700'>Reservation Status: {stayDetails?.status}</h5>
              </div>
              <p></p>
              {
                stayDetails?.status === 'pending' &&
                <p>
                  Your booking for Ceasar Luxury Apartments is successful. We would automatically debit you from your 
                  chosen payment option once the host confirms availability of the stay within 24 hours.
                  <br /><br />
                  We would notify you on the progress of your booking via email and in-app notification. Alternatively, 
                  you can follow up through the ‘my bookings’ section.
                </p>
              }
              {
                stayDetails?.status === '' &&
                <p>
                  Your booking for Ceasar Luxury Apartments is successful. We would automatically debit you from your 
                  chosen payment option once the host confirms availability of the stay within 24 hours.
                  <br /><br />
                  We would notify you on the progress of your booking via email and in-app notification. Alternatively, 
                  you can follow up through the ‘my bookings’ section.
                </p>
              }
            </div>
            <div className='action'>
              <button className='booking-button' onClick={returnToBookings}>My Bookings</button>
              <span></span>
              <button className='home-button' onClick={goHome}>Home</button>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5 py-3'>
            <div className='row auto-scroll max-h60'>
              {stayDetails?.images?.map((image, index) => (
                <div className='col-6 px-1' key={index}>
                  <div className='imh pb-2'>
                    <img src={image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default StayBookingSingleRecord;
