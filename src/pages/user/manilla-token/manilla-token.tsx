import React, { useEffect, useState } from 'react';
import {
  differentFaces,
  // rewards,
  stackedCoins,
  tokenomicsBook,
  tokenomicsChartLegend,
  tokenomicsChart,
  whereToBuy,
} from '../../../assets/images';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { tokenFaqData } from './manilla-token-data';
import './manilla-token.scss';
import { Tokenomics } from '../../../assets/files';

function ManillaToken(props: any) {

  const [reactiveFaqs, setReactiveFaqs] = useState(tokenFaqData);

  const openQuestion = (index: number) => {
    const newFaqs = [...reactiveFaqs];
    newFaqs[index].active = !newFaqs[index].active;
    setReactiveFaqs(newFaqs);
  }

  const openTokenomics = () => {
    window.open(Tokenomics);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);
  
  return (
    <div className='manilla-token'>
      <div className='banner'>
        <div className='header-spacer'></div>
        <div className='text-center pb-5 w90 max900'>
          <h2 className=''>The Manilla Token - MNLA</h2>
          <p className='increased'>
            The token empowering the Manilla Community
          </p>
        </div>
      </div>
      <div className='w90 max1100 py-5'>

        <div className='row'>
          <div className='col-md-6 center-info'>
            <div className='imh w90 py-4' data-aos='zoom-out'>
              <img src={stackedCoins} className='' alt="" />
            </div>
          </div>
          <div className='col-md-6 center-info'>
            <div className='w90 center-mobile'>
              <p>
                MNLA is the token that powers the whole Manilla Finance ecosystem.. It’s the rocket fuel of the growing 
                infrastructure that we are continuously developing. At this time however, we have allowed other high 
                ranking tokens that have reached their full valuation to play a central role in the ecosystem but as we 
                continue to build and grow the platform it’s only natural that MNLA will evolve to a price discovery stage 
                and subsequently full valuation also. Once that happens, MNLA will proceed to be the major token for 
                utility bills payment and fees deduction.
              </p>
            </div>
          </div>
        </div>
        <div className='floating-stats' data-aos='zoom-out'>
          <div>
            <h6>1,000,000,000</h6>
            <p>Total MNLA Supply</p>
          </div>
          <span></span>
          <div>
            <h6>0.00</h6>
            <p>MNLA Price</p>
          </div>
          <span></span>
          <div>
            <h6>0.00</h6>
            <p>Circulating Supply</p>
          </div>
          <span></span>
          <div>
            <h6>0.00</h6>
            <p>24hrs Volume</p>
          </div>
          <span></span>
          <div>
            <h6>0.00</h6>
            <p>Total Burns</p>
          </div>
        </div>
      </div>
      <div className='where-to'>
        <div className='w90 max1000' data-aos="fade-up">
          <h3 className='text-center'>Where to Buy MNLA</h3>
          <div className='row'>
            <div className='col-md-6 center-info'>
              <div className='w90 center-mobile'>
                <p>
                  MNLA can be bought from any of the exchanges the token will be listed on upon its launch. Its journey will 
                  start from Uniswap DEX and subsequently other industry leading CEX. Once launched, links will be provided to 
                  access the exchanges directly from this page.
                </p>
              </div>
            </div>
            <div className='col-md-6 center-info'>
              <div className='imh w90 max350 py-4' data-aos='zoom-out'>
                <img src={whereToBuy} className='' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='w90 max800 py-5' data-aos="fade-up">
        <h3 className='text-center py-4'>MNLA Tokenomics</h3>
        <div className='row'>
          <div className='col-md-6 center-info'>
            <div className='imh w90 max350 py-4' data-aos='fade-right'>
              <img src={tokenomicsChart} className='' alt="" />
            </div>
          </div>
          <div className='col-md-6 center-info'>
            <div className='imh w90 max250 py-4' data-aos='fade-left'>
              <img src={tokenomicsChartLegend} className='' alt="" />
            </div>
          </div>
        </div>
        <div className=''>
          <hr />
        </div>
        <div className='imh w90 max350 py-4 text-center' data-aos='zoom-out'>
          <img src={tokenomicsBook} className='clickable hover-zoom' alt="" onClick={openTokenomics} />
          <p onClick={openTokenomics} className='clickable'>Download Tokenomics</p>
        </div>
      </div>

      <div className='where-to'>
        <div className='w90 max1100' data-aos="fade-up">
          <div className='row'>
            <div className='col-md-6 center-info'>
              <div className='w90 center-mobile'>
                <h3 className=''>Loyalty Reward</h3>
                <p className='pb-4 reduced-soft'>
                  The Manilla ecosystem is a people focused platform. Thus, to benefit fully from this robust platform, 
                  the first thing to do is hold the Manilla token. Next, download the Manilla application from google play 
                  for android users or app store if you use an iphone. Once registered and your KYC approved, stake a 
                  minimum of 100,000,000 MNLA using the MNLA vault to qualify for the biggest no-tier loyalty reward in 
                  the industry.
                  <br /><br />
                  Staking Duration - 365 Days
                  <br /><br />
                  Staking Type - Lock
                </p>
                <h3 className=''>Rewards</h3>
                <p className='pb-4 reduced-soft'>
                  - Share 30% of profit generated by Manilla Finance every fiscal year. This reward is distributed in USDT, 
                  USDC, BUSD or DAI <br />
                  - Earn 10% MNLA on your staked tokens <br />
                  - Opportunity to join a private supportive community of investors in high impact early stage projects 
                  at seed round <br />
                  - Get freebies year round - from data, airtime, gift cards, utility bills, event tickets and many more <br />
                  - Huge discount on flight & hotel bookings within the Manilla app.
                </p>
                <h3 className=''>Disclaimer</h3>
                <p className='pb-4 reduced-soft'>
                  The information provided on the Manilla Finance website does not constitute investment advice, financial 
                  advice and trading advice. The Manilla Finance team does not recommend that any cryptocurrency should be 
                  bought, sold, or held by you, or state that the MNLA token is more than a simple utility token. Do your 
                  own due diligence. By purchasing the MNLA token, you agree that you are not purchasing a security or 
                  investment and you agree to hold the team harmless and not liable for any losses or taxes you may incur. 
                  You also agree that the team is presenting the token "as is" and is not legally required to provide any 
                  support or services. You should have no expectation of any form from the MNLA token and its development 
                  team. Always make sure that you are in compliance with your local laws and regulations before you make any 
                  purchase.
                </p>
              </div>
            </div>
            <div className='col-md-5 center-info'>
              <div className='face-images-holder w90 max350 py-4' data-aos='zoom-out'>
                {/* <img src={rewards} className='' alt="" /> */}
                <img src={differentFaces} className='' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w90 max1000 pt-5' data-aos="fade-up">
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
      <ContactSect/>
    </div>
  );
}

export default ManillaToken;
