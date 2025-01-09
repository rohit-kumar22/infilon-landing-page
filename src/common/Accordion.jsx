import React, { useState, useEffect, useContext } from "react";
import "./Accordion.css";
import { useViewport } from "../context/ViewportContext";
import Arrow_white from "../assets/Arrow_white.svg";
import Arrow_black from "../assets/Arrow_black.svg";
import { ThemeContext } from "../context/ThemeContext";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useViewport();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>
          <img
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(180deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            src={theme === "light" ? Arrow_black : Arrow_white}
            alt="arrow"
          />
        </span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
