import React from "react";
import './Services.css';

export default function Services() {
  return (
    <div className="center1">
      <div className="home1">
        <div className="title1">H Plus Design's Services</div>
        <div className="servicesContainer">
          <div className="servicesList" id="Serv1">
            <div className="serviceText" >
              <h4>
                Architectural designing - (single-family home,
                addition, and renovations), (Tenant improvements)
              </h4>
                <div className="servicePicture" id="Servicepic1"></div>
            </div>
          </div>
          <div className="servicesList" id="Serv2">
            <div className="serviceText" >
              <h4> Project Management and Coordination</h4>
                <div className="servicePicture" id="Servicepic2"></div>
            </div>
          </div>
          <div className="servicesList" id="Serv3">
            <div className="serviceText" >
              <h4> Building permit drawings</h4>
                <div className="servicePicture" id="Servicepic3"></div>
            </div>
          </div>
          <div className="servicesList" id="Serv4">
            <div className="serviceText" >
              <h4> Fraser Health drawings and coordination to obtain permit</h4>
                <div className="servicePicture" id="Servicepic4"></div>
            </div>
          </div>
          <div className="servicesList" id="Serv5">
            <div className="serviceText" >
              <h4> Business Licence, and Liquor license coordination</h4>
                <div className="servicePicture" id="Servicepic5"></div>
            </div>
          </div>
          <div className="servicesList" id="Serv6">
            <div className="serviceText" >
              <h4>AutoCAD drafting</h4>
                <div className="servicePicture" id="Servicepic6"></div>
            </div>
          </div>
          <div className="servicesList" id="Serv7">
            <div className="serviceText" >
              <h4> 3D rendering</h4>
                <div className="servicePicture" id="Servicepic7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
