import React from "react";
import "./ProductsPreviewList.style.scss";
import ProductCardPreview from "../ProductCardPreview/ProductCardPreview.component";
import { useSelector } from "react-redux";

function ProductsPreviewList() {
  const showShopData = useSelector((state) => state.shopData.showShopData);

  return (
    <div className="ProductsPreviewList col-lg-9">
      <h4>{showShopData.title}</h4>
      <div className="row">
        {showShopData.items.map((item) => {
          return <ProductCardPreview product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPreviewList;
