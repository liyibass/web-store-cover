import React from "react";
import "./Title.style.scss";

function Title({ title }) {
  return (
    <div className="Title">
      <p>{title}</p>
    </div>
  );
}

export default Title;
