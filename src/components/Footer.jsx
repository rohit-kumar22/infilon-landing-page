import "../styles/Footer.css";
import Logo_lite from "../assets/Logo_lite.svg";
import Logo_dark from "../assets/Logo_dark.svg";
import Facebook_icon from "../assets/Facebook_icon.svg";
import Instagram_icon from "../assets/Instagram_icon.svg";
import LinkedIn_icon from "../assets/LinkedIn_icon.svg";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="leftSection">
          <img
            className="logo"
            src={theme === "lite" ? Logo_lite : Logo_dark}
            alt="logo"
          />
          <div className="links">
            <a href="/faq">FAQ</a>
            <a href="/privacy">Privacy</a>
            <a href="/support">Support</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="rightSection">
          <div className="socialIcons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Facebook_icon} alt="facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Instagram_icon} alt="instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn_icon} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="copyright">
          &copy; 2024 Central Texas Fly Fishing. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
