
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiLinks } from '../../../../../config/environment';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { sendRequest } from '../../../../../services/utils/request';
import { exchangeList } from './pre-info-data';
import WhyUs from '../why-us/why-us';
import './pre-info.scss';

function About(props: any) {

  const [currencyList, setCurrencyList] = useState<any[]>([]);

  useEffect(() => {
    sendRequest({
        url: apiLinks.cryptoCompare,
        external: true
    }, (res: any) => {
      const selectedList: any = [];
      res.Data.map((item: any) => {
        if(exchangeList.indexOf(item.RAW?.USD?.FROMSYMBOL) !== -1) {
          selectedList.push(item);
        }
      });
      setCurrencyList(selectedList);
    }, () => {});
  },[props]);

  return (
    <>
      <div className='crypto-stats'>
        <h3 className='text-center mt-5 pt-5'>Trade Crypto Assets with Your Peers</h3>
        <div className='stats-card' data-aos="flip-left">
          <div className='overflow-holder'>
            {currencyList.map((item, index) => {
              const rise = ((item.RAW.USD.CHANGEHOUR / item.RAW.USD.PRICE) * 100);
              return <div className='stats-bar py-2' key={index}>
                <div className='imh max50'>
                  <img src={'https://www.cryptocompare.com' + item.CoinInfo.ImageUrl} alt="" />
                </div>
                <div className='spread-info-front'>
                  <p className='mb-0 price'>
                    {item.CoinInfo.FullName}
                    <span className='ml-3 mb-0 faint-font reduced'>{item.CoinInfo.Internal}</span>
                  </p>
                </div>
                <div className='spread-info-front pl-4'>
                  <h6 className='mb-0 increased'>{item.DISPLAY.USD.PRICE}</h6>
                </div>
                <div className='spread-info-front'>
                  <p className={'mb-0 ' + (rise >= 0 ? 'c-dark-green' : 'c-red')}>
                    { rise >= 0 ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}
                    {rise.toFixed(2) + '%'}
                  </p>
                </div>
                <div className='spread-info-front'>
                  <h6 className='mb-0'>{item.DISPLAY.USD.TOPTIERVOLUME24HOURTO}</h6>
                </div>
                <div className='spread-info-front'>
                  <button className='hollow-button-c shadowed rad-7-im ml-3'>Trade</button>
                </div>
              </div>
            })}
          </div>
          <div className='text-center'>
            <Link to={routeConstants.cryptoCurrencies}>
              <button className='solid-button-2c'>View More</button>
            </Link>
          </div>
          
        </div>
      </div>
      <WhyUs spaceUp={true} />
    </>
  );
}

export default About;
