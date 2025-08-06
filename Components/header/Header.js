import Button from "../Button/Button.js";
import { useState } from "react";

export default function Header() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <header className="header-container">
      <div className={"header-content"}>
        <h2 className="title">Where in the world</h2>
        <p onClick={toggleMode} className={mode === "dark" ? "toggle-mode-button dark-mode" : "toggle-mode-button"}>
          <i className="fa-regular fa-moon"></i>
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </header>
  );
}
