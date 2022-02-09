import React from "react";
import "../css/GiftCard.css";
import gift_1 from "../images/gift1.jpg";
import gift_2 from "../images/gift2.jpg";
import gift_3 from "../images/gift3.jpg";

function GiftCard() {
  return (
    <div className="gift-card-container">
      <div className="gift-card-heading-box">
        <h1 className="gift-card-text">
          Shop Airbnb <br /> gift cards
        </h1>
        <br />
        <br />
        <button className="gift-card-btn">Learn more</button>
      </div>
      <div className="gift-card-box">
        <img src={gift_1} alt="" className="gift-card-inside-img-1" />
        <img src={gift_3} alt="" className="gift-card-inside-img-2" />
        <img src={gift_2} alt="" className="gift-card-inside-img-3" />
      </div>
    </div>
  );
}

export default GiftCard;
