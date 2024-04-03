import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { routeConstants } from '../../../services/constants/route-constants';
import AdminSignupForm from './signup-form/signup-form';
import './signup.scss';

function SignupPage() {

  const navigate = useNavigate();

  const poceedToVerify = () => {
    navigate(`/${routeConstants.verfyEmail}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='signup-page'>
      <div className='hold-grid'>
        <div className='content-sect'>
          <div className='content-holder'>
            <AdminSignupForm poceedToVerify={poceedToVerify} />
          </div>
        </div>
        <div className='image-sect'></div>
      </div>
    </div>
  );
}

export default SignupPage;
