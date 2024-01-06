import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { LogoWhite } from "../../assets/images";
import { routeConstants } from "../../services/constants/route-constants";
import SubHeaderMenu from "../sub-header/sub-header-menu/sub-header-menu";

import "./sidebar.scss";

function Sidebar(props: any) {

  useEffect(() => {
    console.log({props})
  }, [props]);

  return (
    <div className="bar">
      <div className="spread-info m-open-md">
        <div className="white-logo">
          <img src={LogoWhite} alt="" />
        </div>
        <FontAwesomeIcon icon={'times'} className="menu-icon" onClick={props.toggleSidebarVisible} />
      </div>
      <div className="m-open-sm"></div>
      <div className="lined-icons">
        <div className="sect m-open-md">
          <SubHeaderMenu className="mobile-version" />
        </div>
        <div className="sect">
          <div className={"menu-grid2 m-close-md-im" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="circles">
              <div className="blue"></div>
              <div className="orange"></div>
              <div className="light-blue"></div>
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0"></p>
            </div>
          </div>
          <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="sibebar-icon">
              < FontAwesomeIcon icon={'plane'} />
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0 pt-2">Flights</p>
            </div>
          </div>
          <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="sibebar-icon">
              < FontAwesomeIcon icon={'bed'} />
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0 pt-2">Stays</p>
            </div>
          </div>
          <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="sibebar-icon">
              < FontAwesomeIcon icon={'car'} />
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0 pt-2">Book&nbsp;Ride</p>
            </div>
          </div>
          <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="sibebar-icon">
              < FontAwesomeIcon icon={'gift'} />
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0 pt-2">Rewards</p>
            </div>
          </div>
          <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="sibebar-icon">
              < FontAwesomeIcon icon={'handshake-angle'} />
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0 pt-2">Deals</p>
            </div>
          </div>
        </div>

        <hr className="separation-line" />

        <div className="sect">
          <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="sibebar-icon">
              < FontAwesomeIcon icon={'globe'} />
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0 pt-2">Explore</p>
            </div>
          </div>
          <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="sibebar-icon">
              < FontAwesomeIcon icon={'info'} />
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0 pt-2">Travel&nbsp;Info</p>
            </div>
          </div>
          <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="sibebar-icon">
              < FontAwesomeIcon icon={'map-location-dot'} />
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0 pt-2">Flight&nbsp;Tracker</p>
            </div>
          </div>
        </div>

        <hr className="separation-line" />

        <div className="sect">
          <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
            <div className="sibebar-icon">
              < FontAwesomeIcon icon={'suitcase-rolling'} />
            </div>
            <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
              <p className="mb-0 pt-2">My&nbsp;Bookings</p>
            </div>
          </div>
        </div>

        <hr className="separation-line" />

        <div className="sect">
          <NavLink to={`/${routeConstants.feedBack}`} className={active => active ? 'active-sidebar-link' : ''}>
            <div className={"menu-grid" + (props.sidebarVisible ? ' menu-grid-active' : '')}>
              <div className="sibebar-icon">
                < FontAwesomeIcon icon={'message'} />
              </div>
              <div className={" " + (props.sidebarVisible ? 'menu-active' : 'menu-default')}>
                <p className="mb-0 pt-2">Feedback</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
