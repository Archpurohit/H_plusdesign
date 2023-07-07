import React from 'react';
import './Notary.css';

export default function Notary() {
  return (
    <div className="Notaryhome1">
      <div className="Notary1Page">
        <h1>Surrey Notary</h1>
        <div className="Notary">
          <div className="NotaryBox">
            <div className="NotaryHome">
              <div className="video-container">
                <video controls>
                  <source src="../NotaryVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
