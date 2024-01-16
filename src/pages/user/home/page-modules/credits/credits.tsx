import React, { useEffect } from 'react';
import './credits.scss';

function CreditsSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='credits'>
      <h1>Credits Sect</h1>
    </div>
  );
}

export default CreditsSect;
