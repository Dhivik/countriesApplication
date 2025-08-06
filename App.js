import Header from "./Components/Header/Header.js";
import Search from "./Components/Search/Search.js";
import Dropdown from "./Components/Dropdown/Dropdown.js";
import Main from "./Components/Main/Main.js";
import { useState } from "react";
import "./style.css";
const App = () => {
  
  let [searchItem, setSearchItem] = useState("");
  let [filterValue, setFilterValue] = useState("");
  return (
    <>
      <Header />
      <div className="search-content">
        <Search setSearchItem={setSearchItem} />
        <Dropdown setFilterValue={setFilterValue} />
      </div>
      <Main searchItem={searchItem} filterValue={filterValue} />
    </>
  );
};

export default App;
