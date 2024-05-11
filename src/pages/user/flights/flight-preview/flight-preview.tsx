import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FlightFeatureImage1, FlightFeatureImage2, FlightFeatureImage3, FlightFeatureImage4, FlightPreviwImg, PlaneTripIcon } from '../../../../assets/images';
import MiniLoader from '../../../../components/block-components/mini-loader/mini-loader';
import { routeConstants } from '../../../../services/constants/route-constants';
import { formatDate, formatNumber } from '../../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../../services/utils/request';
import { formatTime, getFlightToAndFrom, sampleFlights } from '../flight-search/flight-search-service';
import FlightImageSlideSect from './flight-image-slide/flight-image-slide';
import './flight-preview.scss';

function FlightPreviewPage(props: any) {

  const navigate = useNavigate();
  const flightId = useParams().id || '';
  const [loading, setLoading] = useState(false);
  const [flightDetails, setFlightDetails] = useState<any>(
    {outbound: []}
    // sampleFlights[0]
    );

  const flightFeatureImageList = [FlightFeatureImage1, FlightFeatureImage2, FlightFeatureImage3, FlightFeatureImage4];


  const getFlightDetails = () => {
    setLoading(true);
    
    sendRequest(
      {
        url: "flight/confirm-price/" + flightId,
        method: "GET",
      },
      (res: any) => {
        setFlightDetails(res.data);
        setLoading(false);
      },
      (err: any) => {}
    );
  };

  const bookFlight = (id: string) => {
    navigate(`/${routeConstants.flightBooking}/${id}`)
  }

  useEffect(() => {
    getFlightDetails();
  }, [props])
  
  return (
    <>
      {
        loading ?
        <div className='loader-holder'>
          <MiniLoader />
        </div>
        :
        <div className='flight-preview'>
          <div className='preview-sect'>
            <h5>
              <span className='orange-tx'>{getFlightToAndFrom(flightDetails).from} </span> <span className='px-2 fainter-tx'> &gt; </span>
              <span className='orange-tx'> {getFlightToAndFrom(flightDetails).to} </span> <span className='px-2 fainter-tx'> &gt; </span>
              <span className='increased-soft'> {flightDetails.outbound[0]?.airline_details?.name}</span>
            </h5>
            <div className='spread-info-web pt-3 pb-2'>
              <h2 className='f700'>{flightDetails.outbound[0]?.airline_details?.name} {flightDetails.fare_basis}</h2>
              <h2 className='pt-2 orange-tx increased-x number-bold'>
                <span className='reduced-im'>{flightDetails.currency}</span> {formatNumber(flightDetails.pricing?.payable)}
              </h2>
            </div>

            <div className='spread-info-web pb-3'>
              <p className='faint-tx py-2 mb-0'>
                <FontAwesomeIcon icon={'map-marker'} /> &nbsp;
                {flightDetails.outbound[0]?.airport_from_details?.country}
              </p>
              <div className='description-grid-50'>
                <div className='center-info book-flight'>
                  <FontAwesomeIcon icon={'heart'} className='save-icon' />
                </div>
                <div className='pl-3'>
                  <button className='flight-button' onClick={() => bookFlight(flightDetails.id)}>Book Flight</button>
                </div>
              </div>
            </div>

            <div data-aos='zoom-in' data-aos-delay="400">
              <div className='preview-image'>
                <img src={FlightPreviwImg} alt="" />
              </div>
              <div className='spread-info-web pt-5'>
                <h5 className='f600 increased sentence-case'>basic {flightDetails.outbound[0]?.cabin_type?.toLocaleLowerCase()} features</h5>
                <div className='spread-info'>
                  <span className='cabin-type-indicator'>
                    <input type="checkbox" 
                      checked={flightDetails.outbound[0]?.cabin_type.toLocaleLowerCase() === 'economy'} 
                      onChange={(e) => e.preventDefault()}
                      name="" 
                      id="" 
                    />
                    Economy
                  </span>
                  <span className='cabin-type-indicator'>
                    <input type="checkbox" 
                      checked={flightDetails.outbound[0]?.cabin_type.toLocaleLowerCase() === 'first class'} 
                      onChange={(e) => e.preventDefault()}
                      name="" 
                      id="" 
                    />
                    First Class
                  </span>
                  <span className='cabin-type-indicator'>
                    <input type="checkbox" 
                      checked={flightDetails.outbound[0]?.cabin_type.toLocaleLowerCase() === 'business class'} 
                      onChange={(e) => e.preventDefault()}
                      name="" 
                      id="" 
                    />
                    Business Class
                  </span>
                </div>
              </div>
              <FlightImageSlideSect imageList={[...flightFeatureImageList, ...flightFeatureImageList, ...flightFeatureImageList]} />
            </div>
            <div className='policy-card mb-4'>
              <h5 className='f600 increased'>{flightDetails.outbound[0]?.airline_details?.name} Airline Policies</h5>
              <p className='text-center mb-1'>No policies available</p>
            </div>
            {
              flightDetails.outbound.map((trip: any, tripIndex: number) => (
                <div className='mb-4 trip-card' key={tripIndex}>
                  <div className='spread-info pb-i'>
                    <p className='f400 mb-0 number-medium'>{formatDate(trip.departure_time)}</p>
                    <span className='reduced-im number-light'>{Math.floor(trip.duration/60)}Hs, {trip.duration % 60}Ms</span>
                  </div>
                  <div className='spread-info-web my-3'>
                    <div className='airline-badge my-2'>
                      <div className='imh'>
                        <img src={trip.airline_details?.logo} alt="" />
                      </div>
                      <span></span>
                      <div className=''>
                        <h6>{trip.airline_details?.name}</h6>
                        <p className='mb-0 reduced fainter-tx'>{trip.airline_details?.code}</p>
                      </div>
                    </div>
                    <div className='spread-info'>
                      <FontAwesomeIcon icon={'plane'} />
                      <div className='split'></div>
                      <FontAwesomeIcon icon={'wifi'} />
                      <div className='split'></div>
                      <FontAwesomeIcon icon={'stopwatch'} />
                      <div className='split'></div>
                      <FontAwesomeIcon icon={'bowl-food'} />
                      <div className='split'></div>
                      <FontAwesomeIcon icon={'restroom'} />
                    </div>
                  </div>
                  <div className='spread-info w96 max800'>
                    <div className='text-center'>
                      <p className='mb-0'>
                        <span className='f500 mb-0 number-medium'>{formatTime(trip.departure_time)} </span>
                        <span className='f400 reduced-im faint-tx'>{trip.airport_from}</span>
                      </p>
                      <p className='mb-0'>
                        <span className='f400 reduced-im faint-tx'>{trip.airport_from_details?.city ? `(${trip.airport_from_details.city})` : ''}</span>
                      </p>
                    </div>
                    <div className='trip-icon'>
                      <img src={PlaneTripIcon} alt="" />
                    </div>
                    <div className='text-center'>
                      <p className='mb-0'>
                        <span className='f500 mb-0 number-medium'>{formatTime(trip.arrival_time)} </span>
                        <span className='f400 reduced-im faint-tx'>{trip.airport_to}</span>
                      </p>
                      <p className='mb-0'>
                        <span className='f400 reduced-im faint-tx'>{trip.airport_to_details?.city ? `(${trip.airport_to_details.city})` : ''}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      }
    </>
  );
}

export default FlightPreviewPage;
