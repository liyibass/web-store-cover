import React from "react";
import "./Button.style.scss";

function Button({ title, onClick }) {
  return (
    <div className="Button" onClick={onClick}>
      {title}
    </div>
  );
}

export default Button;
