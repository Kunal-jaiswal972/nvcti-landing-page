import React from "react";
import "./styles.css";

const Dropdown = ({ title, info }) => {
  return (
    <div className="dropdown">
      <span>{title}</span>
      <div className="dropdown-content">
        {info.map((info) => (
          <a key={info.title} href={info.path}>
            {info.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
