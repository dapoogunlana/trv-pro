import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { routeConstants } from '../../../services/constants/route-constants';
import { UpdateBanerImg } from '../../../assets/images';
import './product-updates.scss';
import HalfBannerImaged from '../../../components/block-components/half-banner-imaged/half-banner-imaged';

function ProductUpdates() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const bars = <>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
                <div className='fill'></div>
                <div className='trans'></div>
  </>
  
  return (
    <div className='product-updates'>
      <HalfBannerImaged image={UpdateBanerImg}>Product Updates</HalfBannerImaged>
      <div className='content-body py-5'>
        <div className='w90 max1200'>
            <div className='update-text-sect' data-aos="fade-right">
              <div className='activity-square'></div>
              <p className='date'>
                The development of the Manilla Finance ecosystem began in April 2021. By August of that year, the team had 
                completed the web application for P2P trading. In September 2021, work began on the Manilla Service Suite, 
                with a focus on expanding the payment capabilities within the application using digital assets. At present, 
                the application is nearly finished and undergoing private testing, with 95% completion. Upon completion, we 
                will release versions of the application for web, Android, and iOS.
              </p>
            </div>
            {/* <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla Finance Application Development Begins
              </h6>
              <div className='progress'>
                <div className='level r100 b_bl'></div>
                {bars}
                <div className='level r100 f_bl'></div>
              </div>
              <p className='date'>April 5th, 2021</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla Finance Web Application development
              </h6>
              <div className='progress'>
                <div className='level r100 b_gr'></div>
                {bars}
                <div className='level r100 f_gr'></div>
              </div>
              <p className='date'>August 20th 2021</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla Finance Android & iOS Application begins
              </h6>
              <div className='progress'>
                <div className='level r100 b_bl'></div>
                {bars}
                <div className='level r100 f_bl'></div>
              </div>
              <p className='date'>August 22nd 2021</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla Finance Android & iOS mobile apps development complete
              </h6>
              <div className='progress'>
                <div className='level r100 b_gr'></div>
                {bars}
                <div className='level r100 f_gr'></div>
              </div>
              <p className='date'>February 15th 2022</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla Service Suite Development begins
              </h6>
              <div className='progress'>
                <div className='level r60 b_bl'></div>
                {bars}
                <div className='level r60 f_bl'></div>
              </div>
              <p className='date'>March 10th 2022</p>
            </div>
            <div className='update-sect' data-aos="fade-right">
              <h6 className='activity'>
                Manilla Service Suite Development still ongoing
              </h6>
              <div className='progress'>
                <div className='level r80 b_bl'></div>
                {bars}
                <div className='level r80 f_bl'></div>
              </div>
              <p className='date'>July 14th 2022</p>
            </div> */}
        </div>
      </div>

      <ContactSect/>
    </div>
  );
}

export default ProductUpdates;
