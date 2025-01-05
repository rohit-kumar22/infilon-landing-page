import React, { useState, useEffect } from "react";
import "./Accordion.css";
import { useViewport } from "../context/ViewportContext";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useViewport();

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
          {isOpen ? "^" : ""}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
