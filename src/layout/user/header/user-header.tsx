import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../../assets/styles/layout.scss";
import { AppleIcon, Logo, PlaystoreIcon } from "../../../assets/images";
import { routeConstants } from "../../../services/constants/route-constants";
import UserHeaderDropdown from "./header-dropdown";

function UserHeader() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openWebMenu, setOpenWebMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  const openWebDialogue = () => {
    console.log('Winning');
    setOpenWebMenu(true);
  }
  const closeDialogue = () => {
    console.log('closing');
    setOpenWebMenu(false);
  }

  return (
    <>
      <div
        className={
          (openMobileMenu ? "header open-mobile-menu" : "header close-mobile-menu") +
          (openWebMenu ? ' web-menu-open' : '')
        }
      >
        <div className="sub-layer"></div>
        <div className="case spread-info md-open relative">
          <Link to={routeConstants.home} onClick={closeMobileMenu}>
            <div className="logo-mini">
              <img src={Logo} alt="" />
            </div>
          </Link>
          <div className="spread-info">
            <div className="mobile-menu pr-2">
              <i className="fas fa-bars" onClick={toggleMobileMenu}></i>
            </div>
          </div>
        </div>
        <div className="w90 spread-nav-web relative">
          <Link to={routeConstants.home} onClick={closeMobileMenu}>
            <div className="logo md-close-im">
              <img src={Logo} alt="" />
            </div>
          </Link>
          <div className="nav">
                  
            <ul>
              <li>
                <div className="text-center">
                  <NavLink to={routeConstants.userLogin} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                    <span>Buy</span>
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="text-center">
                  <NavLink to={routeConstants.userLogin} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                    <span>Sell</span>
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="text-center">
                  <NavLink to={routeConstants.userLogin} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                    <span>Post Trade</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="nav">
            <ul>
              <li>
                <div className="text-center">
                  <NavLink to={routeConstants.userLogin} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                    <span>Login</span>
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="text-center">
                  <NavLink to={routeConstants.register} onClick={closeMobileMenu}>
                    <button className="solid-button-2b">Sign Up</button>
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="store-icons">
                  <NavLink to={routeConstants.register} onClick={closeMobileMenu}>
                    <img src={AppleIcon} alt="" />
                  </NavLink>
                  <NavLink to={routeConstants.register} onClick={closeMobileMenu}>
                    <img src={PlaystoreIcon} alt="" />
                  </NavLink>
                </div>
              </li>
              <li className="md-close-im">
                <div className="text-center">
                  <i className="fas fa-bars" onClick={openWebDialogue}></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <UserHeaderDropdown closeDialogue={closeDialogue} />
      </div>
    </>
  );
}

export default UserHeader;
