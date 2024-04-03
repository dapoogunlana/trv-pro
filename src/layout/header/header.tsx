import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogoBlack } from "../../assets/images";

import "./header.scss";
import SearchComponent from "./search-component/search-component";
import { useNavigate } from "react-router-dom";
import { routeConstants } from "../../services/constants/route-constants";
import { useSelector } from "react-redux";
import { IStateData } from "../../services/constants/interfaces/data-schemas";
import { useDispatch } from "react-redux";
import { userLogout } from "../../services/actions-reducers/user-data";

function Header(props: any) {

  const navigate = useNavigate();
  const userDetails = useSelector((state: IStateData) => state?.user || {});
  console.log({userDetails})
  const dispatch = useDispatch();

  const navigateTo = (link: string) => {
    navigate(link);
  }

  const logOut = () => {
    dispatch(userLogout());
    navigateTo(`${routeConstants.home}`);
  }

  useEffect(() => {}, [props]);

  return (
    <>
      <div className="header">
        <div className="spread-info">
          <FontAwesomeIcon icon={'bars'} className="menu-icon" onClick={props.toggleSidebarVisible} />
          <div className="logo">
            <img src={LogoBlack} alt="" />
          </div>
        </div>
        <div className="search-sect">
          <SearchComponent/>
          <div className="center-info">
            <FontAwesomeIcon icon={'search'} />
          </div>
        </div>
        <div className="account-buttons">
          <div className="icon-holder center-info m-open-sm">
            <FontAwesomeIcon icon={'search'} className="m-open-sm" />
          </div>
          {
            !userDetails.email ?
            <>
              <button className="login" onClick={() => navigateTo(`/${routeConstants.login}`)}>Login</button>
              <button className="signup" onClick={() => navigateTo(`/${routeConstants.signup}`)}>Sign Up</button>
            </> :
            <button className="signup" onClick={logOut}>Log Out</button>
          }
          <select name="" id="" className="language m-close-sm">
            <option value="english">EN</option>
            <option value="french">FR</option>
          </select>
          <button className="currency m-close-sm">$ USD</button>
        </div>
      </div>
      <div className="header-spacer"></div>
    </>
  );
}

export default Header;
