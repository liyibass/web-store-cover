import React, { useState, useEffect } from "react";
import "./ProductsFolderList.style.scss";
import ProductsFolderListCatogory from "./ProductsFolderListCatogory/ProductsFolderListCatogory.component";

import Axios from "axios";

function ProductsFolderList() {
  const [navigationList, setNavigationList] = useState([]);

  useEffect(() => {
    Axios.get("https://liyi-web-server.herokuapp.com/api/navigation")
      .then((response) => {
        setNavigationList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductsFolderList col-lg-3 col-md-3">
      {navigationList.map((navigation) => {
        return (
          <ProductsFolderListCatogory
            navigation={navigation}
            key={navigation._id}
          />
        );
      })}
    </div>
  );
}

export default ProductsFolderList;
