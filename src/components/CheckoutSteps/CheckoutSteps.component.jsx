import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";

import "./CheckoutSteps.style.scss";

function CheckoutSteps() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="CheckoutSteps col-lg-9">
      <div className="CartContent">
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
              return <CheckoutItem item={cartItem} key={cartItem.id} />;
            })}
          </div>
        </div>
      </div>
      <div className="members">
        <h3 className="step-header">會員專區</h3>
      </div>
      <div className="payment">
        <h3 className="step-header">付款運送方式</h3>
      </div>
    </div>
  );
}

export default CheckoutSteps;
