import React, { useEffect, useState } from 'react';
import BookingComp from '../../../../../components/block-components/booking-comp/booking-comp';
import { storedCombinedFlightData as fData } from '../../../../../services/utils/flight-booking-service';
import './banner.scss';

function BannerSect(props: {searchFlights: Function}) {

  const [flightsSearched, setFlightsSearched] = useState(false);

  const searchFlights = (search: any) => {
    setFlightsSearched(true);
    props.searchFlights(search);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (fData.location && fData.date && fData.flightClass && fData.luggageCounts) {
      setFlightsSearched(true);
    }
  }, [props]);
  
  return (
    <div className='banner'>
      {
        !flightsSearched &&
        <div className='text'>
          <h1 className='f700'>Borderless</h1>
          <h3><span className='yellow-tx'>Seamless </span>booking,</h3>
          <h3><span className='orange-tx'>boundless </span>adventures</h3>
        </div>
      }
      <div className='booking-sect'>
        <BookingComp hidecategories mode='FLIGHTS' searchFlights={searchFlights} />
      </div>
    </div>
  );
}

export default BannerSect;
