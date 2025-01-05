import React, { useState, useEffect } from "react";
import "./Accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open all accordions on mobile view
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsOpen(true); // Open all on mobile
    }
  }, []);

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
