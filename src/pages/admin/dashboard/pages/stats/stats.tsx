import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Logger } from 'sass';
import { DashboardIconEmail, DashboardIconSubscribe, DashboardIconTimeLeft } from '../../../../../assets/images';
import MiniLoader from '../../../../../components/block-components/mini-loader/mini-loader';
import { apiLinks } from '../../../../../config/environment';
import { routeConstants } from '../../../../../services/constants/route-constants';
import { sendRequest } from '../../../../../services/utils/request';
import './stats.scss';

function Stats(props: any) {
  const [portfolioSwitch, setPortfolioSwitch] = useState('waitlist');

  const [subscribers, setSubscribers] = useState([]);
  const [subscribersLoaded, setSubscribersLoaded] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState('...');

  const [visitors, setVisitors] = useState([]);
  const [visitorsLoaded, setVisitorsLoaded] = useState(false);
  const [visitorCount, setVisitorCount] = useState('...');

  const [subscriberEmails, setSubscriberEmails] = useState('...')
  const [visitorEmails, setVisitorEmails] = useState('...')

  const updatePortfolioSwitch = (switcher: string) => {
    setPortfolioSwitch(switcher);
  }

  const activateVisitor = (id: number) => {
    setSubscribersLoaded(false);
    sendRequest({
        url: 'visitor/activate/' + id,
        method: 'DELETE',
    }, (res: any) => {
      loadVisitors();
    }, (err: any) => {});
  }
  const deactivateVisitor = (id: number) => {
    setSubscribersLoaded(false);
    sendRequest({
        url: 'visitor/deactivate/' + id,
        method: 'DELETE',
    }, (res: any) => {
      loadVisitors();
    }, (err: any) => {});
  }

  const downloadWaitlist = () => {
    window.open(`${apiLinks.url}whitelist-subscriber/download`);
  }
  const downloadVisitorlist = () => {
    // toast.error( 'Feature Under Development');
    window.open(`${apiLinks.url}visitor/download`);
  }

  const loadSubscribers = () => {
    setSubscribersLoaded(false);
    sendRequest({
        url: 'whitelist-subscriber',
    }, (res: any) => {
      setSubscribersLoaded(true);
      setSubscribers(res.data || []);
      setSubscriberCount(res.data?.length || 0);
    }, (err: any) => {
      setSubscribersLoaded(true);
      toast.error(err?.message || 'Unable to load');
      setSubscribers([]);
    });
  }
  const loadVisitors = () => {
    setVisitorsLoaded(false);
    sendRequest({
        url: 'visitor',
    }, (res: any) => {
      setVisitorsLoaded(true);
      setVisitors(res.data || []);
      setVisitorCount(res.data?.length || 0);
    }, (err: any) => {
      setVisitorsLoaded(true);
      toast.error(err.message || 'Unable to load');
      setVisitors([]);
    });
  }


  const loadSubscriberMails = () => {
    sendRequest({
      url: 'whitelist-mail'
    },
    (res: any) => {
      setSubscriberEmails(res.data.length || 0);
    }, (err: any) => {
      toast.error(err.message || 'Unable to load');
    });
  }
  const loadVisitorMails = () => {
    sendRequest({
      url: 'visitor-mail'
    },
    (res: any) => {
      setVisitorEmails(res.data.length || 0);
    }, (err: any) => {
      toast.error(err.message || 'Unable to load');
    });
  }

  useEffect(() => {
    loadSubscribers();
    loadSubscriberMails();
    loadVisitors();
    loadVisitorMails();
  },[props]);
  
  return (
    <div className='w90 max1000 py-5 stats-page'>
      <div className='row'>
        <div className='col-lg-3 col-md-6 pb-3'>
          <div className='main-card' data-aos='zoom-in'>
            <div className='description-grid-50'>
              <div className='relative'>
                <div className='icon-holder'>
                  <img src={DashboardIconTimeLeft} width={50} alt="" />
                </div>
              </div>
              <div className=''>
                <h6 className='text-right mb-0 mt-2'>Waitlist</h6>
              </div>
            </div>
            <h1 className='pt-4 text-right'>{ subscriberCount }</h1>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 pb-3'>
          <div className='main-card' data-aos='zoom-in'>
            <div className='description-grid-50'>
              <div className='relative'>
                <div className='icon-holder'>
                  <img src={DashboardIconEmail} width={50} alt="" />
                </div>
              </div>
              <div className=''>
                <h6 className='text-right mb-0 mt-2'>Messages</h6>
              </div>
            </div>
            <h1 className='pt-4 text-right'>{ subscriberEmails }</h1>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 pb-3'>
          <div className='main-card' data-aos='zoom-in'>
            <div className='description-grid-50'>
              <div className='relative'>
                <div className='icon-holder'>
                  <img src={DashboardIconSubscribe} width={50} alt="" />
                </div>
              </div>
              <div className=''>
                <h6 className='text-right mb-0 mt-2'>Visitors</h6>
              </div>
            </div>
            <h1 className='pt-4 text-right'>{ visitorCount }</h1>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 pb-3'>
          <div className='main-card' data-aos='zoom-in'>
            <div className='description-grid-50'>
              <div className='relative'>
                <div className='icon-holder'>
                  <img src={DashboardIconEmail} width={50} alt="" />
                </div>
              </div>
              <div className=''>
                <h6 className='text-right mb-0 mt-2'>Messages</h6>
              </div>
            </div>
            <h1 className='pt-4 text-right'>{ visitorEmails }</h1>
          </div>
        </div>
      </div>

      <div className="switcher mt-4 mb-3">
        <div className={'waitlist ' + (portfolioSwitch === 'waitlist' ? 'active' : 'dormant')} onClick={() => updatePortfolioSwitch('waitlist')}>
          <p>Waitlist</p>
        </div>
        <div className={'visitors ' + (portfolioSwitch === 'visitors' ? 'active' : 'dormant')} onClick={() => updatePortfolioSwitch('visitors')}>
          <p>Visitors</p>
        </div>
      </div>
      <div className="row">
      {
        portfolioSwitch === 'waitlist' ? 
        <div className='col-md-12'>
          <div className='main-card' data-aos='fade-up'>
            <div className='spread-info mb-3'>
              <h6 className='mb-0'>Waitlist Subscribers</h6>
              <button className='blue-button' onClick={downloadWaitlist}>Download</button>
            </div>
            <div className='scroll-holder'>
              <div className='scrollable'>
                <table className='responsive-table'>
                  <thead>
                    <tr className='dark-row'>
                      <th className=''>Name</th>
                      <th className=''>Email</th>
                      <th className=''>Phone Number</th>
                      <th className=''>Country</th>
                    </tr>
                  </thead>
                  {
                    subscribersLoaded && subscribers.map((item: any, index) => {
                      return <tbody key={index}>
                        <tr className={(index % 2) ? 'dark-row' : ''}>
                          <td>{item.firstName} {item.lastName}</td>
                          <td>{item.email}</td>
                          <td>{item.phoneNo}</td>
                          <td>{item.country}</td>
                        </tr>
                      </tbody>
                    })
                  }
                </table>
              </div>
              {
                subscribers.length === 0 && subscribersLoaded && <h5 className='text-center pt-3'>No data Available</h5>
              }
              {
                !subscribersLoaded && <MiniLoader/>
              }
            </div>
          </div>
        </div>
        :
        <div className='col-md-12'>
          <div className='main-card' data-aos='fade-up'>
            <div className='spread-info mb-3'>
              <h6 className='mb-0'>Website Visitors</h6>
              <button className='blue-button' onClick={downloadVisitorlist}>Download</button>
            </div>
            <div className='scroll-holder'>
              <div className='scrollable'>
                <table className='responsive-table'>
                  <thead>
                    <tr className='dark-row'>
                      <th className=''>Email</th>
                      <th className=''>Date Subscribed</th>
                      <th className=''>Subscribed</th>
                      <th className=''>Action</th>
                    </tr>
                  </thead>
                  {
                    visitorsLoaded && visitors.map((item: any, index) => {
                      return <tbody key={index}>
                        <tr className={(index % 2) ? 'dark-row' : ''}>
                          <td>{item.email}</td>
                          <td>{item.dateSubscribed ? new Date(item.dateSubscribed).toDateString() : ''}</td>
                          <td>{item.subscribed ? 'True' : 'False'}</td>
                          <td>
                            {
                              item.subscribed ? 
                              <button className='red-button' onClick={() => deactivateVisitor(item._id)}>Deactivate</button> :
                              <button className='blue-button' onClick={() => activateVisitor(item._id)}>Activate</button>
                            }
                          </td>
                        </tr>
                      </tbody>
                    })
                  }
                </table>
              </div>
              {
                visitors.length === 0 && visitorsLoaded && <h5 className='text-center pt-3'>No data Available</h5>
              }
              {
                !visitorsLoaded && <MiniLoader/>
              }
            </div>
          </div>
        </div>
      }
      </div>
    </div>
  );
}

export default Stats;
