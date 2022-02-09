import React, { useState } from "react";
import "../css/NavBarProfile.css";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

function NavBarProfile(props) {
  //use hooks here
  const [signUpActive, setsignUpActive] = useState(false);
  const [logInActive, setLogInActive] = useState(false);

  //use functions here
  const handleSignUp = () => {
    setsignUpActive(true);
  };
  const handleLogIn = () => {
    setLogInActive(true);
  };

  return (
    <>
      <div className={props.class}>
        <div className="nav-bar-profile-auth">
          <span
            className="nav-bar-profile-signup"
            onClick={() => handleSignUp()}
          >
            Sign up
          </span>
          <span
            className="nav-bar-profile-signup"
            onClick={() => handleLogIn()}
          >
            Log in
          </span>
        </div>
        <hr />
        <div className="nav-bar-profile-others">
          <a href="#host" className="nav-bar-profile-link">
            Host your home
          </a>
          <a href="#hosthome" className="nav-bar-profile-link">
            Host an experience
          </a>
          <a href="#help" className="nav-bar-profile-link">
            Help
          </a>
        </div>
      </div>

      {/* for signup/login form */}
      <SignUpForm class={signUpActive ? "overlay-on" : "signup-container"} />
      <LogInForm class={logInActive ? "login-overlay-on" : "login-container"} />
    </>
  );
}

export default NavBarProfile;
