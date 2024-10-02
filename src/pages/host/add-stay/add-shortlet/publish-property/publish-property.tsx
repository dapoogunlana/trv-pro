
import React, { useEffect, useState } from 'react';
import { iBasicInfo, iAdvancedInfo } from '../add-shortlet-data';
import './publish-property.scss';

function PublishPropertySect({basicData, advancedData}: {basicData: iBasicInfo, advancedData: iAdvancedInfo}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='publish-property'>
      <div className='center-info submit-grid pt-5'>
        <div className='button-holders'>
          <button className='recede-button'>Previous</button>
        </div>
        <div className='button-holders'>
          <button className='proceed-button'>Submit for Review</button>
        </div>
      </div>
    </div>
  );
}

export default PublishPropertySect;
