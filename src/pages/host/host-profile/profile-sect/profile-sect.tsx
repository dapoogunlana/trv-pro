import React, { useEffect } from 'react';
import './profile-sect.scss';

function ProfileSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='profile-sect'>
      <div className='banner'>
        <h1>Profile Sect</h1>
      </div>
    </div>
  );
}

export default ProfileSect;
