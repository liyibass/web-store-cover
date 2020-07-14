import React, { useState, useEffect } from "react";
import "./Navbar.style.scss";
import NavButton from "./NavButton/NavButton.component";

import Axios from "axios";

function Navbar() {
  const [catogoryList, setCatogoryLIst] = useState([]);

  useEffect(() => {
    const cross = document.querySelector(".cross");
    const hamburger = document.querySelector(".hamburger");
    const catogoryList = document.querySelector(".catogoryList");

    cross.addEventListener("click", () => {
      catogoryList.classList.toggle("show");
    });

    hamburger.addEventListener("click", () => {
      catogoryList.classList.toggle("show");
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/catogory/")
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
          <div className="logoSection">
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
            return <NavButton key={catogory._id} catogory={catogory} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
