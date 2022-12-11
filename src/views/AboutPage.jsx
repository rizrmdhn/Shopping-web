import React from "react";
import '../styles/AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page container-fluid" id="about-page">
      <div className="about-container">
        <div className="about-header text-center">
          <p className="about-title text-center">About</p>
        </div>
        <div className="about-description">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
