import React, { useEffect } from 'react';
import './reviews-sect.scss';

function ReviewsSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='reviews-sect'>
      <div className='banner'>
        <h1>Reviews Sect</h1>
      </div>
    </div>
  );
}

export default ReviewsSect;
