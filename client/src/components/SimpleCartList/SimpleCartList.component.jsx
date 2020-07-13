import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../Button/Button.component";
import SimpleCartListPreview from "./SimpleCartListPreview/SimpleCartListPreview.component";

import "./SimpleCartList.style.scss";

function SimpleCartList() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  //reduce（（前次變數，變數）=>前次變數+變數，前次變數初始值）
  const cartItemsCount = cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );
  const cartItemsPrice = cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <div className="SimpleCartList">
      <div className="iconBlock cartIcon">
        <i className="fas fa-shopping-cart"></i>
        {cartItemsCount > 0 ? (
          <div className="cartCount">{cartItemsCount}</div>
        ) : null}
      </div>

      <div className="hidingBlock hidingBlock-cartList">
        <div className="ListContainer">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <SimpleCartListPreview key={cartItem._id} cartItem={cartItem} />
            ))
          ) : (
            <p>購物車沒有商品</p>
          )}
        </div>
        <div className="CaptionContainer">
          <h6>總計: NT${cartItemsPrice}</h6>
          <Link
            to="/checkout"
            style={{ textDecoration: "none" }}
            onClick={(event) => {
              event.currentTarget.parentNode.parentNode.classList.remove(
                "hidingBlock-show"
              );
            }}
          >
            <Button title="前往購物車" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SimpleCartList;
