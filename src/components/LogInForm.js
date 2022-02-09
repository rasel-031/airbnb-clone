import React, { useState, useRef } from "react";
import { FaEye } from "react-icons/fa";
import "../css/LogInForm.css";
import { MdClear } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { user_post_login_data } from "../store/actions/index";
import { signup_btn_toggle } from "../store/actions/index";

function LogInForm(props) {
  const [show, setShow] = useState(false);
  const [inactive, setInActive] = useState(true);

  const handleCancle = () => {
    setInActive(false);
    window.location.reload();
  };

  //handle form data and redux

  const dispatch = useDispatch();

  const formRefId = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    //Api calling and add redux store
    const formData = new FormData(formRefId.current);
    axios
      .post("http://localhost:3001/user/login-data", formData)
      .then(function (response) {
        if (!response.data.acknowledge) {
          toast.error(response.data.message);
        } else {
          dispatch(user_post_login_data(response.data));

          //store data in local storage
          localStorage.setItem("user", JSON.stringify(response.data));

          //handle form dispatch
          dispatch(signup_btn_toggle(true, false));
          //login form inactive
          localStorage.setItem("setActive", "true");
          localStorage.setItem("setInActive", "false");

          //refresh the page
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    //reset form values
    formRefId.current.reset();
  };

  //handle form data
  return (
    <div className={inactive ? props.class : "login-container"}>
      <ToastContainer position="top-center" className="toastify" />
      <div className="login-box">
        <div className="login-heading">
          <button className="login-cancle-btn" onClick={() => handleCancle()}>
            <MdClear />
          </button>
          <div className="login-heading-text">
            <h3>Log In</h3>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <form
          className="login-form-box"
          ref={formRefId}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Email"
            required
            className="login-form-input"
            name="email"
          />
          <div className="login-form-password-box">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              className="login-form-input"
              name="password"
            />
            <span>
              <FaEye
                className="login-form-pass-eye"
                onClick={() => setShow(!show)}
              />
            </span>
          </div>
          <button type="submit" className="login-form-submit-btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogInForm;
