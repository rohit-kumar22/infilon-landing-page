import React, { useContext } from "react";
import "../styles/Header.css";
import Logo_lite from "../assets/Logo_lite.svg";
import Logo_dark from "../assets/Logo_dark.svg";
import Theme_icon_lite from "../assets/Theme_icon_lite.svg";
import Theme_icon_dark from "../assets/Theme_icon_dark.svg";
import Hamburger_icon from "../assets/Hamburger_icon.svg";
import Hamburger_icon_dark from "../assets/Hamburger_icon_dark.svg";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <div className="container">
      <div className="about">
        <img
          className="logo"
          src={theme === "light" ? Logo_lite : Logo_dark}
          alt="fish-logo"
        />
        <p className="title">Central Texas fly fishing</p>
      </div>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <a key={index} href={`#${item.toLowerCase()}`} className="menu-link">
            {item}
          </a>
        ))}
        <div style={{ display: "flex", gap: "20px" }}>
          <img
            className="hamburger-icon"
            src={theme === "light" ? Hamburger_icon : Hamburger_icon_dark}
            alt="Hamburger Icon"
          />
          <img
            className="theme-icon"
            onClick={toggleTheme}
            src={theme === "light" ? Theme_icon_lite : Theme_icon_dark}
            alt="Theme Toggle"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
