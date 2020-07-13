import React, { useState, useEffect } from "react";
import "./ProductsFolderList.style.scss";
import { useSelector } from "react-redux";
import ProductsFolderListCatogory from "./ProductsFolderListCatogory/ProductsFolderListCatogory.component";

import Axios from "axios";

function ProductsFolderList() {
  const [catogoryList, setCatogoryLIst] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/catogory/")
      .then((response) => {
        setCatogoryLIst(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductsFolderList col-lg-3">
      {catogoryList.map((catogory) => {
        return (
          <ProductsFolderListCatogory catogory={catogory} key={catogory._id} />
        );
      })}
    </div>
  );
}

export default ProductsFolderList;
