import React from "react";
import "./Button.style.scss";

function Button({ title, onClick, className, onKeyPress, type }) {
  // console.log(className);

  return (
    <button
      className={`Button ${className}`}
      onClick={onClick}
      onKeyPress={onKeyPress}
      type={type}
    >
      {className === "Button-facebook" ? (
        <i className="fab fa-facebook-square"></i>
      ) : null}
      {title}
    </button>
  );
}

export default Button;
