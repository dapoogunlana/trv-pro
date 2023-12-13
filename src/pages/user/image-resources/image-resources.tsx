import React, { useEffect } from 'react';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { UpdateBanerImg, Logo } from '../../../assets/images';
import './image-resources.scss';
import HalfBannerImaged from '../../../components/block-components/half-banner-imaged/half-banner-imaged';

function ImageResources() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='useful-images'>
      <HalfBannerImaged image={UpdateBanerImg}>Useful Images</HalfBannerImaged>
      <div className='content-body py-5'>
        <div className='w90 max1200'>
          <div className='row'>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='w90 my-3 imh'>
                <img src={Logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSect/>
    </div>
  );
}

export default ImageResources;
