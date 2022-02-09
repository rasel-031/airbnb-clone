import React from "react";
import "../css/AirbnbExperience.css";
import discover_img_1 from "../images/discover_1.jpg";
import discover_img_2 from "../images/discover_2.jpg";
function AirbnbExperience() {
  return (
    <div className="airbnb-experience-container">
      <h2 className="airbnb-experience-heading-text">
        Discover Airbnb Experiences
      </h2>
      <div className="airbnb-experience-image-box">
        <div className="airbnb-experience-image-box-first">
          <img
            src={discover_img_1}
            alt=""
            height={500}
            width={500}
            className="airbnb-experience-image"
          />
          <div className="airbnb-experience-image-heading-box">
            <h1 className="airbnb-experience-image-heading">
              Things to do
              <br /> on your trip
            </h1>
            <br />
            <br />
            <span className="airbnb-experience-image-btn">Experience</span>
          </div>
        </div>

        <div className="airbnb-experience-image-box-second">
          <img
            src={discover_img_2}
            alt=""
            height={500}
            width={500}
            className="airbnb-experience-image"
          />
          <div className="airbnb-experience-image-heading-box">
            <h1 className="airbnb-experience-image-heading">
              Things to do
              <br /> from home
            </h1>
            <br />
            <br />
            <span className="airbnb-experience-image-btn">
              Online Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirbnbExperience;
