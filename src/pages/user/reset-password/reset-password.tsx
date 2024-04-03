import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { routeConstants } from '../../../services/constants/route-constants';
import AdminResetPasswordForm from './reset-password-form/reset-password-form';
import './reset-password.scss';

function ResetPasswordPage() {

  const navigate = useNavigate();

  const resetComplete = () => {
    navigate(`/${routeConstants.login}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='reset-password-page'>
      <div className='hold-grid'>
        <div className='content-sect'>
          <div className='content-holder'>
            <AdminResetPasswordForm resetComplete={resetComplete} />
          </div>
        </div>
        <div className='image-sect'></div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
