import React, { useState, useRef } from "react";
import { FaEye } from "react-icons/fa";
import "../css/SignUpForm.css";
import { MdClear } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpForm(props) {
  const [show, setShow] = useState(false);
  const [signUpOff, setSignUpOff] = useState(true);

  const formId = useRef(null);

  const handleCancle = () => {
    setSignUpOff(false);
    window.location.reload();
  };

  //handle form data

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formId.current);

    axios
      .post("http://localhost:3001/user/signup-data", formData)
      .then(function (response) {
        if (response.data.data) {
          toast.success("Registered successful!");
        } else {
          toast.error("Registered unsuccessful!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    //reset form values
    formId.current.reset();
  };
  //handle form data

  return (
    <div className={signUpOff ? props.class : "signup-container "}>
      <ToastContainer position="top-center" className="toastify" />
      <div className="signup-box">
        <div className="signup-heading">
          <button className="signup-cancle-btn" onClick={() => handleCancle()}>
            <MdClear />
          </button>
          <div className="signup-heading-text">
            <h3>Sign Up</h3>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <form className="signup-form-box" ref={formId} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            className="signup-form-input"
            name="name"
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            required
            className="signup-form-input"
            name="email"
          />
          <div className="signup-form-password-box">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              className="signup-form-input"
              name="password"
            />
            <span>
              <FaEye
                className="signup-form-pass-eye"
                onClick={() => setShow(!show)}
              />
            </span>
          </div>
          <button type="submit" className="signup-form-submit-btn">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
