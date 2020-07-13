import React from "react";
import "./CheckoutCartTable.style.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem/CheckoutItem.component";

function CheckoutCartTable() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="CheckoutCartTable">
      <h3 className="step-header">購物車內容</h3>
      <div className="CartList">
        <div className="CartList-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        <div className="CartList-content">
          {cartItems.map((cartItem) => {
            return <CheckoutItem item={cartItem} key={cartItem._id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CheckoutCartTable;
