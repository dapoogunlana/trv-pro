
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import IncrementalCountComponent from '../../../../../components/base-components/incremental-count/incremental-count';
import { iAdvancedInfo } from '../add-shortlet-data';
import './advanced-info.scss';
import CounterComponent from './counter-comp/counter-comp';

function AdvancedInfoSect({data, revert, proceed}: {data: iAdvancedInfo, revert: Function, proceed: Function}) {

  const [facilityInfo, setFacilityInfo] = useState<iAdvancedInfo>(data);
  const [imageList, setImageList] = useState([])

  const openUpload = () => {
    document.getElementById('gallery-upload')?.click();
  }

  const selectImages = (e: any) => {
    const files = e.target.files;
    console.log({files});
  }

  const updateFacilityInfo = (count: any, key: string) => {
    const newFacility: any = {...facilityInfo};
    newFacility[key] = count;
    setFacilityInfo(newFacility);
  }

  const updateFacilityTickInfo = (key: string) => {
    const newFacility: any = {...facilityInfo};
    newFacility[key] = newFacility[key] === 1 ? 0 : 1;
    setFacilityInfo(newFacility);
  }

  const previous = () => {
    revert(facilityInfo);
  }
  const forward = () => {
    proceed(facilityInfo);
  }

  useEffect(() => {
    console.log({facilityInfo})
  }, [facilityInfo]);
  
  return (
    <div className='advanced-info'>
      <div className='gallery'>
        <h4 className='f700'>Gallery</h4>
        <div className='row'>
          <div className='col-md-8'>
            <div className='notice-card'>
              <p className='mb-1'>
                Upload a minimum of 10 images of your hotel here. This should include hotel exteriors and the interiors of each room and facility available.
              </p>
              <p className=''>
                <span className='f500'>Important guidelines:</span> 1200x800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png
              </p>
            </div>
          </div>
          <div className='col-md-4 center-info'>
            <div className='upload-button center-info my-3' onClick={openUpload}>
              <input type="file" multiple id='gallery-upload' onChange={selectImages} />
              <p>Upload Images</p>
              <FontAwesomeIcon icon={'upload'} className='icon' />
            </div>
          </div>
          <div className='col-12'>
            <div className='image-container'>
              {}
            </div>
          </div>
        </div>
      </div>
      <div className='full-list'>
        <div className='w90 max1100'>
          <h4 className='blue-tx f700 pt-4'>Categories of Rooms in <span className='purple-tx'>Your Shortlet</span></h4>
          <div className='row pb-3'>
            <div className='col-xl-3 col-md-6 py-3'>
              <div className='selection-grid-big'>
                <div className='tick-side'>
                  <IncrementalCountComponent forcedWhite verticalCount updateCount={(count: any) => updateFacilityInfo(count, 'single')} count={facilityInfo.single} />
                </div>
                <div className='writeup-side'>
                  <h6 className='ps-3 f700 mb-0'>Single</h6>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 py-3'>
              <div className='selection-grid-big'>
                <div className='tick-side'>
                  <IncrementalCountComponent forcedWhite verticalCount updateCount={(count: any) => updateFacilityInfo(count, 'suites')} count={facilityInfo.suites} />
                </div>
                <div className='writeup-side'>
                  <h6 className='ps-3 f700 mb-0'>Suites</h6>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 py-3'>
              <div className='selection-grid-big'>
                <div className='tick-side'>
                  <IncrementalCountComponent forcedWhite verticalCount updateCount={(count: any) => updateFacilityInfo(count, 'executive')} count={facilityInfo.executive} />
                </div>
                <div className='writeup-side'>
                  <h6 className='ps-3 f700 mb-0'>Executive</h6>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 py-3'>
              <div className='selection-grid-big'>
                <div className='tick-side'>
                  <IncrementalCountComponent forcedWhite verticalCount updateCount={(count: any) => updateFacilityInfo(count, 'double_chambers')} count={facilityInfo.double_chambers} />
                </div>
                <div className='writeup-side'>
                  <h6 className='ps-3 f700 mb-0'>Double Chambers</h6>
                </div>
              </div>
            </div>
          </div>


          <h4 className='blue-tx f700 pt-4 pb-2'>Add a short description  <span className='orange-tx'>of your place.</span></h4>
          <div className='description-area'>
            <textarea 
              value={facilityInfo.description}
              placeholder='Show what makes your property stand out.'
              onChange={(ev: any) => updateFacilityInfo(ev.target.value, 'description')}
            ></textarea>
          </div>

          <h4 className='blue-tx f700 pt-4'>Add facilities available  <span className='purple-tx'>at your place.</span></h4>
          <div className='row pb-3'>
            <div className='col-lg-3 col-md-6 py-2'>
              <div className='w90 max250'>
                  <CounterComponent updateCount={(count: any) => updateFacilityInfo(count, 'bedrooms')} minimum={1} count={facilityInfo.bedrooms} className='number-medium reduced-soft-im'>
                    Bedroom{facilityInfo.bedrooms !== 1 && 's'}
                  </CounterComponent>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 py-2'>
              <div className='w90 max250'>
                  <CounterComponent updateCount={(count: any) => updateFacilityInfo(count, 'bathrooms')} minimum={1} count={facilityInfo.bathrooms} className='number-medium reduced-soft-im'>
                    Bathroom{facilityInfo.bathrooms !== 1 && 's'}
                  </CounterComponent>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 py-2'>
              <div className='w90 max250'>
                  <CounterComponent updateCount={(count: any) => updateFacilityInfo(count, 'parking')} count={facilityInfo.parking} className='number-medium reduced-soft-im'>
                    Parking
                  </CounterComponent>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 py-2'>
              <div className='w90 max250'>
                  <CounterComponent updateCount={(count: any) => updateFacilityInfo(count, 'pool')} count={facilityInfo.pool} className='number-medium reduced-soft-im'>
                    Pool{facilityInfo.pool !== 1 && 's'}
                  </CounterComponent>
              </div>
            </div>
          </div>

          <h3 className='f700 pt-4'>Apartment Features by Categories</h3>

          <h4 className='blue-tx f700 pt-4 pb-3'>Bathroom<span className='purple-tx'>room</span></h4>
          <div className='stack-flex pb-3'>
            <div className={'selection-grid' + (facilityInfo.bathtube ? ' active-feature' : '')} onClick={() => updateFacilityTickInfo('bathtube')}>
              <div className='tick-side'><input type={'checkbox'} checked={!!facilityInfo.bathtube} /></div>
              <div className='writeup-side-small'><h6>Bathtub</h6></div>
            </div>
            <div className={'selection-grid' + (facilityInfo.bathtube ? ' active-feature' : '')} onClick={() => updateFacilityTickInfo('bathtube')}>
              <div className='tick-side'><input type={'checkbox'} checked={!!facilityInfo.bathtube} /></div>
              <div className='writeup-side-small'><h6>Bathtub</h6></div>
            </div>
            <div className={'selection-grid' + (facilityInfo.bathtube ? ' active-feature' : '')} onClick={() => updateFacilityTickInfo('bathtube')}>
              <div className='tick-side'><input type={'checkbox'} checked={!!facilityInfo.bathtube} /></div>
              <div className='writeup-side-small'><h6>Bathtub</h6></div>
            </div>
            <div className={'selection-grid' + (facilityInfo.bathtube ? ' active-feature' : '')} onClick={() => updateFacilityTickInfo('bathtube')}>
              <div className='tick-side'><input type={'checkbox'} checked={!!facilityInfo.bathtube} /></div>
              <div className='writeup-side-small'><h6>Bathtub</h6></div>
            </div>
            <div className={'selection-grid' + (facilityInfo.bathtube ? ' active-feature' : '')} onClick={() => updateFacilityTickInfo('bathtube')}>
              <div className='tick-side'><input type={'checkbox'} checked={!!facilityInfo.bathtube} /></div>
              <div className='writeup-side-small'><h6>Bathtub</h6></div>
            </div>
            <div className={'selection-grid' + (facilityInfo.bathtube ? ' active-feature' : '')} onClick={() => updateFacilityTickInfo('bathtube')}>
              <div className='tick-side'><input type={'checkbox'} checked={!!facilityInfo.bathtube} /></div>
              <div className='writeup-side-small'><h6>Bathtub</h6></div>
            </div>
            <div className={'selection-grid' + (facilityInfo.bathtube ? ' active-feature' : '')} onClick={() => updateFacilityTickInfo('bathtube')}>
              <div className='tick-side'><input type={'checkbox'} checked={!!facilityInfo.bathtube} /></div>
              <div className='writeup-side-small'><h6>Bathtub</h6></div>
            </div>
            <div className={'selection-grid' + (facilityInfo.bathtube ? ' active-feature' : '')} onClick={() => updateFacilityTickInfo('bathtube')}>
              <div className='tick-side'><input type={'checkbox'} checked={!!facilityInfo.bathtube} /></div>
              <div className='writeup-side-small'><h6>Bathtub</h6></div>
            </div>
            <div className={'selection-grid' + (facilityInfo.bathtube ? ' active-feature' : '')} onClick={() => updateFacilityTickInfo('bathtube')}>
              <div className='tick-side'><input type={'checkbox'} checked={!!facilityInfo.bathtube} /></div>
              <div className='writeup-side-small'><h6>Bathtub</h6></div>
            </div>
          </div>
          
          <div className='spread-info'>
            <button type='button' className='recede-button px-4' onClick={previous}>Previous</button>
            <button type='button' className='proceed-button px-3' onClick={forward}>Save &amp; Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedInfoSect;
