import React, { useEffect } from 'react';
import './shortlets.scss';

function ShortletsSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='shortlets'>
      <h1>Shortlets Sect</h1>
    </div>
  );
}

export default ShortletsSect;
