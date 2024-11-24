import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProfileOverviewPage from '../../user/profile/user-profile/profile-overview/profile-overview';
import ProfileSettingsPage from '../../user/profile/user-profile/profile-settings/profile-settings';
import './host-profile-tab.scss';
import { useSelector } from 'react-redux';
import { iStoreState, IUserData } from '../../../services/constants/interfaces/store-schemas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileSect from './profile-sect/profile-sect';
import ReviewsSect from './reviews-sect/reviews-sect';
import PropertiesSect from './properties-sect/properties-sect';
import { useNavigate } from 'react-router';
import { routeConstants } from '../../../services/constants/route-constants';
import { sendRequest } from '../../../services/utils/request';
import { toast } from 'react-toastify';
import { AvatarIcon } from '../../../assets/images';
import AppModal from '../../../components/block-components/app-modal/app-modal';
import { resourceLinks } from '../../../config/environment';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../services/actions-reducers/user-data';

function HostProfilePage(props: any) {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'reviews' | 'properties'>('profile');
  const user: IUserData = useSelector((state: iStoreState) => state?.user);
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [uploadImage, setUploadImage] = useState();
  const [showUpdateImageModal, setShowUpdateImageModal] = useState<boolean>(false);

  const modalRef = useRef<any>(null);

  const goToNewProperty = () => {
    navigate(`/${routeConstants.addShortlet}`);
  }

  const getNotifications = () => {
      sendRequest({
          url: 'host-profile/notifications',
          method: 'GET',
      }, (res: any) => {
          setNotifications(res.data || []);
      }, (err: any) => {});
  }

  const selectImage = () => {
    document.getElementById('update-image')?.click();
  }

  const captureSelectedImage = (ev: any) => {
    if(ev.target.files[0]) {
      setUploadImage(ev.target.files[0]);
      setShowUpdateImageModal(true);
      console.log('Avidos', {user})
    }
  }

  const updateImage = () => {
    if(uploadImage) {
      const formData = new FormData();
      formData.append('avatar', uploadImage)
      toast.info('Image is being saved in the background');
      sendRequest({
          url: 'host-profile/update-profile-avatar',
          method: 'PUT',
          body: formData,
      }, (res: any) => {
        toast.success(res?.message);
        getUser();
      }, (err: any) => {});
    }
  }

  const closeModal = (type: any) => {
    if(type) {
      modalRef.current?.closeModal();
      if(type === 2) {
        updateImage();
      }
    }
    setTimeout(() => setShowUpdateImageModal(false), 500);
  }

  const getUser = () => {
    sendRequest(
      {
        url: user.userMode === 'user' ? 'user-profile/user' : 'host-profile/profile',
        method: "GET",
      },
      (res: any) => {
          dispatch(userLogin({...res.data, userMode: user.userMode}));
      },
      (err: any) => {}
    );
  };

  useEffect(() => {
    getNotifications();
    console.log({modalRef});
    console.log('Avidos', {user})
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);
  
  return (
    <>
      <div className='host-holder'>
        <div className='host-main-grid'>
          <div className='main-sect'>
            <div className='profile-tab-card h-balance'>
              <div className='spread-info-front pb-2'>
                <div className='profile-image'>
                  <img src={user.avatar ? (resourceLinks.hostAvatarImages + user.avatar) : AvatarIcon} alt="" />
                  <div className='edit' onClick={selectImage}>
                    <FontAwesomeIcon icon={'pencil'} />
                    <input type="file" name="" id="update-image" onChange={captureSelectedImage} />
                  </div>
                </div>
                <div>
                  <h5 className='f700 mb-2'>{user.first_name} {user.last_name}</h5>
                  <div className='spread-info-front'>
                    <FontAwesomeIcon icon={'star'} className='mr-2 reduced' />
                    <span className='reduced number-medium px-2'>({notifications.length}) Unread notifications</span>
                  </div>
                </div>
              </div>
              <div className='spread-info-front'>
                <div className='pr-3'>
                  <FontAwesomeIcon icon={'star'} className='orange-tx mr-2 reduced' />
                  <span className='reduced-x pl-1 pr-2 number-light'> {4.3} ({343} reviews) </span>
                </div>
                <div className=''>
                  <span>&nbsp;</span>
                  <FontAwesomeIcon icon={'house'} className='faint-tx mr-2 reduced' />
                  <span className='reduced-x pl-1 number-light'> {4.3} properties</span>
                </div>
              </div>
            </div>
          </div>
          <div className='main-sect'>
            <div className='profile-tab-card h-balance'>
              <h4 className='f700 mb-4'>{'My Tabs'}</h4>
              <div className='tab-grid'>
                <div className={'tab-button-sect ' + (activeTab === 'profile' ? 'active-tab' : '')}>
                  <button onClick={() => setActiveTab('profile')}>Profile</button>
                </div>
                <div className={'tab-button-sect ' + (activeTab === 'reviews' ? 'active-tab' : '')}>
                  <button onClick={() => setActiveTab('reviews')}>Reviews</button>
                </div>
                <div className={'tab-button-sect ' + (activeTab === 'properties' ? 'active-tab' : '')}>
                  <button onClick={() => setActiveTab('properties')}>Properties</button>
                </div>
                <div className='tab-button-sect'>
                  <button onClick={goToNewProperty}>New Property</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='host-tab-content'>
          {activeTab === 'profile' && <ProfileSect/>}
          {activeTab === 'reviews' && <ReviewsSect/>}
          {activeTab === 'properties' && <PropertiesSect/>}
        </div>
      </div>
      {
        showUpdateImageModal &&
        <AppModal styleClass='' small onCloseModal={closeModal} ref={modalRef}>
          <div className='action-popup p-3'>
            <p className='text-center'>You are attempting to change your profile picture</p>
            <div className='info-grid'>
              <button onClick={() => closeModal(1)} className='reject-button'>{'Cancel'}</button>
              <button onClick={() => closeModal(2)} className='accept-button'>{'Update'}</button>
            </div>
          </div>
        </AppModal>
      }
    </>
  );
}

export default HostProfilePage;
