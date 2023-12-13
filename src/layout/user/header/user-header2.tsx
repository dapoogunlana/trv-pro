import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../../assets/styles/layout.scss";
import { LogoWhite, HamburgerButton } from "../../../assets/images";
import { routeConstants } from "../../../services/constants/route-constants";
import UserHeaderDropdown from "./header-dropdown";

function UserHeader2(props: any) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openWebMenu, setOpenWebMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  const toggleWebDialogue = () => {
    setOpenWebMenu(!openWebMenu);
  }
  const openWebDialogue = () => {
    setOpenWebMenu(true);
  }
  const closeDialogue = () => {
    setOpenWebMenu(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const home = window.location.pathname.indexOf('home');
      if (window.scrollY < 100) {
        if (home !== -1) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
      } else {
        setScrolled(true);
      }
    })
    // window.addEventListener('popstate', () => {
    //   console.log('Pop Changed');
    // })
  })

  return (
    <>
      <div
        className={
          (openMobileMenu ? "header mode-2 open-mobile-menu" : "header mode-2 close-mobile-menu") +
          (openWebMenu ? ' web-menu-open' : '')
        }
      >
        <div className={scrolled ? 'sub-layer3' : 'trans-3'}></div>
        <div className="sub-layer2"></div>
        <div className="case spread-info md-open relative">
          <Link to={routeConstants.home} onClick={closeMobileMenu}>
            <div className="logo-mini">
              <img src={LogoWhite} alt="" />
            </div>
          </Link>
          <div className="spread-info">
            <div className="mobile-menu pr-2">
              <img src={HamburgerButton} onClick={toggleMobileMenu} width={30} alt="" />
            </div>
          </div>
        </div>
        <div className="w90 spread-nav-web relative">
          <Link to={routeConstants.home} onClick={closeMobileMenu}>
            <div className="logo2 md-close-im">
              <img src={LogoWhite} alt="" />
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
              <li>
                <div className="slim-line"></div>
              </li>
              <li>
                <div className="text-center">
                  <NavLink to={routeConstants.userLogin} className={({isActive}) => isActive ? 'selected-nav' : ''} onClick={closeMobileMenu}>
                    <span>SIGN IN</span>
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="text-center">
                  <NavLink to={routeConstants.register} onClick={closeMobileMenu}>
                    <button className="header2-btn">REGISTER</button>
                  </NavLink>
                </div>
              </li>
              <li className="md-close-im">
                <div className="text-center">
                  <i className="fas fa-bars" onClick={toggleWebDialogue}></i>
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

export default UserHeader2;
