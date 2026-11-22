import React from "react";

export function Navbar() {
  return (
    <ul>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/">About Me</NavItem>
      <NavItem link="/">Blog</NavItem>
      <NavItem
        link="https://github.com/orestas-stelmokas?tab=repositories"
        target="_blank"
      >
        Projects
      </NavItem>
    </ul>
  );
}

interface Props {
  children: React.ReactNode;
  link: string;
  target?: string;
}

function NavItem({ children, link, target }: Props) {
  return (
    <li className="navbar-itm">
      <a href={link} target={target}>
        {children}
      </a>
    </li>
  );
}
