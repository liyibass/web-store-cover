import React from "react";
import "./SimpleCartList.style.scss";
import { useSelector } from "react-redux";
import Button from "../Button/Button.component";
import SimpleCartListPreview from "../SimpleCartListPreview/SimpleCartListPreview.component";
import { Link } from "react-router-dom";
function SimpleCartList() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItemsPrice = cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <div className="SimpleCartList">
      <div className="ListContainer">
        {cartItems.map((cartItem) => (
          <SimpleCartListPreview key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="CaptionContainer">
        <h6>總計: NT${cartItemsPrice}</h6>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <Button title="前往購物車" />
        </Link>
      </div>
    </div>
  );
}

export default SimpleCartList;
