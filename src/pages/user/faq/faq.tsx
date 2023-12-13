import React, { useEffect, useState } from 'react';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { faqData } from './faq-data';
import { FaqBanerImg } from '../../../assets/images';
import './faq.scss';
import HalfBannerImaged from '../../../components/block-components/half-banner-imaged/half-banner-imaged';

function Faq(props: any) {

  const [reactiveFaqs, setReactiveFaqs] = useState(faqData);

  const openQuestion = (index: number) => {
    const newFaqs = [...reactiveFaqs];
    newFaqs[index].active = !newFaqs[index].active;
    // if (newFaqs[index].active === true) {
    //   newFaqs[index].active = false;
    // } else {
    //   newFaqs.map((item) => {
    //     item.active = false;
    //     return item;
    //   });
    //   newFaqs[index].active = true;
    // }
    setReactiveFaqs(newFaqs);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);
  
  return (
    <div className='faq'>
      <HalfBannerImaged image={FaqBanerImg}>FAQ</HalfBannerImaged>
      <div className='content-body py-5'>
        <div className='w90 max1200'>
          <div className='cover' data-aos="fade-up">
            <div className='item-card'>

            </div>
            {reactiveFaqs.map((item, index) => {
            return <div className="item my-4 clickable" key={index} onClick={() => openQuestion(index)}>
              <div className={'spread-info py-2 ' + (item.active ? 'active-question' : 'question')}>
                <h6 className="increased-soft mb-0">{item.question}</h6>
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
                <p className="reduced-soft mb-0">{item.answer}</p>
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

export default Faq;
