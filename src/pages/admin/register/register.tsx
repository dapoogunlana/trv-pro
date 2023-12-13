import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo, RegImg, WhiteAngleBackdrop } from '../../../assets/images';
import AdminRegisterForm from '../../../components/block-components/admin-register-form/register-form';

import AdminFooter from '../../../layout/admin/footer/admin-footer';
import { routeConstants } from '../../../services/constants/route-constants';
import './register.scss';

function AdminRegister() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <div className='admin-register'>
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
              <p className='font-weight-bold'>Register to admin account manage app data</p>
              <h3 className='rulu'>Register</h3>
            </div>
          </div>
          <div className='col-lg-6 center-info-col'>
            <p className='font-weight-bold reg-mobile-text increased-x'>Register to admin account manage app data</p>
            <div className='w90 my-3' data-aos="fade-up">
              <AdminRegisterForm/>
            </div>
          </div>
        </div>
      </div>
      <AdminFooter/>
    </>
  );
}

export default AdminRegister;
