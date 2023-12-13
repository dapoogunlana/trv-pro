import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo, RegImg, WhiteAngleBackdrop } from '../../../assets/images';
import AdminLoginForm from '../../../components/block-components/admin-login-form/login-form';

import AdminFooter from '../../../layout/admin/footer/admin-footer';
import { routeConstants } from '../../../services/constants/route-constants';
import './login.scss';

function AdminLogin() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <div className='admin-login'>
        <div className='slant-holder'>
          <img src={WhiteAngleBackdrop} alt="" />
        </div>
        <div className='header-spacer'></div>
        <div className=''>
          <div className='w60 max200 imh'>
            <Link to={routeConstants.home}>
              <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
        <div className='row reg-holder'>
          <div className='col-lg-6 center-info-col reg-img'>
            <div className='imh w90 max500' data-aos="zoom-in">
              <img src={RegImg} alt="" />
              <p className='font-weight-bold'>Login to admin account manage app data</p>
              <h3 className=''>Login</h3>
            </div>
          </div>
          <div className='col-lg-6 center-info-col'>
            <p className='font-weight-bold reg-mobile-text increased-x'>Login to admin account manage app data</p>
            <div className='w90 my-3' data-aos="fade-up">
              <AdminLoginForm/>
            </div>
          </div>
        </div>
      </div>
      <AdminFooter/>
    </>
  );
}

export default AdminLogin;
