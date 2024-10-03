
import React, { useEffect, useState } from 'react';
import { iAdvancedInfo } from '../add-shortlet-data';
import './advanced-info.scss';

function AdvancedInfoSect({data, revert, proceed}: {data: iAdvancedInfo, revert: Function, proceed: Function}) {

  const [facilityInfo, setFacilityInfo] = useState<iAdvancedInfo>(data);

  const previous = () => {
    revert();
  }
  const forward = () => {
    proceed(facilityInfo);
  }

  useEffect(() => {});
  
  return (
    <div className='advanced-info'>
      <div className=''>
        <h1>Advanced Info</h1>
        <div className='spread-info'>
          <button type='button' className='recede-button px-4' onClick={previous}>Previous</button>
          <button type='button' className='proceed-button px-3' onClick={forward}>Save &amp; Next</button>
        </div>
      </div>
    </div>
  );
}

export default AdvancedInfoSect;
