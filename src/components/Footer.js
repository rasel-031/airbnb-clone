import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-inside-box">
        <span>© 2022 Airbnb, Inc</span>
        <div className="footer-inside-list">
          <li className="footer-inside-list-item">Privacy</li>
          <li className="footer-inside-list-item">Terms</li>
          <li className="footer-inside-list-item">Sitemap</li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
