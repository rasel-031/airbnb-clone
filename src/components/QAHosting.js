import React from "react";
import "../css/QAHosting.css";
import inspire_img from "../images/inspire.jpg";

function QAHosting() {
  return (
    <div className="qahosting-container">
      <img src={inspire_img} alt="" className="qahosting-img" />
      <div className="qahosting-heading-box">
        <h1 className="qahosting-heading-text">
          Questions <br />
          about <br />
          hosting?
        </h1>
        <button className="qahosting-heading-btn">Ask a Superhost</button>
      </div>
    </div>
  );
}

export default QAHosting;
