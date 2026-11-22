import React from "react";
import { Navbar } from "./Navbar.tsx";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div id="container">
        <a href="/">
          <h2>
            orestas<span>.dev</span>
          </h2>
        </a>
      </div>
      <div id="placeholder">NIGHTMODE</div>
    </div>
  );
}

export default Header;
