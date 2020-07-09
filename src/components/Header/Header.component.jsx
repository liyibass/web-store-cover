import React, { useEffect } from "react";

import SimpleCartList from "../SimpleCartList/SimpleCartList.component";
import SimpleLogin from "../SimpleLogin/SimpleLogin.component";
import SimpleSearch from "../SimpleSearch/SimpleSearch.component";
import Navbar from "./Navbar/Navbar.component";

import "./Header.style.scss";

function Header() {
  // 實現cartIcon顯示cart的開關;
  useEffect(() => {
    const iconBlocks = document.querySelectorAll(".iconBlock");
    const hidingBlocks = document.querySelectorAll(".hidingBlock");

    // document.addEventListener("click", () => {
    //   hidingBlocks.forEach((hidingBlock) => {
    //     if (hidingBlock.classList.contains("hidingBlock-show")) {
    //       // hidingBlock.classList.remove("hidingBlock-show");
    //       console.log("YOYO");
    //     }
    //   });
    // });

    iconBlocks.forEach((iconBlock, index) => {
      iconBlock.addEventListener("click", () => {
        for (let i = 0; i < hidingBlocks.length; i++) {
          if (i === index) {
            hidingBlocks[i].classList.toggle("hidingBlock-show");
          } else {
            hidingBlocks[i].classList.remove("hidingBlock-show");
          }
        }
      });
    });

    // iconBlock.addEventListener("click", () => {
    //   SimpleLogin.classList.toggle("hidingBlock-show");
    // });
  }, []);

  return (
    <div className="Header">
      <div className="logoSection">
        <a href="/">
          <i className="far fa-eye brandLogo"></i>
        </a>
      </div>
      <div className="functionSection">
        <SimpleLogin />
        <SimpleCartList />
        <SimpleSearch />
      </div>

      <Navbar />
    </div>
  );
}

export default Header;
