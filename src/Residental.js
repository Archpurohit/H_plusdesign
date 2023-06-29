import React from "react";
import "./Residental.css";

export default function Residental() {
  return (
    <div>
      <h1>Residental Property Projects</h1>
      <div className="Residental">
        <div className="ResidentalBox">

          <div className="Projects2">
            <div className="ProjectName">Coquitlam Residental Home</div>
            <div className="picture" id="pic11"></div>
          </div>

          <div className="Projects2">
            <div className="ProjectName">Vancouver Condo</div>
            <div className="picture" id="pic21"></div>
          </div>

          <div className="Projects2">
            <div className="ProjectName">Kitchen Reno</div>
            <div className="picture" id="pic31"></div>
          </div>

          <div className="Projects2">
            <div className="ProjectName">Alaska Single family home</div>
            <div className="picture" id="pic41"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
