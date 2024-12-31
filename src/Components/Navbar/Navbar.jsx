import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.svg";
import logo_icon from "../../assets/youtube-logo.svg";
import search_icon from "../../assets/search-icon.svg";
import upload_icon from "../../assets/upload-icon.svg";
import more_icon from "../../assets/more-icon.svg";
import notification_icon from "../../assets/notification-bell.svg";
import profile_icon from "../../assets/profile-icon.svg";
import { Link } from "react-router-dom";

const Navbar = ({setSidebar}) => {
  return (
    <nav className="navbar flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={() => setSidebar(prev => prev === false ? true : false)} src={menu_icon} alt="menu icon" />
        <Link to="/youtube-clone"><img className="logo" src={logo_icon} alt="logo" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
            <input type="text" placeholder="Search" />
            <img src={search_icon} alt="search icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload icon" />
        <img src={more_icon} alt="more icon" />
        <img src={notification_icon} alt="notification icon" />
        <img className="user-icon" src={profile_icon} alt="profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
