import React from "react";
import "./Residental.css";
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom';

export default function Residental() {
  return (
    <div className="fullResidentalPage">
      <div className="ResidentalPage">
        <h1>Residental Property Projects</h1>
        <div className="Residental">
          <div className="ResidentalBox">

            <Link to="/ResidentalCoquitlam1">
              <div className="Projects2">
                <div className="picture" id="pic11"></div>
                <div className="ProjectName"> <h3>Coquitlam Residental Home</h3></div>
              </div>
            </Link>

            <Link to="/VancouverCondo">
              <div className="Projects2">
                <div className="picture" id="pic21"></div>
                <div className="ProjectName"> <h3>Vancouver Condo</h3></div>
              </div>
            </Link>

            <Link to="/KitchenReno">
              <div className="Projects2">
                <div className="picture" id="pic31"></div>
                <div className="ProjectName"><h3>Kitchen Reno</h3></div>
              </div>
            </Link>

            <Link to="/AlaskaHome">
              <div className="Projects2">
                <div className="picture" id="pic41"></div>
                <div className="ProjectName"> <h3>Alaska Single family home</h3></div>
              </div>
            </Link>

            <Link to="/ResidentalCoquitlam2">
              <div className="Projects2">
                <div className="picture" id="pic51"></div>
                <div className="ProjectName"> <h3>Coquitlam Single family home</h3></div>
              </div>
            </Link>

            {/* <Link to="/Renovations">
              <div className="Projects2">
                <div className="picture" id="pic61"></div>
                <div className="ProjectName"> <h3>Renovations</h3></div>
              </div>
            </Link> */}

          </div>
        </div>
      </div>
    </div>
  );
}
