import React from "react";
import "./button.css";

const Button = ({ children, handleClick, className, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      onClick={handleClick}
      className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
