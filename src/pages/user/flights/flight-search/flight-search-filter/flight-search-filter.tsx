import React, { useEffect, useState } from 'react';
import './flight-search-filter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFilter, initialFilter, validateAirlineFIlterInputs } from './flight-filter-service';

interface IFilterProps {
  list: any[];
  updateList: Function;
  children: any;
  status?: boolean;
}

function FlightSearchFilter({list, updateList, children, status}: IFilterProps) {

  const [selectedTab, setSelectedTab] = useState<'cheapest' | 'best' | 'quickest'>('best');
  const [filterOpened, setFilterOpened] = useState(false);
  const [filter, setFilter] = useState<IFilter>(initialFilter());
  const [canFilter, setCanFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [airlineList, setAirlineList] = useState<{name: string, code: string}[]>([]);

  const changeFilterState = (state: boolean) => {
    const selector = window.innerWidth > 991 ? false : state;
    setFilterOpened(selector);
  }
  
  const updateSelectedTab = (tab: 'cheapest' | 'best' | 'quickest') => {
    setSelectedTab(tab);
  }

  const updateFilter = (ev: any, key: string) => {
    const value = ev.target.value;
    const newFIlter: any = {...filter};
    newFIlter[key] = value;
    setFilter(newFIlter);
  }

  const validateFilter = (key: string) => {
    const { updatedFilter, changed } = validateAirlineFIlterInputs(key, filter);
    if(changed) setFilter(updatedFilter);
  }

  const selectAirline = (airline: string) => {
    const newFIlter = {...filter};
    if(newFIlter.airlines.includes(airline)) {
      newFIlter.airlines = newFIlter.airlines.filter(item => item !== airline);
    } else {
      newFIlter.airlines.push(airline);
    }
    setFilter(newFIlter);
  }

  const clearFilter = () => {
    setFilter(initialFilter());
    setActiveFilter(false);
    updateList(list);
  }

  const searchFilter = () => {
    let filteredList = [...list];
    if(filter.airlines.length > 0){
      const tempList: any = [];
      filteredList.map((item: any) => {
        filter.airlines.map(airline => {
          if(item?.outbound[0]?.airline_details?.name === airline && !tempList.includes(item)) {tempList.push(item)}
        })
      });
      filteredList = tempList;
    }
    if(filter.min){
      const tempList: any = [];
      filteredList.map((item: any) => {
        if(item.amount >= (filter.min || 0)) {
          tempList.push(item)
        }
      });
      filteredList = tempList;
    }
    if(filter.max){
      const tempList: any = [];
      filteredList.map((item: any) => {
        if(item.amount <= (filter.max || 0)) {
          tempList.push(item)
        }
      });
      filteredList = tempList;
      // filteredList = filteredList.map((item: any) => item.amount <= (filter.max || 0));
    }
    setActiveFilter(true);
    updateList(filteredList);
  }

  useEffect(() => {
    const airlineObg: any = {};
    const airlines: {name: string, code: string}[] = [];
    list.map((flight: any) => {
      airlineObg[flight?.outbound[0]?.airline_details?.name] = {
        name: flight?.outbound[0]?.airline_details?.name,
        code: flight?.outbound[0]?.airline_details?.code
      };
    });
    for(let item in airlineObg) {
      if(item && airlineObg[item]) {
        airlines.push(airlineObg[item]);
      }
    }
    setAirlineList(airlines);
    console.log({list})
  }, [list]);

  useEffect(() => {
    if(filter.min || filter.max || filter.earlyestTime || filter.latestTime || filter.airlines.length > 0) {
      setCanFilter(true);
    } else {
      setCanFilter(false);
    }
  }, [filter]);
  
  return (
    <div className='row filter-holder'>
      <div className='col-lg-3'>
        <div className='spread-info pb-4'>
          <h3 className='f700 blue-tx mb-0'>Filters</h3>
          {!filterOpened && <FontAwesomeIcon icon={'chevron-down'} className='increased' onClick={() => changeFilterState(true)} />}
          {filterOpened && <FontAwesomeIcon icon={'chevron-up'} className='increased' onClick={() => changeFilterState(false)} />}
        </div>
        <div className={'filter ' + (filterOpened ? 'opened-filter' : 'closed-filter')}>
          <div className='spread-info'>
            <p className='mb-0 f600'>Price</p>
            <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
          </div>
          <div className='info-grid py-2'>
            <input
              type="number"
              name="min"
              value={filter.min}
              onChange={(e) => updateFilter(e, 'min')}
              className='simple-input'
              placeholder='Minimum'
            />
            <input
              type="number"
              name="max"
              value={filter.max}
              onChange={(e) => updateFilter(e, 'max')}
              onBlur={() => validateFilter('')}
              className='simple-input'
              placeholder='Maximum'
            />
          </div>
          <hr className='' />
          <div className='spread-info'>
            <p className='mb-0 f600'>Depature Time</p>
            <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
          </div>
          <div className='info-grid py-2'>
            <input type="text" value={filter.earlyestTime} onChange={(e) => updateFilter(e, 'earlyestTime')} className='simple-input' placeholder='Earliest' />
            <input type="text" value={filter.latestTime} onChange={(e) => updateFilter(e, 'latestTime')} className='simple-input' placeholder='Latest' />
          </div>
          <hr />
          <div className='spread-info'>
            <p className='mb-0 f600'>Airlines</p>
            <FontAwesomeIcon icon={'chevron-up'} className='faint-tx reduced' />
          </div>
          {
            airlineList.map((airline, index) => (
              <div className='pt-2' key={index}>
                <input
                  type="checkbox"
                  value={airline.name}
                  checked={filter.airlines.includes(airline.name)}
                  onChange={() => selectAirline(airline.name)}
                  name={airline.name}
                />
                <span className='reduced-soft-im f500 px-2'>{airline.name}</span>
              </div>
            ))
          }
          {/* <div className='pb-2'>
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
          </div> */}
          <hr />
          {/* <div className='spread-info'>
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
          </div> */}
          <div className='info-grid py-2'>
            <button type="button" className={'red-button' + ((canFilter || activeFilter) ? '' : ' deactivated')} onClick={clearFilter}>Clear</button>
            <button type="button" className={'purple-button' + (canFilter ? '' : ' deactivated')} onClick={searchFilter}>Filter</button>
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

          {children}

        </div>
      </div>
    </div>
  );
}

export default FlightSearchFilter;
