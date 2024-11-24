import React, { useEffect } from 'react';
import { FlightPreviwImg } from '../../../../assets/images';
import './profile-sect.scss';

function ProfileSect() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='profile-sect'>
      <div className='holder'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='imh graph-holder'>
              <img src={FlightPreviwImg} alt="" />
            </div>
          </div>
          <div className='col-md-5'>
            <div className='notifications-holder'>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSect;
