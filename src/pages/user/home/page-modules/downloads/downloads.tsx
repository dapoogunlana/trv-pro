import React, { useEffect } from 'react';
import './downloads.scss';

function DownloadsSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='downloads'>
      <h1>Downloads Sect</h1>
    </div>
  );
}

export default DownloadsSect;
