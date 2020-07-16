import React, { useState, useEffect } from "react";
import "./ProductsFolderList.style.scss";
import ProductsFolderListCatogory from "./ProductsFolderListCatogory/ProductsFolderListCatogory.component";

import Axios from "axios";

function ProductsFolderList() {
  const [catogoryList, setCatogoryList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/navigation")
      .then((response) => {
        setCatogoryList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductsFolderList col-lg-3 col-md-3">
      {catogoryList.map((catogory) => {
        return (
          <ProductsFolderListCatogory catogory={catogory} key={catogory._id} />
        );
      })}
    </div>
  );
}

export default ProductsFolderList;
