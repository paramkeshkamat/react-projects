import React from "react";
import "../styles/Buttons.css";

const Button = ({ buttons, changeValue, value }) => {
  return (
    <div className="Button">
      {buttons.map((button, index) => {
        const { id, company } = button;
        return (
          <button
            key={id}
            className={`job-btn ${value === index && "active-btn"}`}
            onClick={() => changeValue(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
