import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { routeConstants } from "../../../services/constants/route-constants";

import "./sub-header-menu.scss";

function SubHeaderMenu(props: {className: string}) {

  useEffect(() => {}, [props]);

  return (
    <>
      <NavLink to={`/${routeConstants.home2}`} className={({isActive}) => `${props.className} ` + (isActive ? 'active-sublink' : '')}>
      <div className="sub-link">
        <p>Home</p>
        <div className="bottom-bar"></div>
      </div>
      </NavLink>
      <NavLink to={`/${routeConstants.about}`} className={({isActive}) => `${props.className} ` + (isActive ? 'active-sublink' : '')}>
      <div className="sub-link">
        <p>About</p>
        <div className="bottom-bar"></div>
      </div>
      </NavLink>
      <div className={props.className + " sub-link multi-case"}>
        <p className="multi">Hot Offers <FontAwesomeIcon icon={'sort-down'} className="offer-icon" /></p>
        <div className="bottom-holder">
          <NavLink to={`/${routeConstants.offers}`} className={({isActive}) => `${props.className} ` + (isActive ? 'active-sublink' : '')}>
            <div className="bottom-bar"></div>
          </NavLink>
        </div>
        <div className="pop-up">
          <NavLink to={`/${routeConstants.offers}/${routeConstants.skyflexPay}`} className={({isActive}) => isActive ? 'active-subroute' : ''}>
            <p>Skyflex Pay</p>
          </NavLink>
          <NavLink to={`/${routeConstants.offers}/${routeConstants.skyRewards}`} className={({isActive}) => isActive ? 'active-subroute' : ''}>
            <p>Sky Rewards</p>
          </NavLink>
          <NavLink to={`/${routeConstants.offers}/${routeConstants.travelOnCredit}`} className={({isActive}) => isActive ? 'active-subroute' : ''}>
            <p>Travel on Credit</p>
          </NavLink>
        </div>
      </div>
      <NavLink to={`/${routeConstants.terms}`} className={({isActive}) => `${props.className} ` + (isActive ? 'active-sublink' : '')}>
      <div className="sub-link">
        <p>Terms & Conditions</p>
        <div className="bottom-bar"></div>
      </div>
      </NavLink>
      <NavLink to={`/${routeConstants.privacyPolicy}`} className={({isActive}) => `${props.className} ` + (isActive ? 'active-sublink' : '')}>
      <div className="sub-link">
        <p>Privacy Policy</p>
        <div className="bottom-bar"></div>
      </div>
      </NavLink>
      <NavLink to={`/${routeConstants.careers}`} className={({isActive}) => `${props.className} ` + (isActive ? 'active-sublink' : '')}>
      <div className="sub-link">
        <p>Careers</p>
        <div className="bottom-bar"></div>
      </div>
      </NavLink>
      <NavLink to={`/${routeConstants.contact}`} className={({isActive}) => `${props.className} ` + (isActive ? 'active-sublink' : '')}>
      <div className="sub-link">
        <p>Contact</p>
        <div className="bottom-bar"></div>
      </div>
      </NavLink>
    </>
  );
}

export default SubHeaderMenu;
