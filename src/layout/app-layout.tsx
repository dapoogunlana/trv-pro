import React, { useState } from 'react';
import { Outlet  } from 'react-router-dom';
import Header from './header/header';
import SubHeader from './sub-header/sub-header';
import Footer from './footer/footer';
import './app-layout.scss';
import Sidebar from './sidebar/sidebar';

function UserModule() {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebarVisible = () => {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <div className='layout'>
      <Header toggleSidebarVisible={toggleSidebarVisible} />
      <div className='layout-grid'>
        <div className={'side-bar' + (sidebarVisible ? ' side-bar-active' : '')}>
          <div className='side-bg' onClick={toggleSidebarVisible}></div>
          <Sidebar toggleSidebarVisible={toggleSidebarVisible} sidebarVisible={sidebarVisible} />
        </div>
        <div className='main-area'>
          <SubHeader toggleSidebarVisible={toggleSidebarVisible} />
          <div className='holder'>
            <Outlet/>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default UserModule;
