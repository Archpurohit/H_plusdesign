import React from 'react';
import './Notary.css';
import NotaryVideo from './NotaryVideo.mp4';

export default function Notary() {
  return (
    <div className="Notaryhome1">
        <h1>Surrey Notary</h1>
        <div className="Notary">
              <div className="video-container">
                <video id='notaryvid' controls>
                  <source src={NotaryVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div>
          </div>
        </div>


  );
}
