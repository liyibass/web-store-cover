import React from "react";
import "./ProductPreview.style.scss";

function ProductPreview({ product }) {
  return (
    <div className="ProductPreview col-lg-4">
      <h1>{product.name}</h1>
    </div>
  );
}

export default ProductPreview;
