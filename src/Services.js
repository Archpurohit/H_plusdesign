import React from "react";
import './Services.css';

export default function Services() {
  return (
    <div className="center">
      <div className="home">
        <div className="title1">H Plus Design's Services</div>
        <div className="servicesContainer">
          <div className="servicesList">
            <p>
              • Architectural designing - Residencial (single-family home,
              addition, and renovations), Commercial (Tenant improvements)
            </p>
          </div>
          <div className="servicesList">
            <p> • Project Management and coordination</p>
          </div>
          <div className="servicesList">
            <p> • Building permit drawings</p>
          </div>
          <div className="servicesList">
            <p> • Fraser Health drawings and coordination to obtain permit</p>
          </div>
          <div className="servicesList">
            <p> • Business Licence, and Liquor license coordination</p>
          </div>
          <div className="servicesList">
            <p>• AutoCAD drafting</p>
          </div>
          <div className="servicesList">
            <p> • 3D rendering</p>
          </div>
        </div>
      </div>
    </div>
  );
}
