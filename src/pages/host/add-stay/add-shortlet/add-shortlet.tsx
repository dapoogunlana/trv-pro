import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import BasicInfoSect from './-basic-info/basic-info';
import { iAdvancedInfo, iBasicInfo, sampleAdvancedInfo, sampleBasicInfo } from './add-shortlet-data';
import './add-shortlet.scss';
import AdvancedInfoSect from './advanced-info/advanced-info';
import PublishPropertySect from './publish-property/publish-property';

function AddShortletPage(props: any) {

  const [selectedTab, setSelectedTab] = useState<'basic information' | 'advance information' | 'publish property'>('basic information');
  const [basicInfoData, setBasicInfoData] = useState<iBasicInfo>(sampleBasicInfo);
  const [advancedInfoData, setAdvancedInfoData] = useState<iAdvancedInfo>(sampleAdvancedInfo);

  const alterSelectedTab = (tab: 'basic information' | 'advance information' | 'publish property') => {
    window.scrollTo(0, 0);
    setSelectedTab(tab); 
  }

  const proceedToAdvanced = (data: iBasicInfo) => {
    setBasicInfoData(data);
    console.log({amber: data});
    alterSelectedTab('advance information');
  }

  const revertToBasic = (data: iAdvancedInfo) => {
    setAdvancedInfoData(data);
    alterSelectedTab('basic information');
  }

  const proceedToPublish = (data: iAdvancedInfo) => {
    setAdvancedInfoData(data);
    alterSelectedTab('publish property');
  }

  const revertToAdvanced = () => {
    alterSelectedTab('advance information');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);
  
  return (
    <div className='add-shortlet'>
      <div className='category-tabs'>
        <div className={'category-tab' + (selectedTab ==='basic information' ? ' active' : '')} onClick={() => setSelectedTab('basic information')}>
          <div className='center-info py-2'>
            <FontAwesomeIcon icon={'layer-group'} className={selectedTab === 'basic information' ? ' purple-tx' : ''} />
            <h6 className='mb-0'>Basic <span className='m-close-md'>Information</span></h6>
          </div>
        </div>
        <div className={'category-tab' + (selectedTab ==='advance information' ? ' active' : '')} onClick={() => setSelectedTab('advance information')}>
          <div className='center-info py-2'>
            <FontAwesomeIcon icon={'clipboard'} className={selectedTab === 'advance information' ? ' purple-tx' : ''} />
            <h6 className='mb-0'>Advance <span className='m-close-md'>Information</span></h6>
          </div>
        </div>
        <div className={'category-tab' + (selectedTab ==='publish property' ? ' active' : '')} onClick={() => setSelectedTab('publish property')}>
          <div className='center-info py-2'>
            <FontAwesomeIcon icon={'play-circle'} className={selectedTab === 'publish property' ? ' purple-tx' : ''} />
            <h6 className='mb-0'>Publish <span className='m-close-md'>Property</span></h6>
          </div>
        </div>
      </div>
      <>
        {selectedTab === 'basic information' && <BasicInfoSect data={basicInfoData} proceed={proceedToAdvanced} />}
        {selectedTab === 'advance information' && <AdvancedInfoSect data={advancedInfoData} proceed={proceedToPublish} revert={revertToBasic} />}
        {selectedTab === 'publish property' && <PublishPropertySect basicData={basicInfoData} advancedData={advancedInfoData} revert={revertToAdvanced} />}
      </>
    </div>
  );
}

export default AddShortletPage;
