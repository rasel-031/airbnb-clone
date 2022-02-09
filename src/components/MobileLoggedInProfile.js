import React, { useState } from "react";
import "../css/MobileLoggedInProfile.css";
import { MdClear } from "react-icons/md";

function MobileLoggedInProfile(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [cancle, setCancle] = useState(false);

  //functions here
  const logoutCancle = () => {
    setCancle(true);
    window.location.reload();
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className={props.class}>
      <div
        className={
          cancle
            ? "mobile-log-in-profile-container-box-off"
            : "mobile-log-in-profile-container-box"
        }
      >
        <button
          className="mobile-log-in-profile-btn"
          onClick={() => logoutCancle()}
        >
          <MdClear />
        </button>
        <hr />
        <div className="mobile-log-in-profile-auth">
          <span className="mobile-log-in-profile-signup">
            <b>Name:</b> {user === null ? "" : user.name}
          </span>
          <span className="mobile-log-in-profile-signup">
            <b>Email:</b> {user === null ? "" : user.email}
          </span>
          <span
            className="mobile-log-in-profile-signup"
            onClick={() => logout()}
          >
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
}

export default MobileLoggedInProfile;
