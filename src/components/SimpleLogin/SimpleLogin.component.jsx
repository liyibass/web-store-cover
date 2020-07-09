import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./SimpleLogin.style.scss";
import Button from "../Button/Button.component";
import { Link } from "react-router-dom";

function SimpleLogin() {
  return (
    <div className="SimpleLogin">
      <div className="iconBlock userIcon ">
        <i className="far fa-user icon"></i>
      </div>

      <div className="hidingBlock hidingBlock-userBlock">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            title="會員登入"
            className="Button-login"
            onClick={(event) => {
              event.currentTarget.parentNode.parentNode.classList.remove(
                "hidingBlock-show"
              );
            }}
          />
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button
            title="註冊新會員"
            className="Button-sign-up"
            onClick={(event) => {
              event.currentTarget.parentNode.parentNode.classList.remove(
                "hidingBlock-show"
              );
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default SimpleLogin;
