import React, { useEffect, useState } from 'react';
import BannerSect from './hero/banner';
import SubscribeSect from '../../home/page-modules/subscribe/subscribe';
import './flight-search.scss';
import Loader from '../../../../components/block-components/loader/loader';
import { storedCombinedFlightData as fData } from '../../../../services/utils/flight-booking-service';
import TravelDealsSect from '../../home/page-modules/travel-deals/travel-deals';
import { sendRequest } from '../../../../services/utils/request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import { routeConstants } from '../../../../services/constants/route-constants';
import { formatNumber } from '../../../../services/utils/data-manipulation-utilits';
import { formatTime, getFlightToAndFrom, sampleFlights } from './flight-search-service';

function FlightSearchPage(props: any) {

  const navigate = useNavigate();
  const init = true;

  const [loading, setLoading] = useState(false);
  const [flightsSearched, setFlightsSearched] = useState(false);
  const [flightList, setFlightList] = useState<any[]>([])
  const [selectedTab, setSelectedTab] = useState<'cheapest' | 'best' | 'quickest'>('best');

  const fetchFlights = (flightData = fData) => {
    setLoading(true);
    setFlightsSearched(true);
    // interceptor(() => {})
    // return;
    
    sendRequest(
      {
        url: "flight/flight-offer-search",
        method: "POST",
        body: {
          origin: fData.location?.from?.iata_code,
          destination: fData.location?.to?.iata_code,
          departure_date: fData.date?.startDate?.toISOString().split('T')[0],
          adults: calculateAdult(),
          cabin: fData.flightClass?.flightClass.toLocaleLowerCase(),
          children: calculateChildren(),
          infants: calculateInfant(),
          return_date: fData.date?.endDate ? fData.date?.endDate?.toISOString().split('T')[0] : ""
        },
      },
      (res: any) => {
        setLoading(false);
        setFlightList(res.data);
      },
      (err: any) => {}
    );
  };

  const interceptor = (callback: Function) => {
    setTimeout(() => {
      setLoading(false);
      console.log({lativo: sampleFlights.length})
      setFlightList(sampleFlights);
    }, 2000);
    callback();
  }

  const calculateAdult = () => {
    let count = 0;
    count += (fData.flightClass?.allPassengerCount || 0)
    - (fData.flightClass?.children2_11Count || 0)
    - (fData.flightClass?.toddlersInOwnSeatUnder2Count || 0)
    - (fData.flightClass?.infantsOnLapUnder2Count || 0)
    return count + '';
  }

  const calculateChildren = () => {
    let count = 0;
    count += (fData.flightClass?.children2_11Count || 0)
    return count + '';
  }

  const calculateInfant = () => {
    let count = 0;
    count +=  (fData.flightClass?.toddlersInOwnSeatUnder2Count || 0)
    + (fData.flightClass?.infantsOnLapUnder2Count || 0)
    return count + '';
  }
  
  const updateSelectedTab = (tab: 'cheapest' | 'best' | 'quickest') => {
    setSelectedTab(tab);
  }

  const viewFlightDetails = (id: number) => {
    if(id) {
      navigate(`/${routeConstants.flightPreview}/${id}`)
    }
  }

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, [init]);
  useEffect(() => {
    if (fData.location && fData.date && fData.flightClass && fData.luggageCounts) {
      fetchFlights(fData);
    }
  }, [props]);
  
  return (
    <div className='flight-search'>
      <BannerSect searchFlights={fetchFlights} />
      <div className='flight-case'>
        {
          flightsSearched ?
          <div className='flight-listout'>
            <div className='row'>
              <div className='col-lg-3'>
                <h3 className='f700 blue-tx pb-3'>Filters</h3>
                <div className='filter'>
                  <div className='spread-info'>
                    <p className='mb-0 f600'>Price</p>
                    <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
                  </div>
                  <div className='info-grid py-2'>
                    <input type="number" name="" id="" className='simple-input' placeholder='Minimum' />
                    <input type="number" name="" id="" className='simple-input' placeholder='Maximum' />
                  </div>
                  <hr className='' />
                  <div className='spread-info'>
                    <p className='mb-0 f600'>Depature Time</p>
                    <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
                  </div>
                  <div className='info-grid py-2'>
                    <input type="text" name="" id="" className='simple-input' placeholder='Earliest' />
                    <input type="text" name="" id="" className='simple-input' placeholder='Latest' />
                  </div>
                  <hr />
                  <div className='spread-info'>
                    <p className='mb-0 f600'>Airlines</p>
                    <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
                  </div>
                  <div className='py-2'>
                    <input type="checkbox" name="" id="" />
                    <span className='reduced-soft-im f500 px-2'>Emirates</span>
                  </div>
                  <div className='pb-2'>
                    <input type="checkbox" name="" id="" />
                    <span className='reduced-soft-im f500 px-2'>Fly Dubai</span>
                  </div>
                  <div className='pb-2'>
                    <input type="checkbox" name="" id="" />
                    <span className='reduced-soft-im f500 px-2'>Qatar Airways</span>
                  </div>
                  <div className='pb-2'>
                    <input type="checkbox" name="" id="" />
                    <span className='reduced-soft-im f500 px-2'>Air Peace</span>
                  </div>
                  <div className='pb-2'>
                    <input type="checkbox" name="" id="" />
                    <span className='reduced-soft-im f500 px-2'>Etihad</span>
                  </div>
                  <hr />
                  <div className='spread-info'>
                    <p className='mb-0 f600'>Trips</p>
                    <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
                  </div>
                  <div className='py-2'>
                    <input type="checkbox" name="" id="" />
                    <span className='reduced-soft-im f500 px-2'>Round trip</span>
                  </div>
                  <div className='pb-2'>
                    <input type="checkbox" name="" id="" />
                    <span className='reduced-soft-im f500 px-2'>One Way</span>
                  </div>
                  <div className='pb-2'>
                    <input type="checkbox" name="" id="" />
                    <span className='reduced-soft-im f500 px-2'>Multi-City</span>
                  </div>
                </div>
              </div>
              <div className='col-lg-9'>
                <div className='pad-web'>
                  <div className='category-tabs'>
                    <div className={'category-tab' + (selectedTab ==='cheapest' ? ' active' : '')} onClick={() => updateSelectedTab('cheapest')}>
                      <h6 className='mb-0'>Cheapest</h6>
                      <p className='mb-0 number-light'>$99. 2h 18m</p>
                    </div>
                    <div className='center-info py-2'>
                      <div className='splitter'></div>
                    </div>
                    <div className={'category-tab' + (selectedTab ==='best' ? ' active' : '')} onClick={() => updateSelectedTab('best')}>
                      <h6 className='mb-0'>Best</h6>
                      <p className='mb-0 number-light'>$99. 2h 18m</p>
                    </div>
                    <div className='center-info py-2'>
                      <div className='splitter'></div>
                    </div>
                    <div className={'category-tab' + (selectedTab ==='quickest' ? ' active' : '')} onClick={() => updateSelectedTab('quickest')}>
                      <h6 className='mb-0'>Quickest</h6>
                      <p className='mb-0 number-light'>$99. 2h 18m</p>
                    </div>
                  </div>
                {
                    !loading &&
                    <p className='reduced-x'>
                      <span className='blue-tx number-bold'>Showing {flightList.length} of</span> 
                      <span className='orange-tx number-bold'> {flightList.length} flights</span>
                    </p>
                  }
                  {
                    flightList.map((flight, index) => (
                      <div className='flight-card' key={index}>
                        <div className='logo-side'>
                          <img src={flight.outbound[0]?.airline_details?.logo} alt="" />
                        </div>
                        <div className='content-side'>
                          <div className='spread-info mb-2'>
                            <div className='spread-info'>
                              <div className='center-info save-flight'>
                                <p className='mb-1'>4.3</p>
                              </div>
                              <h6 className='mb-0 mx-3'>{getFlightToAndFrom(flight).from} - {getFlightToAndFrom(flight).to}</h6>
                            </div>
                            <h5 className='orange-tx number-bold'><span className='reduced-im'>{flight.currency}</span> {formatNumber(flight.amount)}</h5>
                          </div>
                          {
                            flight.outbound.map((trip: any, tripIndex: number) => (
                              <div className='pb-2 w96 max500' key={tripIndex}>
                                <div className='spread-info pb-i'>
                                  <p className='f500 mb-0 number-bold'>{formatTime(trip.departure_time)}</p>
                                  <span className='reduced-im number-light'>{Math.floor(trip.duration/60)}Hs, {trip.duration % 60}Ms</span>
                                  <p className='f500 mb-0 number-bold'>{formatTime(trip.arrival_time)}</p>
                                </div>
                                <div className='spread-info'>
                                  <p className='fainter-tx reduced-soft'>{trip.airport_from_details?.iata_code}</p>
                                  <span className='reduced-im faint-tx'>non-stop</span>
                                  <p className='fainter-tx reduced-soft'>{trip.airport_to_details?.iata_code}</p>
                                </div>
                              </div>
                            ))
                          }
                          <div className='description-grid-50'>
                            <div className='center-info save-flight'>
                              <FontAwesomeIcon icon={'heart'} className='save-icon' />
                            </div>
                            <div className='pl-3'>
                              <button className='flight-button' onClick={() => viewFlightDetails(flight.id)}>View Flight</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  {
                    flightList.length === 0 && !loading &&
                    <div className='flight-card2 center-info'>
                      <h5 className=''>No Flight matches your search</h5>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          :
          <TravelDealsSect/>
        }
      </div>
      <SubscribeSect/>
      {loading && <div className='loader-holder'><Loader/></div>}
    </div>
  );
}

export default FlightSearchPage;
