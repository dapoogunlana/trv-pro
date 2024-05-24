import React, { useEffect, useState } from 'react';
import './flight-search-filter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FlightSearchFilter(props: any) {

  const [selectedTab, setSelectedTab] = useState<'cheapest' | 'best' | 'quickest'>('best');
  
  const updateSelectedTab = (tab: 'cheapest' | 'best' | 'quickest') => {
    setSelectedTab(tab);
  }
  
  return (
    <div className='row filter-holder'>
      <div className='col-lg-3'>
        <h3 className='f700 blue-tx pb-3'>Filters</h3>
        <div className='filter'>
          <div className='spread-info'>
            <p className='mb-0 f600'>Price</p>
            <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
          </div>
          <div className='info-grid py-2'>
            <input type="number" name="" id="" className='simple-input' placeholder='Minimum' />
            <input type="number" name="" id="" className='simple-input' placeholder='Maximum' />
          </div>
          <hr className='' />
          <div className='spread-info'>
            <p className='mb-0 f600'>Depature Time</p>
            <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
          </div>
          <div className='info-grid py-2'>
            <input type="text" name="" id="" className='simple-input' placeholder='Earliest' />
            <input type="text" name="" id="" className='simple-input' placeholder='Latest' />
          </div>
          <hr />
          <div className='spread-info'>
            <p className='mb-0 f600'>Airlines</p>
            <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
          </div>
          <div className='py-2'>
            <input type="checkbox" name="" id="" />
            <span className='reduced-soft-im f500 px-2'>Emirates</span>
          </div>
          <div className='pb-2'>
            <input type="checkbox" name="" id="" />
            <span className='reduced-soft-im f500 px-2'>Fly Dubai</span>
          </div>
          <div className='pb-2'>
            <input type="checkbox" name="" id="" />
            <span className='reduced-soft-im f500 px-2'>Qatar Airways</span>
          </div>
          <div className='pb-2'>
            <input type="checkbox" name="" id="" />
            <span className='reduced-soft-im f500 px-2'>Air Peace</span>
          </div>
          <div className='pb-2'>
            <input type="checkbox" name="" id="" />
            <span className='reduced-soft-im f500 px-2'>Etihad</span>
          </div>
          <hr />
          <div className='spread-info'>
            <p className='mb-0 f600'>Trips</p>
            <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
          </div>
          <div className='py-2'>
            <input type="checkbox" name="" id="" />
            <span className='reduced-soft-im f500 px-2'>Round trip</span>
          </div>
          <div className='pb-2'>
            <input type="checkbox" name="" id="" />
            <span className='reduced-soft-im f500 px-2'>One Way</span>
          </div>
          <div className='pb-2'>
            <input type="checkbox" name="" id="" />
            <span className='reduced-soft-im f500 px-2'>Multi-City</span>
          </div>
        </div>
      </div>
      <div className='col-lg-9'>
        <div className='pad-web'>
          <div className='category-tabs'>
            <div className={'category-tab' + (selectedTab ==='cheapest' ? ' active' : '')} onClick={() => updateSelectedTab('cheapest')}>
              <h6 className='mb-0'>Cheapest</h6>
              <p className='mb-0 number-light'>$99. 2h 18m</p>
            </div>
            <div className='center-info py-2'>
              <div className='splitter'></div>
            </div>
            <div className={'category-tab' + (selectedTab ==='best' ? ' active' : '')} onClick={() => updateSelectedTab('best')}>
              <h6 className='mb-0'>Best</h6>
              <p className='mb-0 number-light'>$99. 2h 18m</p>
            </div>
            <div className='center-info py-2'>
              <div className='splitter'></div>
            </div>
            <div className={'category-tab' + (selectedTab ==='quickest' ? ' active' : '')} onClick={() => updateSelectedTab('quickest')}>
              <h6 className='mb-0'>Quickest</h6>
              <p className='mb-0 number-light'>$99. 2h 18m</p>
            </div>
          </div>

          {props.children}

        </div>
      </div>
    </div>
  );
}

export default FlightSearchFilter;
