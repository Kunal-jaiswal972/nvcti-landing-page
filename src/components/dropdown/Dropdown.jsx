import React from "react";
import "./styles.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <span>ABOUT</span>
      <div className="dropdown-content">
        <a href="/aboutISM">About IIT(ISM)</a>
        <a href="/aboutNVCTI">About NVCTI</a>
        <a href="/administration">Administration</a>
      </div>
    </div>
  );
};

export default Dropdown;
