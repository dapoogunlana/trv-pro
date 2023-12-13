import React, {  } from 'react';
import { waysToTradeImg } from '../../../../../assets/images';
import { tradeWayList } from './trade-ways-data';
import './trade-ways.scss';

function TradeWays() {
  return (
    <div className='trade-ways py-5'>
      <div className='w96 max1200 py-4'>
        <h3 className='text-center'>Over 20 Ways To Trade</h3>
        <div className='row'>
          <div className='col-md-6 center-info py-3'>
            <div className='imh w90 max450 hover-rotate'>
              <div data-aos='zoom-in'>
                <img src={waysToTradeImg} alt="" />
              </div>
            </div>
          </div>
          <div className='col-md-6 center-info py-3'>
            <div className='imh w90 max450'>
              {tradeWayList.map((item, index) => {
                return  <div className='service-card' key={index} data-aos='fade-left' data-aos-delay={index * 100}>
                  <div className='description-grid-50'>
                    <div className='imh'>
                      <img src={item.icon} alt="" />
                    </div>
                    <p className='increased mb-0 pl-3 pt-2'>{item.name}</p>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeWays;
