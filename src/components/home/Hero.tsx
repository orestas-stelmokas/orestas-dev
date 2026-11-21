import React from "react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <h1>Hello!</h1>
        <h2>I am Orestas Stelmokas</h2>
        <div className="active-job">
          <div id="circle-active-job"></div>
          <h5>Software Engineering Student</h5>
        </div>
        <div id="seperator-line"></div>
        <p>
          Currently a 3rd year Software Systems student at Kaunas University of
          Technology. Alongside my studies, I am actively learning web
          development, networking and cybersecurity.
        </p>
        <button id="hero-cta-btn">See My Resume</button>
      </div>
      <div className="terminal-container">s</div>
    </div>
  );
}

export default Hero;
