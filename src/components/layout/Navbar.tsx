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

interface Props {
  children: React.ReactNode;
  link: string;
}

function NavItem({ children, link }: Props) {
  return (
    <li className="navbar-itm">
      <a href={link}>{children}</a>
    </li>
  );
}
