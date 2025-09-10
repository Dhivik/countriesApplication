import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header() {
  const [darkMode, setDarkMode] = useContext(ThemeContext);

  return (
    <header className={`header-container ${darkMode ? "dark-mode" : " "}`}>
      <div className={"header-content"}>
        <h2 className="title">Where in the world</h2>
        <p
          onClick={() => {
            setDarkMode(!darkMode);
            localStorage.setItem("darkMode", !darkMode);
          }}
          className={
            darkMode ? "toggle-mode-button dark-mode" : "toggle-mode-button"
          }
        >
          {<i className={`fa-regular fa-${darkMode ? "sun" : "moon"}`}></i>}
          &nbsp;
          {darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
}
