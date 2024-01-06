import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogoBlack } from "../../assets/images";

import "./header.scss";
import SearchComponent from "./search-component/search-component";

function Header(props: any) {

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
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
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
