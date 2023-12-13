
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { apiLinks } from '../../../config/environment';
import { routeConstants } from '../../../services/constants/route-constants';
import { sendRequest } from '../../../services/utils/request';
import './crypto-list.scss';

function CryptoList(props: any) {

  const [currencyList, setCurrencyList] = useState<any[]>([]);

  useEffect(() => {
    sendRequest({
        url: apiLinks.cryptoCompare,
        external: true
    }, (res: any) => {
      const selectedList: any[] = res.Data;
      setCurrencyList(selectedList);
    }, () => {});
  },[props]);

  return (
    <>
      <div className='crypto-page'>
        <div className='banner-sect'>
          <h3 className='text-center mt-5 pt-5'>Trade Crypto Assets with Your Peers</h3>
        </div>
        <div className='stats-card' data-aos="flip-left">
          <div className='overflow-holder'>
            {currencyList.map((item, index) => {
              console.log({item});
              const rise = ((item.RAW?.USD?.CHANGEHOUR / item.RAW?.USD?.PRICE) * 100);
              return <div className='stats-bar py-2' key={index}>
                <div className='imh max50'>
                  <img src={'https://www.cryptocompare.com' + item.CoinInfo?.ImageUrl} alt="" />
                </div>
                <div className='spread-info-front'>
                  <div className='price'>
                    <span className='pr-0 mr-0 mb-0'>
                      {item.CoinInfo?.FullName}
                    </span>
                  </div>
                  <p className='pl-0 ml-0 mb-0'>
                    <span className='ml-3 mb-0 faint-font reduced'>{item.CoinInfo.Internal}</span>
                  </p>
                </div>
                <div className='spread-info-front'>
                  <h6 className='mb-0 increased'>{item.DISPLAY?.USD?.PRICE}</h6>
                </div>
                <div className='spread-info-front'>
                  <p className={'mb-0 ' + (rise >= 0 ? 'c-dark-green' : 'c-red')}>
                    { rise >= 0 ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}
                    {rise.toFixed(2) == 'NaN' ? 'Unavailable' : rise.toFixed(2) + '%'}
                  </p>
                </div>
                <div className='spread-info-front'>
                  <h6 className='mb-0'>{item.DISPLAY?.USD?.TOPTIERVOLUME24HOURTO}</h6>
                </div>
                <div className='spread-info-front'>
                  <button className='hollow-button-c shadowed rad-7-im ml-3'>Trade</button>
                </div>
              </div>
            })}
          </div>
          
        </div>
        <div className='py-5'></div>
      </div>

      <ContactSect/>
    </>
  );
}

export default CryptoList;
