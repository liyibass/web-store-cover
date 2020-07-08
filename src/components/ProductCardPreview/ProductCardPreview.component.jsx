import React from "react";
import "./ProductCardPreview.style.scss";

import Button from "../Button/Button.component";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cart/cart.action";

function ProductCardPreview({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="ProductCardPreview col-lg-4">
      <div className="ProductCard">
        <div className="ProductImage">
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="ProductCaption">
          <h5 className="ProductName">{product.name}</h5>
          <h5 className="ProductPrice">NT${product.price}</h5>
          {/* <Button
            title="加入購物車"
            onClick={() => dispatch(addCartItems(product))}
          /> */}
        </div>
        <div className="ProductDetail">
          <div className="ProductMoreInfoIcon ProductMoreInfoIcon-search">
            <i className="fas fa-search"></i>
            <h5>查看商品</h5>
          </div>
          <div className="ProductMoreInfoIcon ProductMoreInfoIcon-cart">
            <i className="fas fa-shopping-cart"></i>
            <h5>加入購物車</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardPreview;
