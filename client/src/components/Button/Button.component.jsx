import React from "react";
import "./Button.style.scss";

function Button({ title, onClick, className, onKeyPress }) {
  // console.log(className);

  return (
    <div
      className={`Button ${className}`}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      {className === "Button-facebook" ? (
        <i className="fab fa-facebook-square"></i>
      ) : null}
      {title}
    </div>
  );
}

export default Button;
