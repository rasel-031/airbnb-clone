import React, { useState } from "react";
import "../css/NavBar.css";
import { FaAirbnb } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import NavBarProfile from "./NavBarProfile";
import { useSelector } from "react-redux";
import LoggedInProfile from "./LoggedInProfile";

function NavBar() {
  const [cartActive, setCartActive] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  //redux use here
  const FormInActive = useSelector((state) => state.signUpToggle.activeStatus);

  const handleProfileToggle = () => {
    setCartActive(!cartActive);
  };

  const handleProfileShow = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="navbar-container">
      {/* for pc and laptop */}
      <div className="navbar-box">
        <div className="navbar-logo-box">
          <FaAirbnb className="navbar-logo-icon" />
          <h1 className="navbar-heading-text">airbnb</h1>
        </div>
        <div className="navbar-search-container">
          <input
            type="text"
            placeholder="Start your search"
            className="navbar-search-box"
          />
          <span className="navbar-search-logo">
            <FaSearch className="navbar-search-icon" />
          </span>
        </div>
        <div className="navbar-btn-container">
          <button className="navbar-host-btn">Become a Host</button>
          <button className="navbar-global-btn">
            <FaGlobe className="navbar-global-icon" />
          </button>

          {/* without signup button */}
          <button
            className={
              localStorage.getItem("setInActive") === "false" &&
              FormInActive.inActive === true
                ? "navbar-signup-btn-off"
                : "navbar-signup-btn"
            }
            onClick={() => handleProfileToggle()}
          >
            <FaBars className="navbar-hamburger-icon" />
            &nbsp; &nbsp;
            <FaRegUserCircle className="navbar-user-icon" />
          </button>
          {/* without signup button */}

          {/* with login button */}
          <button
            className={
              localStorage.getItem("setActive") === "true"
                ? "navbar-signup-btn"
                : "navbar-signup-btn-off"
            }
            onClick={() => handleProfileShow()}
          >
            <FaBars className="navbar-hamburger-icon" />
            &nbsp; &nbsp;
            <FaRegUser className="navbar-user-icon" />
          </button>
          {/* with signup button */}
        </div>
      </div>
      {/* for pc and laptop */}

      {/* for login/signup cart */}
      <NavBarProfile
        class={
          cartActive
            ? "nav-bar-profile-container-box"
            : "nav-bar-profile-show-off"
        }
      />

      {/* for login/signup cart */}

      {/* for loginprofile cart */}
      <LoggedInProfile
        class={
          showProfile
            ? "log-in-profile-container-box"
            : "log-in-profile-show-off"
        }
      />
      {/* for loginprofile cart */}
    </div>
  );
}

export default NavBar;
