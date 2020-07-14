import React from "react";
import "./ProductsPreviewList.style.scss";
import ProductCardPreview from "./ProductCardPreview/ProductCardPreview.component";
import { useSelector } from "react-redux";

function ProductsPreviewList() {
  const productList = useSelector((state) => state.productList.productList);

  return (
    <div className="ProductsPreviewList col-lg-9 col-md-12">
      <h4>{productList.title}</h4>
      <div className="row">
        {productList.map((item) => {
          return <ProductCardPreview product={item} key={item._id} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPreviewList;
