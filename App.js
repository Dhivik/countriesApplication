import Header from "./Components/header/Header.js";
import "./style.css";
import { Outlet } from "react-router";
import {  ThemeProvider } from "./contexts/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
