import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { allOperators } from '../../../assets/images/all-operators';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { routeConstants } from '../../../services/constants/route-constants';
import WhyUs2 from '../home/page-modules/why-us-2/why-us-2';
import './operator-selection.scss';

function OperatorSelection() {

  const navigate = useNavigate()

  const viewOperators = (code: string) => {
    navigate(`/${routeConstants.operators}/${code}`);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='operators-selection'>
      <div className='banner'>
        <div className='header-spacer'></div>
        <h2 className='text-center pb-5'>Our Operators</h2>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-3'>
          <div className='operator-list'>
            <div className='option-space'>
              <div className='row'>
                {allOperators.map((operator, index) => (
                  <div className='col-lg-4 col-md-6' key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                    <div className='operator-type-box'>
                      <img src={operator.image} alt="" />
                      <div className='box-cta'>
                        <button className='solid-button-2b px-3' onClick={() => viewOperators(operator.code)}>{operator.title}</button>
                      </div>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyUs2 flipped={true} />
      <ContactSect/>
    </div>
  );
}

export default OperatorSelection;
