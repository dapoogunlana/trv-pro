import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '../../../assets/images';
import { learnList as staticLearnList } from './learn-data';
import { routeConstants } from '../../../services/constants/route-constants';
import './learn.scss';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import { sendRequest } from '../../../services/utils/request';
import { clipToLength, formatDate } from '../../../services/utils/data-manipulation-utilits';

function Learn(props: any) {

  const navigate = useNavigate();
  const [learnList, setLearnlist] = useState<any[]>([]);

  const goToItem = (id: number) => {
    navigate(`/${routeConstants.learn}/${id}`);
  }
  
  const fetchNewsPosts = () => {
    sendRequest({
      url: 'learn',
    }, (res: any) => {
      const selectedList: any[] = res.data.map((item: any) => {
        const newItem = {
          id: item._id,
          image: item.image,
          title: item.topic,
          content: item.body.map((subItem: any) => {
            return {
              topic: subItem.sub_topic,
              point: subItem.writeup,
              subPoints: [],
            }
          }) || [],
          date: formatDate(item.datePosted),
        }
        if (item.brief) {
          newItem.content.unshift({
            topic: '',
            point: item.brief,
            subPoints: [],
          })
        }
        return newItem;
      });
      setLearnlist(selectedList);
      console.log({selectedList});
    }, () => {});
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNewsPosts();
    // setLearnlist(staticLearnList);
  }, [props]);
  
  return (
    <div className='learn'>
      <div className='w90 max1200 py-5'>
        <div className='header-spacer'></div>
        <h2 className='pt-3'>Learn</h2>

        <hr className='mb-0' />

        {
          learnList.length > 0 &&
          <div className='row' data-aos="fade-up">
          <div className='col-md-6 center-info-front py-4'>
            <div className='imh max500 shadowed rad-10'>
                <div className={"im-enclose shadowed rad-10" + (learnList[0].image ? ' no-bg': '')}>
                  <img src={learnList[0].image} alt="" />
                </div>
            </div>
          </div>
          <div className='col-md-6 center-info'>
            <div className='max500'>
              {/* <p className='c-faint-font mb-2'>{learnList[0].date}</p> */}
              <h3>{learnList[0].title}</h3>
              <p>{clipToLength(learnList[0].content[0].point || learnList[0].content[0].topic || learnList[0].content[1].point, 100)}</p>
              <p className='c-pr-blue increased clickable' onClick={() => goToItem(learnList[0].id)}>Read More</p>
            </div>
          </div>
        </div>
        }

        <hr className='pt-0 mt-0' />

        <div className='row'>
            {learnList.map((item, index) => {
              if (index > 0 && index < 4) {
                return <div className='col-lg-4 colmd-6 py-3' data-aos="fade-up" key={index}>
                  <div className='imh max500 shadowed rad-10'>
                    <div className={"im-enclose shadowed rad-10" + (item.image ? ' no-bg': '')}>
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <div className='max500 pt-3'>
                    {/* <p className='c-faint-font mb-2'>{item.date}</p> */}
                    <h4 className='increased'>{item.title}</h4>
                    <p className='c-pr-blue increased-soft clickable' onClick={() => goToItem(item.id)}>Read More</p>
                  </div>
                </div>
              }
            })}
          
        </div>

        <hr className='pt-0 mt-0' />

        {learnList.map((item, index) => {
          if (index > 3 ) {
            return <React.Fragment key={index}>
              <div className='row' >
              <div className='col-md-6 center-info-front py-4' data-aos="fade-up">
                <div className='imh max500 shadowed rad-10'>
                  <div className={"im-enclose shadowed rad-10" + (item.image ? ' no-bg': '')}>
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
              <div className='col-md-6 center-info'>
                <div className='max500'>
                  {/* <p className='c-faint-font mb-2'>{item.date}</p> */}
                  <h3>{item.title}</h3>
                  <p>{clipToLength(item.content[0].point || item.content[0].topic || item.content[1].point, 100)}</p>
                  <p className='c-pr-blue increased clickable' onClick={() => goToItem(item.id)}>Read More</p>
                </div>
              </div>
            </div>
            <hr className='pt-0 mt-0' />
            </React.Fragment>
          }
        })}
      </div>



      {/* <div className='top-band'>
        <div className='header-spacer'></div>
        <div className='topic-space' data-aos="fade-in">
          <h2>Learn</h2>
        </div>
      </div>
      <div className='content-body py-5'>
        <div className='w90 max1200 py-5'></div>
        <div className='w90 max1200'>
          <div className='row'>
            {learnList.map((item, index) => {
              return   <div className='col-lg-4 col-md-6 py-3' key={index}>
              <div className='cover' data-aos="fade-up">
                <div className='display-img'>
                  <div className={"im-enclose shadowed rad-10" + (item.image ? ' no-bg': '')}>
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className='content'>
                  <h6 className='mb- increased'>{item.title}</h6>
                  <p>{clipToLength(item.content[0].point, 100)}</p>
                  <div className='full-button'>
                    <button className='solid-button-2c' onClick={() => goToItem(item.id)}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div> */}

      <ContactSect/>
    </div>
  );
}

export default Learn;
