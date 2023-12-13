import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CalendarIcon } from '../../../assets/images';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import HalfBanner from '../../../components/block-components/half-banner/half-banner';
import { IindustryNews } from '../../../services/constants/interfaces/data-schemas';
import { convertStringForUrl, filterUnsecureHTML, formatDate } from '../../../services/utils/data-manipulation-utilits';
import { sendRequest } from '../../../services/utils/request';
import { Helmet } from 'react-helmet';
import { newsList } from '../news/news-data';
import './news-detail.scss';
import { toast } from 'react-toastify';

function NewsDetail(props: any) {

  const initialState = {
    id: 0,
    image: '',
    title: ``,
    content: [{
        topic: '',
        subTopic: '',
        point: '',
        subPoints: [],
    }],
    date: '',
  };

  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState<IindustryNews>(initialState);

  const returnToList = () => {
    window.history.back();
  }

  const copyNewsLink = () => {
    const textarea = document.createElement('textarea');
    textarea.value = `https://manilla-backend.herokuapp.com/api/v4/blog/link/${id}?qp=${convertStringForUrl(currentItem.title)}`;
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
  
  const fetchNewsPosts = () => {
    sendRequest({
      url: 'blog/' + id,
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
    fetchNewsPosts();
    // const activeItem = newsList.find((item: any) => id === (item.id + '')) || initialState;
    // setCurrentItem(activeItem);
  }, [props]);
  
  return (
    <div className='news-detail'>
      <Helmet>
        <title>{currentItem.title}</title>
        <meta property="og:title" content={currentItem.title} />
        <meta property="og:description" content={currentItem.content[0].point} />
        <meta name="description" content={currentItem.content[0].point} />
        <meta property="og:image" content={currentItem.image}/>
      </Helmet>

      <HalfBanner>Industry News</HalfBanner>
    
      <div className='content-body py-5'>
        <div className='w90 max800'>
          <div className='spread-info'>
            <button className='solid-button-2' onClick={returnToList}>
              <i className="fa-solid fa-arrow-rotate-left pr-2"></i>
              <span className="pr-1">Return to List</span>
            </button>
            <button className='solid-button-2' onClick={copyNewsLink}>
              <i className="fa-solid fa-copy pr-2"></i>
              <span className="pr-1">Copy Link</span>
            </button>
          </div>
          
          <h6 className='text-center increased-xl mb-4 mt-4'>{currentItem.title}</h6>
          <div className='detail-cover' data-aos="fade-up">
            <div className='display-img'>
              {/* <img src={currentItem.image} alt="" /> */}
              <div className={"im-enclose" + (currentItem.image ? ' no-bg': '')}>
                <img src={currentItem.image} alt="" />
              </div>
            </div>
            <div className='spread-info-front py-3'>
              <img src={CalendarIcon} alt="" />
              <p className='mb-0 pl-3'>{currentItem.date}</p>
            </div>
            <div className='content'>
                {currentItem.content?.map((item, index: number) => <React.Fragment key={index}>
                  <h6 className='increased mb-1'>{item.topic}</h6>
                  <p dangerouslySetInnerHTML={{ __html: filterUnsecureHTML(item.point)}}></p>
                </React.Fragment>)}
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

export default NewsDetail;
