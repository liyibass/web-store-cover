import React from "react";
import "./ProductsPreviewList.style.scss";
import ProductCardPreview from "./ProductCardPreview/ProductCardPreview.component";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading.component";

function ProductsPreviewList() {
  const productList = useSelector((state) => state.productList.productList);
  const loading = useSelector((state) => state.productList.loading);

  return (
    <div className="ProductsPreviewList col-lg-9 col-md-12">
      <h4>{productList.title}</h4>

      <div className="row">
        {loading ? (
          <Loading />
        ) : (
          productList.map((item) => {
            return <ProductCardPreview product={item} key={item._id} />;
          })
        )}
      </div>
    </div>
  );
}

export default React.memo(ProductsPreviewList);
