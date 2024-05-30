import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import MiniLoader from '../../../../../components/block-components/mini-loader/mini-loader';
import { sendRequest } from '../../../../../services/utils/request';
import './flight-booking-records.scss';

function FlightBookingRecords(props: any) {

  const [flightRecords, setFlightRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState<0 | 1 | 2>(0);

  const getFlightBookingRecords = () => {
    setLoading(0);
    
    sendRequest(
      {
        url: "flight/confirm-price/",
        method: "GET",
      },
      (res: any) => {
        setFlightRecords(Array.isArray(res.data) ? res.data : []);
        setLoading(1);
      },
      (err: any) => {
        setLoading(1);
      }
    );
  };

  useEffect(() => {
    getFlightBookingRecords();
  }, [props]);
  
  return (
    <div className='flight-booking-records'>
    <div className='flight-list'>
      {
        loading === 0 &&
        <div className='loader-holder-40'>
          <MiniLoader />
        </div>
      }
      {
        loading === 2 &&
        <div className='loader-holder-40'>
          <div className='error-box'>
            <h3>An error occured while loading</h3>
            <button className='my-2 mx-2 confirmation-button' onClick={getFlightBookingRecords}>Reload</button>
          </div>
        </div>
      }
      {
        loading === 1 &&
        <>
          <div className='detail-card'>
            <div className='outer-spread'>
              <div className='inner-spread'>
                <div className='image-holder'>
                  <div className='airline-image'></div>
                </div>
                <div className='flight-time'>
                  <div className=''>
                    <p className='mb-0 reduced-x faint-tx'>Newark(EWR)</p>
                    <h5 className='mb-0 f600'>12:00 pm</h5>
                  </div>
                  <FontAwesomeIcon icon={'minus'} className='increased px-3' />
                  <div className=''>
                    <p className='mb-0 reduced-x faint-tx'>Newark(EWR)</p>
                    <h5 className='mb-0 f600'>12:00 pm</h5>
                  </div>
                </div>
                <div className='splitter'></div>
                <div className='spread-info'>
                  <div className='space-right'>
                    <div className='description-grid-40 pb-3'>
                      <div className='icon-holder'>
                        <FontAwesomeIcon icon={'calendar-days'} className='icon' />
                      </div>
                      <div className='space-left'>
                        <p className='mb-0 reduced-xl faint-tx reduce-height'>Date</p>
                        <p className='mb-0 reduced-soft number-medium'>12-11-22</p>
                      </div>
                    </div>
                    <div className='description-grid-40 '>
                      <div className='icon-holder'>
                        <FontAwesomeIcon icon={'clock'} className='icon' />
                      </div>
                      <div className='space-left'>
                        <p className='mb-0 reduced-xl faint-tx reduce-height'>Flight time</p>
                        <p className='mb-0 reduced-soft number-medium'>12:30 pm</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='description-grid-40 pb-3'>
                      <div className='icon-holder'>
                        <FontAwesomeIcon icon={'door-closed'} className='icon' />
                      </div>
                      <div className='space-left'>
                        <p className='mb-0 reduced-xl faint-tx reduce-height'>Gate</p>
                        <p className='mb-0 reduced-soft number-medium'>A12</p>
                      </div>
                    </div>
                    <div className='description-grid-40'>
                      <div className='icon-holder'>
                        <FontAwesomeIcon icon={'chair'} className='icon' />
                      </div>
                      <div className='space-left'>
                        <p className='mb-0 reduced-xl faint-tx reduce-height'>Seat no.</p>
                        <p className='mb-0 reduced-soft number-medium'>128</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center py-3'>
                <button className='purple-button purple-shadow'>Download Ticket</button>
              </div>
            </div>
          </div>
          {
            flightRecords.length === 0 &&
            <div className='detail-card py-5'>
              <p className='mb-0 increased'>You have no flight Records yet</p>
            </div>
          }
        </>
      }
    </div>
  </div>
  );
}

export default FlightBookingRecords;
