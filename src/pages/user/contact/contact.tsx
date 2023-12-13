import React, { useEffect } from 'react';
import HalfBannerImaged from '../../../components/block-components/half-banner-imaged/half-banner-imaged';
import { countryList } from '../../../services/constants/country-list';
import { ContactBanerImg } from '../../../assets/images';
import './contact.scss';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='contact'>
      <HalfBannerImaged image={ContactBanerImg}>Contact Us</HalfBannerImaged>
      <div className='content-body py-5'>
        <div className='w90 max1200 pb-5'>
          <h6 className='text-center'>For Business & Partnership Inquiries, Kindly Fill the Form Below to Reach Out to Us</h6>
          <div className='cover w96 max600' data-aos="fade-up">
            <div className='item-card'>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='input-grp'>
                    <label>First Name</label>
                    <input type="text" placeholder='Enter frist name' />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='input-grp'>
                    <label>Last Name</label>
                    <input type="text" placeholder='Enter last name' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='input-grp'>
                    <label>Email</label>
                    <input type="text" placeholder='Enter email address' />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='input-grp'>
                    <label>Country</label>
                    <select name="" id="" defaultValue={''}>
                      <option value="" disabled>Choose your country</option>
                      {countryList.map((country, index) => {
                          return <option value={country?.name} key={index}>{country?.name}</option>
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='input-grp'>
                    <label>Talk To Us</label>
                    <textarea rows={3} placeholder='Type what you would like to tell us here'></textarea>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='text-center py-3'>
                    <button className='solid-button-2c rad-10 px-5 shadowed'>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cover mt-5 w96 max600'>
            <h6 className="pb-1 text-center font-weight-bold increased">Our Address</h6>
            <div className='row'>
              {/* <div className='col-sm-6'>
                <span className="mb-0 font-weight-bold">Nigeria</span>
                <p className="reduced-soft">
                  6B, Yomi Oshikoya Street, 
                  Lekki Phase 1
                  Lagos State 
                  105102
                </p>
              </div>
              <div className='col-sm-6'>
                <span className="mb-0 font-weight-bold">Cyprus</span>
                <p className="reduced-soft">
                  30, Peiraios, Floor 1, Apt 1
                  101. 2023, Strovolos 
                  Cyprus
                </p>
              </div> */}
              <div className='col-sm-12'>
                <span className="mb-0 font-weight-bold">Seychelles</span>
                <p className="reduced-soft">
                  Suite23,Eden Plaza, Eden Island, Mahe’, Republic of Seychelles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
