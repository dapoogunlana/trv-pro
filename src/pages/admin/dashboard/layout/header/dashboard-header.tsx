import React, {  } from 'react';
import { useNavigate } from 'react-router';
import { routeConstants } from '../../../../../services/constants/route-constants';
import './dashboard-header.scss';

function DashboardHeader(props: any) {

  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.removeItem('token');
    navigate(`/${routeConstants.admin}/${routeConstants.adminLogin}`);
  }

  return (
    <div className='admin-header'>
      <div className='spread-info py-2 px-3'>
        <i className="fa-solid fa-bars sidebar-icon" onClick={props.toggleSidebarVisible}></i>
        <span></span>
        <button className='logout-button' onClick={logout}><i className="fa-solid fa-right-from-bracket"></i> Logout</button>
      </div>
    </div>
  );
}

export default DashboardHeader;
