import React from "react";
import "../css/TripLocation.css";
import NextTripCart from "./carts/NextTripCart";
import rajshahi_img from "../images/rajshahi.jpg";
import sylhet_img from "../images/sylhet.jpg";
import cox_bazar_img from "../images/coxbazar.jpg";
import dhaka_img from "../images/dhaka.jpg";

function TripLocation() {
  return (
    <div className="trip-location-container">
      <h3 className="trip-location-heading-text">
        Inspiration for your next trip
      </h3>
      <div className="trip-location-carts-box">
        <NextTripCart
          location={{
            name: "Rajshahi",
            distance: "280 kilometers away!",
            image: rajshahi_img,
          }}
        />
        <NextTripCart
          location={{
            name: "Sylhet",
            distance: "150 kilometers away!",
            image: sylhet_img,
          }}
        />
        <NextTripCart
          location={{
            name: "Cox's Bazar",
            distance: "200 kilometers away!",
            image: cox_bazar_img,
          }}
        />
        <NextTripCart
          location={{
            name: "Dhaka",
            distance: "0 kilometers away!",
            image: dhaka_img,
          }}
        />
      </div>
      <div className="trip-location-horizontal">
        <div className="trip-location-item">
          <NextTripCart
            location={{
              name: "Rajshahi",
              distance: "280 kilometers away!",
              image: rajshahi_img,
            }}
          />
        </div>
        <div className="trip-location-item">
          <NextTripCart
            location={{
              name: "Sylhet",
              distance: "150 kilometers away!",
              image: sylhet_img,
            }}
          />
        </div>
        <div className="trip-location-item">
          <NextTripCart
            location={{
              name: "Cox's Bazar",
              distance: "200 kilometers away!",
              image: cox_bazar_img,
            }}
          />
        </div>
        <div className="trip-location-item">
          <NextTripCart
            location={{
              name: "Dhaka",
              distance: "0 kilometers away!",
              image: dhaka_img,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TripLocation;
