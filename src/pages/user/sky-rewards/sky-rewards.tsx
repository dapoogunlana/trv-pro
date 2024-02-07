import React, { useEffect } from 'react';
import './sky-rewards.scss';

function SkyRewardsPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='sky-rewards'>
      <div className='banner'>
        <h1>SkyRewards Page</h1>
      </div>
    </div>
  );
}

export default SkyRewardsPage;
