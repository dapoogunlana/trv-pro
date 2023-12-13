import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CalendarIcon } from '../../../assets/images';
import { helpList } from '../help/help-data';
import { routeConstants } from '../../../services/constants/route-constants';
import './help-detail.scss';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import HalfBanner from '../../../components/block-components/half-banner/half-banner';

function HelpDetail() {

  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState<any>({});
  const [tableData, setTableData] = useState<any>({});

  const returnToList = () => {
    window.history.back();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const activeItem = helpList.find((item) => id === (item.id + '')) || {};
    setCurrentItem(activeItem);
    setTableData(currentItem?.table);
  });
  
  return (
    <div className='help-detail'>

      <HalfBanner>Help</HalfBanner>

      <div className='content-body py-5'>
        <div className='w90 max800'>
          <button className='solid-button-2' onClick={returnToList}>
            <div className='spread-info'></div>
            <i className="fa-solid fa-arrow-rotate-left pr-5"></i>
            <span className="pr-5">Return to List</span>
          </button>
          <h6 className='text-center increased mb-4 mt-4'>{currentItem.title}</h6>
          <div className='detail-cover' data-aos="fade-up">
            <div className='display-img'>
              <img src={currentItem.image} alt="" />
            </div>
            <div className='spread-info-front py-3'>
              <img src={CalendarIcon} alt="" />
              <p className='mb-0 pl-3'>{currentItem.date}</p>
            </div>
            <div className='content'>
                {currentItem.content?.map((item: any, index: number) => <p key={index}>{item}</p>)}
                {currentItem.table?.body && (
                  <table>
                    <thead>
                      <tr>
                        {tableData?.header?.map((cell: any, index: number) => {
                          return <th key={index}>{cell}</th>
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData?.body?.map((row: any, index: number) => {
                        return <tr key={index}>
                          {row.map((cell: any, cellIndex: number) => {
                            return <td key={cellIndex}>{cell}</td>
                          })}
                        </tr>
                      })}
                    </tbody>
                  </table>
                )}
            </div>
          </div>
          <button className='solid-button-2 mt-4 mb-5' onClick={returnToList}>
            <div className='spread-info'></div>
            <i className="fa-solid fa-arrow-rotate-left pr-5"></i>
            <span className="pr-5">Return to List</span>
          </button>
        </div>
      </div>

      <ContactSect/>
    </div>
  );
}

export default HelpDetail;
