import React, { useEffect, useState } from "react";
import './auth-enforcer-modal.scss';
import { closeAppModal, openModal } from "../../../services/utils/app-data-modal-service";
import LoginForm from "../../../pages/user/login/login-form/login-form";
import AdminSignupForm from "../../../pages/user/signup/signup-form/signup-form";
import VerifyEmailForm from "../../../pages/user/verify-email/verify-email-form/verify-email-form";
import RetrievePasswordForm from "../../../pages/user/retrieve-password/retrieve-password/retrieve-password-form";
import ResetPasswordForm from "../../../pages/user/reset-password/reset-password-form/reset-password-form";

const AuthEnforcerModal = (props: { overlayMode: number, updateOverlayMode: Function, init: boolean, proceed?: Function }) => {

  const [authPage, setAuthPage] = useState<'login' | 'register' | 'verify' | 'forgot_password' | 'reset_password'>('login');

  const logUserIn = () => {
    setAuthPage('login');
    if(props.proceed) {
      closeModal();
      setTimeout(() => props.updateOverlayMode(2), 500);
      props.proceed();
    }
  }

  const goToLogin = () => {
    setAuthPage('login');
  }

  const goToRegister = () => {
    setAuthPage('register');
  }

  const poceedToVerify = () => {
    setAuthPage('verify');
  }

  const retrievalInitiated = () => {
    setAuthPage('reset_password');
  }

  const forgotPassword = () => {
    setAuthPage('forgot_password');
  }

  const closeModal = () => {
    closeAppModal(()=> {
      // props.closeModal({skipHide: true, query: '.auth-enforcer-modal'})
    }, {skipHide: true, query: '.auth-enforcer-modal'});
  };

  useEffect(() => {
    openModal({skipHide: true, query: '.auth-enforcer-modal'});
  }, [props.init]);

  useEffect(() => {
    if(props.overlayMode === 1) {
      closeModal();
      setTimeout(() => props.updateOverlayMode(2), 500);
    }
  }, [props.overlayMode]);

  return (
    <div className="auth-enforcer-modal edit-news-modal">
      <div className="modal-bg"></div>
      <div className="modal-container">
        <div className="modal-content">
            <div className="space-control">
              {/* <h1 className="text-center">Content Starts Here</h1> */}
              {authPage === 'login' && <LoginForm poceedToVerify={poceedToVerify} logUserIn={logUserIn} switchToRegister={goToRegister} passwordReset={forgotPassword} />}
              {authPage === 'register' && <AdminSignupForm poceedToVerify={poceedToVerify} switchToLogin={goToLogin} />}
              {authPage === 'verify' && <VerifyEmailForm userVerified={goToLogin} />}
              {authPage === 'forgot_password' && <RetrievePasswordForm retrievalInitiated={retrievalInitiated} switchToLogin={goToLogin} />}
              {authPage === 'reset_password' && <ResetPasswordForm resetComplete={goToLogin} switchToLogin={goToLogin} />}
              {/* <h1 className="text-center">Content Ends Here</h1> */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default AuthEnforcerModal;
