
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { iBasicInfo, iAdvancedInfo } from '../add-shortlet-data';
import './publish-property.scss';

function PublishPropertySect({basicData, advancedData, revert}: {basicData: iBasicInfo, advancedData: iAdvancedInfo, revert: Function}) {

  const previous = () => {
    revert();
  }

  const submitPropertyData = () => {
    toast.success('Under Development')
  }

  useEffect(() => {});
  
  return (
    <div className='publish-property'>
      <div className='center-info submit-grid pt-5'>
        <div className='button-holders'>
          <button className='recede-button' onClick={previous}>Previous</button>
        </div>
        <div className='button-holders'>
          <button className='proceed-button' onClick={submitPropertyData}>Submit for Review</button>
        </div>
      </div>
    </div>
  );
}

export default PublishPropertySect;
