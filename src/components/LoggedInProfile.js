import React from "react";
import "../css/LoggedInProfile.css";

function LoggedInProfile(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className={props.class}>
      <div className="log-in-profile-auth">
        <span className="log-in-profile-signup">
          <b>Name:</b> {user === null ? "" : user.name}
        </span>
        <span className="log-in-profile-signup">
          <b>Email:</b> {user === null ? "" : user.email}
        </span>
        <span className="log-in-profile-signup" onClick={() => logout()}>
          Log Out
        </span>
      </div>
    </div>
  );
}

export default LoggedInProfile;
