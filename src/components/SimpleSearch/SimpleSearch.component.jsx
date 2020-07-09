import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button.component";

import "./SimpleSearch.style.scss";

function SimpleSearch() {
  const [input, setInput] = useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="SimpleSearch">
      <div className="iconBlock searchIcon">
        <i className="fas fa-search"></i>
      </div>

      <div className="hidingBlock hidingBlock-searchBlock">
        <input
          type="text"
          value={input}
          placeholder="請輸入產品"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button title="搜尋" />
      </div>
    </div>
  );
}

export default SimpleSearch;
