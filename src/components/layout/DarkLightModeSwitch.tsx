import React, { useState } from "react";

function DarkLightModeSwitch() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      document.querySelector("body")?.setAttribute("data-theme", "light");
      setTheme("light");
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  };
  return (
    <button value={theme} onClick={toggleTheme}>
      DarkLightModeSwitch
    </button>
  );
}

export default DarkLightModeSwitch;
