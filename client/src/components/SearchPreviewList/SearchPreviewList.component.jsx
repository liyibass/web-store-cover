import React from "react";
import "./SearchPreviewList.style.scss";
import ProductCardPreview from "./SearchProductCardPreview/SearchProductCardPreview.component";
import { useSelector } from "react-redux";

function SearchPreviewList() {
  const productList = useSelector((state) => state.productList.productList);

  return (
    <div className="SearchPreviewList col-lg-12">
      <h4>{productList.title}</h4>
      <div className="row">
        {productList.map((item) => {
          return <ProductCardPreview product={item} key={item._id} />;
        })}
      </div>
    </div>
  );
}

export default SearchPreviewList;
