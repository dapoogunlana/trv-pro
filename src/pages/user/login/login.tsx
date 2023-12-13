import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { RegImg, YellowAngleBackdrop } from '../../../assets/images';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import RegisterForm from '../../../components/block-components/register-form/register-form';
import './login.scss';

function Login() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <div className='register'>
        <div className='slant-holder'>
          <img src={YellowAngleBackdrop} alt="" />
        </div>
        <div className='header-spacer'></div>
        <div className='row reg-holder'>
          <div className='col-lg-6 center-info-col reg-img'>
            <div className='imh w90 max500' data-aos="zoom-in">
              <img src={RegImg} alt="" />
              {/* <p className='font-weight-bold'>Fastest Way To Buy, Sell And Trade Cryptocurrencies</p>
              <h3 className=''>Create Your Account</h3> */}
              <p className='font-weight-bold'>Lets keep you up to date on our app launch</p>
              <h3 className=''>Join Waitlist </h3>
            </div>
          </div>
          <div className='col-lg-6 center-info-col'>
            <p className='font-weight-bold reg-mobile-text increased-x'>Join our wait list to stay up to date on our app launch</p>
            <div className='w90 my-3' data-aos="fade-up">
              <RegisterForm/>
            </div>
          </div>
        </div>
      </div>

      <ContactSect/>
    </>
  );
}

export default Login;
