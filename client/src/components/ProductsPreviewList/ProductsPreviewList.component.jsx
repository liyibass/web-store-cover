import React, { useEffect } from "react";
import "./ProductsPreviewList.style.scss";
import ProductCardPreview from "./ProductCardPreview/ProductCardPreview.component";
import { useSelector, useDispatch } from "react-redux";

import { fetchProductListFromApi } from "../../redux/productList/productList.action";

function ProductsPreviewList() {
  const productList = useSelector((state) => state.productList.productList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductListFromApi("5f0d13cd6d7355e2c999039d"));
  }, []);

  return (
    <div className="ProductsPreviewList col-lg-9">
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
