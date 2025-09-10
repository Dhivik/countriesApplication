import Main from "./Main.js";
import { useState, useContext } from "react";
import Search from "../Search/Search.js";
import Dropdown from "../Dropdown/Dropdown.js";
import { ThemeContext } from "../../contexts/ThemeContext.jsx";

export default function Home() {
  let [searchItem, setSearchItem] = useState("");

  const [darkMode, setDarkMode] = useContext(ThemeContext);

  return (
    <main className={`${darkMode ? "dark-mode" : ""}`}>
      <div className="search-content">
        <Search setSearchItem={setSearchItem} />
        <Dropdown setSearchItem={setSearchItem} />
      </div>
      <Main
        theme={darkMode}
        searchItem={searchItem}
      />
    </main>
  );
}
