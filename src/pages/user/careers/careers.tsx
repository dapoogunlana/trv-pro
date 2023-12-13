import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { CareersBanerImg } from '../../../assets/images';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import HalfBannerImaged from '../../../components/block-components/half-banner-imaged/half-banner-imaged';
import { routeConstants } from '../../../services/constants/route-constants';
import { careerData } from './careers-data';
import './careers.scss';

function Careers(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  const navigate = useNavigate();
  const [reactiveCareers, setReactiveCareers] = useState(careerData);

  const openRole = (index: number) => {
    const newCareers = [...reactiveCareers];
    newCareers[index].active = !newCareers[index].active;
    // if (newCareers[index].active === true) {
    //   newCareers[index].active = false;
    // } else {
    //   newCareers.map((item) => {
    //     item.active = false;
    //     return item;
    //   });
    //   newCareers[index].active = true;
    // }
    setReactiveCareers(newCareers);
  }
  const openApplication = (role: string) => {
    navigate(`/${routeConstants.careers}/${role}`);
  }
  return (
    <div className='careers'>
      <HalfBannerImaged image={CareersBanerImg}>Careers</HalfBannerImaged>
      <div className='content-body py-5'>
        <div className='w90 max900 pb-4'>
          <p className='text-center'>
            Manilla Finance is a customer centric blockchain firm and this regularly requires  the support of skilled and 
            experienced manpower to provide an efficient ecosystem for our users. We welcome anyone irrespective of their 
            location to fill our application form and submit their resume into our resume bank. Manilla is an equal opportunity 
            employer and we encourage all to apply for any opening that matches their skill set as only qualified candidates 
            will be contacted.
          </p>
          <p className='text-center'>
            NOTE - Please DO NOT send any mail to Manilla Finance’s mail addresses. Use the online form only. 
          </p>
        </div>
        <div className='w90 max1200'>
          <div className='cover' data-aos="fade-up">
            <div className='item-card'>

            </div>
            {reactiveCareers.map((item, index) => {
            return <div className="item my-4 clickable" key={index} onClick={() => openRole(index)}>
              <div className="spread-info py-2">
                <h6 className="increased-soft mb-0">{item.title}</h6>
                {/* <div className={'view-icon' + (item.active ? ' full-view' : '')}>
                  <img src={DropdownArrow} alt="" />
                </div> */}
                {
                  item.active ? 
                  <i className={"fa-solid fa-minus increased full " + (item.active ? 'full-view' : '')}></i> :
                  <i className={"fa-solid fa-plus increased full " + (item.active ? 'full-view' : '')}></i>
                }
              </div>
              <div className={"answer" + (item.active ? ' full' : '')}>
                <p className="reduced-soft mb-0">{item.details}</p>
                <div className="spread-info pt-2">
                  <p className="reduced-soft faint-font mb-0">
                    {item.expires || 'Curently Open'}
                  </p>
                  <button className='solid-button-2c rad-10' onClick={()=>openApplication(item.role_code)}>Apply</button>
                </div>
              </div>
            </div>
          })}
          </div>
        </div>
      </div>

      <ContactSect/>
    </div>
  );
}

export default Careers;
