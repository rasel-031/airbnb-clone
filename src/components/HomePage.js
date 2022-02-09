import React from "react";
import "../css/HomePage.css";
import homeImg from "../images/home_img.webp";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-box">
        <img
          src={homeImg}
          alt="home_img.webp"
          height={1000}
          width={2000}
          className="home-page-image"
        />
        <div className="home-page-image-heading">
          <h4 className="home-page-heading-text">
            Not sure where to go? Perfect.
          </h4>
          <br />
          <br />
          <button className="home-page-heading-btn">I'm flexible</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
