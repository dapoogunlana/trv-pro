import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { routeConstants } from '../../../services/constants/route-constants';
import AdminLoginForm from './retrieve-password/retrieve-password-form';
import './retrieve-password.scss';

function LoginPage() {

  const navigate = useNavigate();

  const retrievalInitiated = () => {
    console.log('Initiated');
    navigate(`/${routeConstants.updatePassword}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='retrieve-password-page'>
      <div className='hold-grid'>
        <div className='content-sect'>
          <div className='content-holder'>
            <AdminLoginForm retrievalInitiated={retrievalInitiated} />
          </div>
        </div>
        <div className='image-sect'></div>
      </div>
    </div>
  );
}

export default LoginPage;
