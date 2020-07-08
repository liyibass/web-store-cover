import React, { useEffect } from "react";
import { EventHandler } from "../../scripts/EventHandler";
import "./Header.style.scss";
import Navbar from "./Navbar/Navbar.component";
import { useSelector } from "react-redux";
import Button from "../Button/Button.component";

import SimpleCartList from "../SimpleCartList/SimpleCartList.component";

function Header() {
  // 實現cartIcon顯示cart的開關
  useEffect(() => {
    const cartIcon = document.querySelector(".cartIcon");
    const simpleCartList = document.querySelector(".SimpleCartList");

    cartIcon.addEventListener("click", () => {
      simpleCartList.classList.toggle("SimpleCartList-show");
    });
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);
  // 累加商品數量
  //reduce（（前次變數，變數）=>前次變數+變數，前次變數初始值）
  const cartItemsCount = cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );

  return (
    <div className="Header">
      <div className="logoSection">
        <a href="/">
          <i className="far fa-eye brandLogo"></i>
        </a>
      </div>
      <div className="cartSection">
        <div className="cartSection-icon">
          <i className="far fa-user"></i>
        </div>
        <div className="cartSection-icon cartIcon">
          <i className="fas fa-shopping-cart"></i>
          {cartItemsCount > 0 ? (
            <div className="cartCount">{cartItemsCount}</div>
          ) : null}

          <SimpleCartList />
        </div>
        <div className="cartSection-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
