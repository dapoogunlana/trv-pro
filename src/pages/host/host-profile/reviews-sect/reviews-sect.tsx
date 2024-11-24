import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AvatarIcon } from '../../../../assets/images';
import AppModal from '../../../../components/block-components/app-modal/app-modal';
import { iStoreState, IUserData } from '../../../../services/constants/interfaces/store-schemas';
import { sendRequest } from '../../../../services/utils/request';
import './reviews-sect.scss';

function ReviewsSect(props: any) {

  const user: IUserData = useSelector((state: iStoreState) => state?.user);
  const [reviews, setReviews] = useState<any[]>([]);
  const [reviewStats, setReviewStats] = useState<{count: number, average: number, averageRemark: string}>();
  const [activeReview, setActiveReview] = useState<any>({});
  const [showEditModal, setShowEditModal] = useState(false);

  const modalRef = useRef<any>(null);

  const getReviews = () => {
      sendRequest({
          url: 'host-profile/reviews',
          method: 'GET',
      }, (res: any) => {
          setReviews(res.data || []);
      }, (err: any) => {});
  }
  const openEditModal = (review: any) => {
    setActiveReview(review);
    setShowEditModal(true);
      // sendRequest({
      //     url: 'host-profile/reviews',
      //     method: 'GET',
      // }, (res: any) => {
      //     setReviews(res.data || []);
      // }, (err: any) => {});
  }

  const closeModal = (type: any) => {
    if(type) {
      modalRef.current?.closeModal();
      if(type === 2) {
        editReview();
      }
    }
    setTimeout(() => setShowEditModal(false), 500);
  }
  const editReview = () => {
      sendRequest({
          url: 'host-profile/reviews',
          method: 'GET',
      }, (res: any) => {
          setReviews(res.data || []);
      }, (err: any) => {});
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getReviews();
  }, [props]);
  
  return (
    <>
      <div className='reviews-sect'>
        <div className='holder'>
          <h3>Reviews</h3>
          {
            reviews.length > 0 ?
            <>
              <div className='spread-info-front'>
                <h1>{reviewStats?.average}</h1>
                <div className=''>
                  <h6>{reviewStats?.averageRemark}</h6>
                  <p>{reviewStats?.count} verified review{reviewStats?.count !== 1 && 's'}</p>
                </div>
              </div>
              <hr />
            </> :
            <div className='pt-5 pb-3 text-center'>
              <h3 className='f700 black-tx'>No Reviews Yet.</h3>
            </div>
          }
          {
            reviews.map((review, index) => (
              <div className='review' key={index}>
                <div>
                  <div className='imh'>
                    <img src={AvatarIcon} alt="" />
                  </div>
                </div>
                <div className='content'>
                  <div className='spread-info-front'>
                    <h6>{review.rating}</h6> |
                    <p>{review.name}</p>
                  </div>
                  <p>{review.review}</p>
                </div>
                <div className='flag'>
                  {
                    review.id === user.id ?
                    <FontAwesomeIcon icon={'edit'} className='edit' onClick={() => openEditModal(review)} /> :
                    <FontAwesomeIcon icon={'flag'} className='flag' />
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {
        showEditModal &&
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

export default ReviewsSect;
