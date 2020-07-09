import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./SimpleLogin.style.scss";

function SimpleLogin() {
  return (
    <div className="SimpleLogin">
      <div className="iconBlock userIcon ">
        <i className="far fa-user icon"></i>
      </div>

      <div className="hidingBlock hidingBlock-userBlock"></div>
    </div>
  );
}

export default SimpleLogin;
