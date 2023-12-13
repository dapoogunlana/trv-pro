import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { OperatorCurve } from '../../../assets/images';
import { allOperators, initialOperator } from '../../../assets/images/all-operators';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { Ioperator, IoperatorCountry } from '../../../services/constants/interfaces/data-schemas';
import './operators.scss';

function DiscoverDetail() {

  const { type } = useParams();
  const [currentItem, setCurrentItem] = useState<Ioperator>(initialOperator);
  const [countries, setCountries] = useState<IoperatorCountry[]>([]);

  const openCountry = (index: number) => {
    const newCountryList = [...countries] ;
    newCountryList[index].active = !newCountryList[index].active;
    setCountries(newCountryList);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const operatorType = allOperators.find((item) => item.code === type);
    if (operatorType) {
      setCurrentItem(operatorType);
      setCountries(operatorType.data.countries || []);
    }
  }, [type]);
  
  return (
    <div className='full-operators'>
      <div className='banner'>
        <div className='curve-holder'>
          <img src={OperatorCurve} alt="" />
        </div>
        <div className='header-spacer'></div>
        <div className='topic-space'>
          <div className='content-sect' data-aos="fade-in">
            <h3 className='pb-3'>{currentItem.data?.title}</h3>
            <p>{currentItem.data?.brief}</p>
          </div>
          <div className='img-sect' data-aos="zoom-in" data-aos-delay="500">
            <img src={currentItem.bannerImage} alt="" />
          </div>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1100 py-3'>
          <div>
            {
              currentItem && <div>
                {
                  currentItem.type === 1 ?
                  <div>
                    <h2>Operators</h2>
                    <div className='grid5b2'>
                      {currentItem.data.operators?.map((operator, index: number) => {
                        return <div className="operator_image" key={index} data-aos="zoom-in">
                          <div className='holder'>
                            <div className='im' style={{backgroundImage: `url(${operator.image})`}}></div>
                          </div>
                        </div>
                      })}
                    </div>
                  </div> :
                  <div>
                    <h2>Countries</h2>
                    {currentItem.data?.countries?.map((country, index) => {
                      return <div className="item my-4" key={index} onClick={() => openCountry(index)}>
                        <div className={'spread-info py-2 clickable ' + (country.active ? 'active-country' : 'country')}>
                          <h6 className="increased-soft mb-0">{country.country}</h6>
                          {
                            country.active ? 
                            <i className={"fa-solid fa-circle-chevron-down increased full " + (country.active ? 'full-view' : '')}></i> :
                            <i className={"fa-solid fa-circle-chevron-down increased full " + (country.active ? 'full-view' : '')}></i>
                          }
                        </div>
                        <div className={"operator grid5b2" + (country.active ? ' full' : '')}>
                          {country.operators?.map((operator, operatorIndex: number) => {
                            return <div className="operator_image" key={operatorIndex} data-aos="zoom-in" data-aos-delay={operatorIndex * 100}>
                              <div className='holder'>
                                <div className='im' style={{backgroundImage: `url(${operator.image})`}}></div>
                              </div>
                            </div>
                          })}
                        </div>
                      </div>
                    })}
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>

      <ContactSect/>
    </div>
  );
}

export default DiscoverDetail;
