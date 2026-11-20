import React from "react";

export function Navbar() {
  return (
    <ul>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/">About Me</NavItem>
      <NavItem link="/">Blog</NavItem>
      <NavItem link="/">Projects</NavItem>
    </ul>
  );
}

function NavItem({ children, link }) {
  return (
    <li className="navbar-itm">
      <a href={link}>{children}</a>
    </li>
  );
}
