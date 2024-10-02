
import React, { useEffect, useState } from 'react';
import { iAdvancedInfo } from '../add-shortlet-data';
import './advanced-info.scss';

function AdvancedInfoSect({data}: {data: iAdvancedInfo}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='advanced-info'>
      <div className=''>
        <h1>Advanced Info</h1>
      </div>
    </div>
  );
}

export default AdvancedInfoSect;
