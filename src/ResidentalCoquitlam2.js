import React from 'react';
import './ResidentalCoquitlam2.css';
import coquitlam2Video from './coquitlam2video.mp4';

export default function ResidentalCoquitlam2() {
  return (
    <div className="coquitlam2home1">
      <div className="coquitlam21Page">
        <h1>Coquitlam Family Home</h1>
        <div className="coquitlam2">
          <div className="coquitlam2Box">
            <div className="coquitlam2Home">
              <div className="picturecoquitlam21" id="coquitlam211"></div>
            </div>
            <div className="coquitlam2Home">
              <div className="picturecoquitlam21" id="coquitlam212"></div>
            </div>
            <div className="coquitlam2Home">
              <div className="picturecoquitlam21" id='coquitlam213'></div>
            </div>
            <div className="coquitlam2Home">
              <div className="picturecoquitlam21" id='coquitlam214'></div>
            </div>
        </div>

            <div>
              <div>
                <video controls>
                  <source src={coquitlam2Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
