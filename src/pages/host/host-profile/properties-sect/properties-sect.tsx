import React, { useEffect } from 'react';
import './properties-sect.scss';

function PropertiesSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='properties-sect'>
      <div className='banner'>
        <h1>Properties Sect</h1>
      </div>
    </div>
  );
}

export default PropertiesSect;
