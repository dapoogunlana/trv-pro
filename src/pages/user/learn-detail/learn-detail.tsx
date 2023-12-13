import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { CalendarIcon } from '../../../assets/images';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import HalfBanner from '../../../components/block-components/half-banner/half-banner';
import { convertStringForUrl, filterUnsecureHTML, formatDate } from '../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../services/utils/request';
import { Helmet } from 'react-helmet';
import { IlearnData, learnDataInitialState, learnList } from '../learn/learn-data';
import './learn-detail.scss';

function LearnDetail(props: any) {

  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState<IlearnData>(learnDataInitialState);

  const returnToList = () => {
    window.history.back();
  }

  const copyLearnLink = () => {
    const textarea = document.createElement('textarea');
    textarea.value = `https://manilla-backend.herokuapp.com/api/v4/learn/link/${id}?qp=${convertStringForUrl(currentItem.title)}`;
    textarea.id = 'textId';
    textarea.style.opacity = '0';
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    toast.success('News link copied to clipboard!');
  }
  
  const fetchLearnPosts = () => {
    sendRequest({
      url: 'learn/' + id,
    }, (res: any) => {
      console.log({started: true});
      const newItem = {
        id: res.data._id,
        image: res.data.image,
        title: res.data.topic,
        content: res.data.body.map((subItem: any) => {
          return {
            topic: subItem.sub_topic,
            point: subItem.writeup,
            subPoints: [],
          }
        }) || [],
        date: formatDate(res.data.datePosted),
      }
      if (res.data.brief) {
        newItem.content.unshift({
          topic: '',
          point: res.data.brief,
          subPoints: [],
        })
      }
      setCurrentItem(newItem);
    }, () => {});
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchLearnPosts();
    // const activeItem = learnList.find((item) => id === (item.id + '')) || learnDataInitialState;
    // setCurrentItem(activeItem);
  }, [props]);
  
  return (
    <div className='learn-detail'>
    <Helmet>
      <title>{currentItem.title}</title>
      <meta property="og:title" content={currentItem.title} />
      <meta property="og:description" content={currentItem.content[0].point} />
      <meta name="description" content={currentItem.content[0].point} />
      <meta property="og:image" content={currentItem.image}/>
    </Helmet>

      <HalfBanner>Learn</HalfBanner>

      <div className='content-body py-5'>
        <div className='w90 max800'>
          <div className='spread-info'>
            <button className='solid-button-2' onClick={returnToList}>
              <i className="fa-solid fa-arrow-rotate-left pr-2"></i>
              <span className="pr-1">Return to List</span>
            </button>
            {/* <button className='solid-button-2' onClick={copyLearnLink}>
              <i className="fa-solid fa-copy pr-2"></i>
              <span className="pr-1">Copy Link</span>
            </button> */}
          </div>
          <h6 className='text-center increased mb-4 mt-4'>{currentItem.title}</h6>
          <div className='detail-cover' data-aos="fade-up">
            <div className='display-img'>
              {/* <img src={currentItem.image} alt="" /> */}
              <div className={"im-enclose" + (currentItem.image ? ' no-bg': '')}>
                <img src={currentItem.image} alt="" />
              </div>
            </div>
            <div className='content'>
                {currentItem.content?.map((item, index: number) => {
                  return <React.Fragment key={index}>
                    <h6 className='increased mt-3'>{item.topic}</h6>
                    <p key={index}>{item.point && (<span dangerouslySetInnerHTML={{ __html: filterUnsecureHTML(item.point)}}></span>)}</p>
                    {item.subPoints?.length > 0 && (
                      <ul className='pl-4'>
                        {item.subPoints.map((subItem, subIndex) => <li key={subIndex}>{subItem}</li>)}
                      </ul>
                    )}
                  </React.Fragment>
                })}
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

export default LearnDetail;
