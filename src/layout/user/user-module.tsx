import React, {  } from 'react';
import { Outlet  } from 'react-router-dom';
import Header from './header/user-header';
import Header2 from './header/user-header2';
import Footer from './footer/user-footer';
import ScrollToTop from '../../components/block-components/scroll-to-top/scroll-to-top';
import IcoPopupComp from '../../pages/user/home/page-modules/ico-popup/ico-popup';

function UserModule() {
  return (
    <div>
      {/* <Header/> */}
      <Header2/>
      <Outlet/>
      <Footer/>
      <ScrollToTop/>
      <IcoPopupComp/>
    </div>
  );
}

export default UserModule;
