import React, { useState, useEffect } from "react";
import "./Navbar.style.scss";
import NavButton from "./NavButton/NavButton.component";

import Axios from "axios";

function Navbar() {
  const [catogoryList, setCatogoryLIst] = useState([]);

  const menuToggle = () => {
    const catogoryList = document.querySelector(".catogoryList");
    catogoryList.classList.toggle("show");
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
    Axios.get("http://localhost:5000/api/navigation")
      .then((response) => {
        setCatogoryLIst(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Navbar">
      <div className="hamburger">
        <i className="fas fa-bars"></i>
      </div>

      <div className="catogoryList">
        <div className="catogoryList-header">
          <div className="catogoryListLogo">
            <a href="/">
              <i className="far fa-eye brandLogo"></i>
            </a>
          </div>
          <div className="cross">
            <i className="fas fa-times "></i>
          </div>
        </div>
        <div className="catogoryList-container">
          {catogoryList.map((catogory) => {
            return (
              <NavButton
                key={catogory._id}
                catogory={catogory}
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
