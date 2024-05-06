import React, { useEffect, useState } from 'react';
import BannerSect from './hero/banner';
import SubscribeSect from '../../home/page-modules/subscribe/subscribe';
import './flight-search.scss';
import Loader from '../../../../components/block-components/loader/loader';
import { storedCombinedFlightData as fData } from '../../../../services/utils/flight-booking-service';
import TravelDealsSect from '../../home/page-modules/travel-deals/travel-deals';

function FlightSearchPage(props: any) {

  const [loading, setLoading] = useState(false);
  const [flightsSearched, setFlightsSearched] = useState(false);

  const fetchFlights = (flightData = fData) => {
    setLoading(true);
    console.log({flightData})
    setFlightsSearched(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <div className='flight-listout'></div>
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
