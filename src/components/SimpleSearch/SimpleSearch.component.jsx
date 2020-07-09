import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./SimpleSearch.style.scss";

function SimpleSearch() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="SimpleSearch">
      <div className="iconBlock searchIcon">
        <i className="fas fa-search"></i>
      </div>

      <div className="hidingBlock hidingBlock-searchBlock"></div>
    </div>
  );
}

export default SimpleSearch;
