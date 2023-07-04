import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = "harshadanaik@gmail.com";
    const subject = "Contact Inquiry";
    const body = `Full Name: ${event.target["full-name"].value}\n
                 Email: ${event.target.email.value}\n
                 Company Name: ${event.target["company-name"].value}\n
                 Company Size: ${event.target["company-size"].value}\n
                 Message: ${event.target.message.value}`;

    // Open default email client
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact">
      <div className="conPage">
        <div className="centeredContent">
          <div className="leftSide">
            <div className="titleContact">
              <h1>Contact Us</h1>
            </div>
            <div className="smallerTitle">
              <FontAwesomeIcon icon={["fas", "plus"]} />
              <h4>What can H Plus Design do for you?</h4>
            </div>
            <div className="boxes">
              <p>• Expertise you can trust.</p>
            </div>
            <div className="boxes">
              <p>• Collaborative design tailored to your vision.</p>
            </div>
            <div className="boxes">
              <p>• Meticulous attention to detail for impeccable results.</p>
            </div>
          </div>
          <div className="rightSide">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full-name">Full Name:</label>
                <input type="text" id="full-name" name="full-name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="company-name">Company Name:</label>
                <input type="text" id="company-name" name="company-name" />
              </div>
              <div>
                <label htmlFor="company-size">Company Size:</label>
                <input type="text" id="company-size" name="company-size" />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
