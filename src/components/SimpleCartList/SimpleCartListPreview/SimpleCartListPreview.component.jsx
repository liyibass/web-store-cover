import React from "react";
import "./SimpleCartListPreview.style.scss";

function SimpleCartListPreview({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="SimpleCartListPreview">
      <div className="ProductImage">
        <img src={imageUrl} alt="" />
      </div>
      <div className="ProductCaption">
        <div className="name">{name}</div>
        <div className="price">
          NT${price} X {quantity}
        </div>
      </div>
    </div>
  );
}

export default SimpleCartListPreview;
