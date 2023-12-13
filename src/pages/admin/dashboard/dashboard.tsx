import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { routeConstants } from '../../../services/constants/route-constants';
import { Outlet  } from 'react-router-dom';
import Header from './layout/header/dashboard-header';
import Sidebar from './layout/sidebar/sidebar';
import AdminFooter from '../../../layout/admin/footer/admin-footer';
import './dashboard.scss';

function Dashboard() {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebarVisible = () => {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <div className='dashboard-grid'>
      <div className={'side-bar' + (sidebarVisible ? ' side-bar-active' : '')}>
        <div className='side-bg' onClick={toggleSidebarVisible}></div>
        <Sidebar/>
      </div>
      <div className='main-area'>
        <Header toggleSidebarVisible={toggleSidebarVisible} />
        <div className='holder pt-4'>
          <Outlet/>
        </div>
        <AdminFooter/>
      </div>
    </div>
  );
}

export default Dashboard;
