import React from "react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <h1>Hello!</h1>
        <h2>I am Orestas Stelmokas</h2>
        <div className="active-job">
          <div id="circle-active-job"></div>
          <h5 style={{ color: "var(--primary)" }}>Software Systems Student</h5>
        </div>
        <div id="seperator-line"></div>
        <p>
          Currently a third-year year Software Systems student at Kaunas
          University of Technology. Alongside my studies, I am developing my
          skills in web design, networking and cybersecurity.
        </p>
        <button
          id="hero-cta-btn"
          onClick={() =>
            window.open(
              "../../../public/Orestas Stelmokas.pdf",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          See My Resume
        </button>
      </div>
      <div className="terminal-container">
        <div className="terminal-titlebar">
          <div id="terminal-dots-container">
            <div
              style={{
                width: "16px",
                height: "16px",
                background: "#FF383C",
                borderRadius: "100%",
              }}
            ></div>
            <div
              style={{
                width: "16px",
                height: "16px",
                background: "#FFCC00",
                borderRadius: "100%",
              }}
            ></div>
            <div
              style={{
                width: "16px",
                height: "16px",
                background: "#4BDF55",
                borderRadius: "100%",
              }}
            ></div>
          </div>
          <div id="terminal-title">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 17.4167C22 17.9029 21.7893 18.3692 21.4142 18.713C21.0391 19.0568 20.5304 19.25 20 19.25H4C3.46957 19.25 2.96086 19.0568 2.58579 18.713C2.21071 18.3692 2 17.9029 2 17.4167V4.58333C2 4.0971 2.21071 3.63079 2.58579 3.28697C2.96086 2.94315 3.46957 2.75 4 2.75H9L11 5.5H20C20.5304 5.5 21.0391 5.69315 21.4142 6.03697C21.7893 6.38079 22 6.8471 22 7.33333V17.4167Z"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
              />
            </svg>
            <p>Orestas — -bash </p>
          </div>
        </div>
        <div className="terminal-body">
          <p className="terminal-text">
            <span className="terminal-hostname">root@orestas.dev ~ $</span>
            fastfetch
          </p>
          <div id="fastfetch-output">
            <div id="fastfetch-image-container">
              <img
                id="fastfetch-image"
                src="../../../public/coding-logo.png"
                alt="coding-logo"
              />
            </div>
            <div id="fastfetch-info-container">
              <p className="terminal-fastfetch-info-section-name">
                TECHNICAL INFORMATION
              </p>
              <div>
                <div className="fastfetch-info-row">
                  <label>
                    <p>Tech</p>
                  </label>
                  <p>Next.js / TypeScript</p>
                </div>
                <div className="fastfetch-info-row">
                  <label>
                    <p>Education</p>
                  </label>
                  <p>Software Systems @KTU</p>
                </div>
                <div className="fastfetch-info-row">
                  <label>
                    <p>Employmet</p>
                  </label>
                  <p>NULL</p>
                </div>
                <div className="fastfetch-info-row">
                  <label>
                    <p>Email</p>
                  </label>
                  <p>
                    <a href="mailto:ostelmokas@gmail.com" target="_blank">
                      ostelmokas@gmail.com
                    </a>
                  </p>
                </div>
                <div className="fastfetch-info-row">
                  <label>
                    <p>GitHub</p>
                  </label>
                  <p>
                    <a
                      href="https://github.com/orestas-stelmokas"
                      target="_blank"
                    >
                      github.com/orestas-stelmokas
                    </a>
                  </p>
                </div>
              </div>
              <p className="terminal-fastfetch-info-section-name">HOBBIES</p>
              <div>
                <div className="fastfetch-info-row">
                  <label>
                    <p>Sports</p>
                  </label>
                  <p>Gym / Calisthenics</p>
                </div>
                <div className="fastfetch-info-row">
                  <label>
                    <p>Programming</p>
                  </label>
                  <p>Go, JavaScript, C#, Python</p>
                </div>
                <div className="fastfetch-info-row">
                  <label>
                    <p>Academy</p>
                  </label>
                  <p>IoT and Networking @ Teltonika</p>
                </div>
              </div>
            </div>
          </div>
          <p className="terminal-text">
            <span className="terminal-hostname">root@orestas.dev ~ $</span>
            <div id="terminal-typing-indicator"></div>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
