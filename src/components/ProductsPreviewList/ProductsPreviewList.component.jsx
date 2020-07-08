import React from "react";
import "./ProductsPreviewList.style.scss";
import ProductPreview from "../ProductPreview/ProductPreview.component";
import { useSelector } from "react-redux";

function ProductsPreviewList() {
  const showShopData = useSelector((state) => state.shopData.showShopData);

  return (
    <div className="ProductsPreviewList col-lg-9">
      <div className="row">
        {showShopData.map((item) => {
          return <ProductPreview product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPreviewList;
