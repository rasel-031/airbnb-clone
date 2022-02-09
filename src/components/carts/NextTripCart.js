import React from "react";
import "./NextTripCart.css";

function NextTripCart(props) {
  return (
    <div className="next-trip-cart-container">
      <img src={props.location.image} alt="" className="next-trip-cart-image" />
      <div className="next-trip-cart-text">
        <h1>{props.location.name}</h1>
        <p>{props.location.distance}</p>
      </div>
    </div>
  );
}

export default NextTripCart;
