import React, { useEffect } from "react";
import "./HomeProducts.style.scss";
import { useSelector, useDispatch } from "react-redux";
import ItemPreview from "./ItemPreview/ItemPreview.component";
import Title from "../Title/Title.component";

import { fetchProductListFromApi } from "../../redux/productList/productList.action";

function HomeProducts() {
  const productList = useSelector((state) => state.productList.productList);
  const dispatch = useDispatch();
  dispatch(fetchProductListFromApi("5f0d1377aad7f0e259e158a3"));
  useEffect(() => {
    // dispatch(fetchProductListFromApi("5f0d1377aad7f0e259e158a3"));
  }, []);

  return (
    <div className="HomeProducts">
      <div className="container">
        <Title title="New Arrivals" />
        <div className="HomeProductsRow row">
          {productList.map((item) => {
            return <ItemPreview key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
