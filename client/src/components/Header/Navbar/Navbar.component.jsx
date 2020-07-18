import React, { useState, useEffect } from "react";
import "./Navbar.style.scss";
import NavButton from "./NavButton/NavButton.component";

import Axios from "axios";

function Navbar() {
  const [navigationList, setNavigationList] = useState([]);

  const menuToggle = () => {
    const navigationList = document.querySelector(".navigationList");
    navigationList.classList.toggle("show");
  };

  useEffect(() => {
    const cross = document.querySelector(".cross");
    const hamburger = document.querySelector(".hamburger");
    cross.addEventListener("click", () => {
      menuToggle();
    });

    hamburger.addEventListener("click", () => {
      menuToggle();
    });
  }, []);

  useEffect(() => {
    Axios.get("https://liyi-web-server.herokuapp.com/api/navigation")
      .then((response) => {
        setNavigationList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Navbar">
      <div className="hamburger">
        <i className="fas fa-bars"></i>
      </div>

      <div className="navigationList">
        <div className="navigationList-header">
          <div className="navigationListLogo">
            <a href="/">
              <i className="far fa-eye brandLogo"></i>
            </a>
          </div>
          <div className="cross">
            <i className="fas fa-times "></i>
          </div>
        </div>
        <div className="navigationList-container">
          {navigationList.map((catogory) => {
            return (
              <NavButton
                key={catogory._id}
                navigation={catogory}
                menuToggle={menuToggle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
