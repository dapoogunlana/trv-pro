import React, { useEffect } from 'react';
import './latest.scss';

function LatestSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='latest'>
      <h1>Latest Sect</h1>
    </div>
  );
}

export default LatestSect;
