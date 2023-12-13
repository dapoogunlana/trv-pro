import React, { useEffect, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import {
  manillaCardTiles,
  manillaCoinPhone,
  mCardIconBankSecurity,
  mCardIconCryptoRewards,
  mCardIconGrowCashback,
  mCardIconMultipleOptions,
  mCardIconRealtimeAccess,
  mCardIconZeroFees,
} from '../../../assets/images';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { routeConstants } from '../../../services/constants/route-constants';
import { cardFaqData } from './card-faq-data';
import './manilla-card.scss';

function ManillaCard(props: any) {

  const [reactiveFaqs, setReactiveFaqs] = useState(cardFaqData);

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
    <div className='manilla-card'>
      <div className='banner'>
        <div className='header-spacer'></div>
        <div className='text-center pb-5 w90 max900'>
          <h2 className=''>Manilla Card</h2>
          <p className='increased'>
            Enjoy Unlimited Cashbacks In Crypto When You Make Payments Using the Manilla 
            Debit Card In Over 40 Million Merchant Locations Globally
          </p>
        </div>
      </div>
      <div className='w90 max1100 py-5'>
        <div className='row'>
          <div className='col-md-6 center-info'>
            <div className='card-img w90 py-4' data-aos='zoom-out'>
              <img src={manillaCardTiles} className='' alt="" />
            </div>
          </div>
          <div className='col-md-6 center-info'>
            <div className='w90'>
              <h6 className='increased'>
                Get cashback every time you pay using our debit card. It can’t get better than that.
              </h6>
              <div className='my-3 description-grid-60'>
                <div className='imh' data-aos='zoom-in'  data-aos-delay='400'>
                  <img src={mCardIconZeroFees} alt="" />
                </div>
                <div className='pl-3' data-aos='fade-left'>
                  <h6 className='reduced-soft mb-0'>Zero Fees</h6>
                  <p className='mb-0 reduced'>
                    Unlike traditional debit cards, there are no hidden fees, annual or card maintenance fees. 
                    Just go ahead and enjoy every bit of the goodness we offer
                  </p>
                </div>
              </div>
              <div className='my-3 description-grid-60'>
                <div className='imh' data-aos='zoom-in'  data-aos-delay='400'>
                  <img src={mCardIconCryptoRewards} alt="" />
                </div>
                <div className='pl-3' data-aos='fade-left'>
                  <h6 className='reduced-soft mb-0'>Crypto Rewards</h6>
                  <p className='mb-0 reduced'>
                    Earn rewards in crypto every time you make payments using the card. Rewards are received in MNLA
                  </p>
                </div>
              </div>
              <div className='my-3 description-grid-60'>
                <div className='imh' data-aos='zoom-in'  data-aos-delay='400'>
                  <img src={mCardIconBankSecurity} alt="" />
                </div>
                <div className='pl-3' data-aos='fade-left'>
                  <h6 className='reduced-soft mb-0'>Bank-Grade Security</h6>
                  <p className='mb-0 reduced'>
                    Absolute zero worries! The card is backed with bank-grade security features including 2FA, 
                    card blocking, pin modification and many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className='pt-4 mt-5' />

        <div className='row'>
          <div className='col-md-6 center-info'>
            <div className='w90'>
              <h6 className='increased'>
                Play it smart, diversify your portfolio from cashback.
              </h6>
              <div className='my-3 description-grid-60'>
                <div className='imh' data-aos='zoom-in'  data-aos-delay='400'>
                  <img src={mCardIconMultipleOptions} alt="" />
                </div>
                <div className='pl-3' data-aos='fade-left'>
                  <h6 className='reduced-soft mb-0'>Multiple Options to Choose From</h6>
                  <p className='mb-0 reduced'>
                    Choose which crypto assets you want your cashback to be dominated in
                  </p>
                </div>
              </div>
              <div className='my-3 description-grid-60'>
                <div className='imh' data-aos='zoom-in'  data-aos-delay='400'>
                  <img src={mCardIconRealtimeAccess} alt="" />
                </div>
                <div className='pl-3' data-aos='fade-left'>
                  <h6 className='reduced-soft mb-0'>Real-Time Access to Crypto Rewards</h6>
                  <p className='mb-0 reduced'>
                    Accumulate your rewards over time and gain instant access to your assets whenever you want
                  </p>
                </div>
              </div>
              <div className='my-3 description-grid-60'>
                <div className='imh' data-aos='zoom-in'  data-aos-delay='400'>
                  <img src={mCardIconGrowCashback} alt="" />
                </div>
                <div className='pl-3' data-aos='fade-left'>
                  <h6 className='reduced-soft mb-0'>Grow your MNLA Cashback</h6>
                  <p className='mb-0 reduced'>
                    Take advantage of the Manilla Vault. Stake the MNLA reward for exponential growth
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 center-info'>
            <div className='card-img w90 py-4' data-aos='zoom-out'>
              <img src={manillaCoinPhone} className='' alt="" />
            </div>
          </div>
        </div>

        <div className='w96 max900 text-center py-4'>
          <p className='reduced-soft'>
            Now that you know the amazing features of the Manilla card, You may proceed to get one for yourself. 
            The card setup has been simplified. There are also no credit checks requirements or any other obligations 
            before the card is issued. Everyone can request for either the virtual card or plastic card that is 
            shipped to eligible locations worldwide.
          </p>
          <Link to={`/${routeConstants.userLogin}`}>
            <button className='hollow-button-2cb rad-10-im'>Join Waitlist</button>
          </Link>
        </div>

        <hr className='pt-4 mt-5' />

        <div className='w96 max1000' data-aos="fade-up">
          <h4 className='text-center pt-5 pb-3'>Frequently Asked Questions</h4>
          {reactiveFaqs.map((item, index) => {
          return <div className="question-space py-3 my-3" key={index} onClick={() => openQuestion(index)}>
            <div className={'spread-info py-2 ' + (item.active ? 'active-question' : 'question')}>
              <h6 className="increased-soft mb-0">{item.question}</h6>
              {/* <div className={'view-icon' + (item.active ? ' full-view' : '')}>
                <img src={DropdownArrow} alt="" />
              </div> */}
              <i className={'fa-sharp fa-solid fa-chevron-down increased ' + (item.active ? 'rotated' : '')}></i>
              {/* {
                item.active ? 
                <i className={"fa-solid fa-minus increased full " + (item.active ? 'full-view' : '')}></i> :
                <i className={"fa-solid fa-plus increased full " + (item.active ? 'full-view' : '')}></i>
              } */}
            </div>
            <div className={"answer" + (item.active ? ' full' : '')}>
              <p className="reduced-soft mb-0">{item.answer}</p>
            </div>
          </div>
        })}
        </div>

      </div>
      <ContactSect/>
    </div>
  );
}

export default ManillaCard;
