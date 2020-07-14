import React from "react";
import "./HomeProducts.style.scss";
import { useSelector } from "react-redux";
import ItemPreview from "./ItemPreview/ItemPreview.component";
import Title from "../Title/Title.component";

function HomeProducts() {
  const productList = useSelector((state) => state.productList.productList);

  console.log(productList);
  return (
    <div className="HomeProducts">
      <div className="container">
        <Title title="New Arrivals" />
        <div className="HomeProductsRow row">
          {/* {productList[0].folder[2].items.map((item) => {
            return <ItemPreview key={item._id} item={item} />;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
