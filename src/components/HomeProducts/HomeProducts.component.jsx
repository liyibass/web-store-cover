import React from "react";
import "./HomeProducts.style.scss";
import { useSelector } from "react-redux";
import ItemPreview from "../ItemPreview/ItemPreview.component";
import Title from "../Title/Title.component";

function HomeProducts() {
  const shopData = useSelector((state) => state.shopData.shopData);

  return (
    <div className="HomeProducts">
      <div className="container">
        <Title title="New Arrivals" />
        <div className="HomeProductsRow row">
          {shopData[3].items.map((item) => {
            return <ItemPreview key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
