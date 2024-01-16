import React, { useEffect } from 'react';
import './destinations.scss';

function DestinationsSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='destinations'>
      <h1>Destinations Sect</h1>
    </div>
  );
}

export default DestinationsSect;
