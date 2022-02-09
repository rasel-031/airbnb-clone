import React, { useEffect, useState } from "react";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "../css/MobileNavBar.css";
import "../css/HomePage.css";
import "../css/LogInForm.css";
import "../css/MobileLoggedInProfile.css";
import LogInForm from "./LogInForm";
import { useSelector } from "react-redux";
import MobileLoggedInProfile from "./MobileLoggedInProfile";

function MobileNavBar() {
  //redux use here
  const FormInActive = useSelector((state) => state.signUpToggle.activeStatus);

  // working for user profile
  const [showProfile, setShowProfile] = useState(false);

  const [logInActive, setLogInActive] = useState(false);
  const cancle = () => {
    setLogInActive(false);
  };
  // working for user profile

  useEffect(() => {
    const element_id = document.getElementById("element_traker");
    var prevScrollpos = window.pageYOffset;
    var currentScrollPos = 0;

    window.onscroll = function () {
      prevScrollpos = currentScrollPos;
      currentScrollPos = window.pageYOffset;

      if (prevScrollpos - 1 < currentScrollPos) {
        element_id.style.bottom = "-75px";
      } else {
        element_id.style.bottom = "0px";
      }
    };
  });

  //function here
  const showLoggedInProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="navbar-for-mobile-box">
      {/* for mobile and tablet search bar*/}
      <div className="navbar-for-mobile-container">
        <button className="navbar-for-mobile-search-btn">
          <FaSearch className="navbar-for-mobile-search-icon" />
          &nbsp; Where are you going?
        </button>
      </div>
      {/* for mobile and tablet search bar*/}

      {/* For bottom nav bar */}
      <div id="element_traker" className="bottom-navbar-for-mobile-container">
        <div className="bottom-navbar-for-mobile-box">
          <div className="bottom-navbar-for-mobile-icon-btn">
            <FaSearch className="bottom-navbar-for-mobile-icon" />
            <p>Explore</p>
          </div>
          <div className="bottom-navbar-for-mobile-icon-btn">
            <BsHeart className="bottom-navbar-for-mobile-icon" />
            <p>Wishlists</p>
          </div>
          {/* without login button */}
          <div
            className={
              localStorage.getItem("setInActive") === "false" &&
              FormInActive.inActive === true
                ? "bottom-navbar-for-mobile-icon-btn-off"
                : "bottom-navbar-for-mobile-icon-btn"
            }
            onClick={() => setLogInActive(!logInActive)}
          >
            <CgProfile className="bottom-navbar-for-mobile-icon" />
            <p>Log in</p>
          </div>
          {/* with login button */}
          <div
            className={
              localStorage.getItem("setActive") === "true"
                ? "bottom-navbar-for-mobile-icon-btn"
                : "bottom-navbar-for-mobile-icon-btn-off"
            }
            onClick={() => showLoggedInProfile()}
          >
            <FaRegUser className="bottom-navbar-for-mobile-icon" />
            <p>Profile</p>
          </div>
        </div>
      </div>
      {/* For bottom nav bar */}

      {/* for login/signup cart */}
      <LogInForm
        class={logInActive ? "login-overlay-on" : "login-container"}
        toggleCancle={cancle}
      />
      {/* for login/signup cart */}

      {/* for loginprofile cart */}
      <MobileLoggedInProfile
        class={
          showProfile
            ? "mobile-log-in-profile-overlay-on"
            : "mobile-log-in-profile-show-off"
        }
      />
      {/* for loginprofile cart */}
    </div>
  );
}

export default MobileNavBar;
