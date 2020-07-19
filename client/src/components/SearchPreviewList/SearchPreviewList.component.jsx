import React, { useState, useEffect } from "react";
import "./SearchPreviewList.style.scss";
import ProductCardPreview from "./SearchProductCardPreview/SearchProductCardPreview.component";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading.component";

function SearchPreviewList() {
  const productList = useSelector((state) => state.productList.productList);
  const searchKeyWord = useSelector((state) => state.productList.searchKeyWord);
  const loading = useSelector((state) => state.productList.loading);

  const [resultCount, setResultCount] = useState(productList.length);

  useEffect(() => {
    setResultCount(productList.length);
  }, [productList]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="SearchPreviewList col-lg-12">
        <div className="promptSection">
          搜尋「{searchKeyWord}」，總共有 {resultCount} 項搜尋結果
        </div>
        <hr size="8px" align="center" width="100%" />
        <h5>商品搜尋結果{resultCount}筆</h5>
        <div className="row">
          {productList.map((item) => {
            return <ProductCardPreview product={item} key={item._id} />;
          })}
        </div>
      </div>
    );
  }
}

export default SearchPreviewList;
