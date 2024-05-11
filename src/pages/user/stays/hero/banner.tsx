import React, { useEffect, useState } from 'react';
import BookingComp from '../../../../components/block-components/booking-comp/booking-comp';
import './banner.scss';

function BannerSect(props: {searchStays: Function}) {

  const [staysSearched, setStaysSearched] = useState(false);

  const searchStays = (search: any) => {
    setStaysSearched(true);
    props.searchStays(search);
  }

  useEffect(() => {}, [props]);
  
  return (
    <div className='stay-banner'>
      {
        !staysSearched &&
        <div className='text'>
          <h1 className='f700'>Borderless</h1>
          <h3><span className='yellow-tx'>Seamless </span>booking,</h3>
          <h3><span className='orange-tx'>boundless </span>adventures</h3>
        </div>
      }
      <div className='booking-sect'>
        <BookingComp hidecategories mode='STAYS' searchStays={searchStays} />
      </div>
    </div>
  );
}

export default BannerSect;
