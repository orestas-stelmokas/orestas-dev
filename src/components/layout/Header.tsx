import React from "react";
import { Navbar } from "./Navbar.tsx";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div id="container">
        <h2>
          orestas<span>.dev</span>
        </h2>
      </div>
      <div id="placeholder">NIGHTMODE</div>
    </div>
  );
}

export default Header;
