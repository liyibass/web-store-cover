import React from "react";
import "./ProductsFolderList.style.scss";
import { useSelector } from "react-redux";
import ProductsFolderListCatogory from "./ProductsFolderListCatogory/ProductsFolderListCatogory.component";

function ProductsFolderList() {
  const shopDataList = useSelector((state) => state.shopData.shopDataList);
  return (
    <div className="ProductsFolderList col-lg-3">
      {shopDataList.map((catogory) => {
        return (
          <ProductsFolderListCatogory catogory={catogory} key={catogory.id} />
        );
      })}
    </div>
  );
}

export default ProductsFolderList;
