import React, { useEffect, useRef, useState } from 'react';
import Banner from './page-modules/banner/banner';
// import MobileBanner from './page-modules/banner-mobile/banner';
import PreInfo from './page-modules/pre-info/pre-info';
import HowTo from './page-modules/how-to/how-to';
import Services from './page-modules/services/services';
import Operators from './page-modules/operators/operators';
import UnolckingUtilities from './page-modules/unolcking-utilities/unolcking-utilities';
import TradeWays from './page-modules/trade-ways/trade-ways';
// import Testimonials from './page-modules/testimonials/testimonials';
import Media from './page-modules/media/media';
import LatestNews from './page-modules/latest-news/latest-news';
import AppModal from '../../../components/block-components/app-modal/app-modal';
import HeroPopup from './page-modules/hero-popup/hero-popup';
import './home.scss';
import SubSpace from './page-modules/banner-sub-space/banner-sub-space';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import OperatorPopup from './page-modules/operator-popup/operator-popup';

function About(props: any) {

  const [viewModal, setViewModal] = useState(false);
  const [viewModal2, setViewModal2] = useState(false);

  const selectBanner = () => {
    if(window.innerWidth > 750) {
      return <Banner/>;
    } else {
      return <Banner/>;
      // return <MobileBanner/>;
    }
  }

  const toggleModal = () => {
    setViewModal(!viewModal);
  }
  const toggleModal2 = () => {
    setViewModal2(!viewModal2);
  }

  const childRef: any = useRef();

  const closeChildModal = () => {
    childRef.current?.closeModal();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    // setTimeout(() => setViewModal(true), 3000)
  },[props]);
  
  return (
    <div className='home'>
      {selectBanner()}
      <SubSpace/>
      <PreInfo/>
      <HowTo/>
      <Services/>
      <Operators openOperatorModal={toggleModal2}/>
      <UnolckingUtilities/>
      <TradeWays/>
      {/* <Testimonials/> */}
      <Media/>
      <LatestNews/>
      <ContactSect/>
      {viewModal && <AppModal onCloseModal={toggleModal} styleClass="m80-im"><HeroPopup/></AppModal>}
      {viewModal2 && <AppModal onCloseModal={toggleModal2} ref={childRef} styleClass="m80-im">
        <OperatorPopup onCloseModal={closeChildModal}/>
      </AppModal>}
    </div>
  );
}

export default About;
