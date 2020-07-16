import React, { useState, useEffect } from "react";
import "./product.style.scss";
import Axios from "axios";
import CatogoryCheckboxHandler from "../CatogoryCheckboxHandler/CatogoryCheckboxHandler";

function ProductList({ product, catogoryList }) {
  const [productState, setProductState] = useState(product);
  const [editMode, setEditMode] = useState(false);

  const changeHandler = (e) => {
    setProductState({ ...productState, [e.target.name]: e.target.value });
  };

  const uploadToServer = () => {
    Axios.put(
      `http://localhost:5000/api/product/${productState._id}`,
      productState
    )
      .then(() => console.log("Client has posted product to server."))
      .catch((error) => console.log(error.message));
  };

  if (editMode)
    // --------------------------------Edit-----------------------------------------
    return (
      <tr className="ProductList">
        <td className="column column-id">{productState._id}</td>
        <td className="column column-name">
          <input
            type="text"
            name="name"
            value={productState.name}
            onChange={(e) => changeHandler(e)}
          />
        </td>
        <td className="column column-image">
          <img src={productState.imageUrl} alt="" />
        </td>
        <td className="column column-price">
          <input
            type="text"
            name="price"
            value={productState.price}
            onChange={(e) => changeHandler(e)}
          />
        </td>
        <td className="column column-catogory">
          <CatogoryCheckboxHandler
            catogoryList={catogoryList}
            parentState={productState}
            setParentState={setProductState}
          />
        </td>
        <td className="column column-edit">
          <button
            onClick={() => {
              uploadToServer();
              setEditMode(false);
            }}
          >
            Done
          </button>
        </td>
      </tr>
    );
  // --------------------------------View-----------------------------------------
  else {
    return (
      <tr className="ProductList">
        <td className="column column-id">{productState._id}</td>
        <td className="column column-name">{productState.name}</td>
        <td className="column column-image">
          <img src={productState.imageUrl} alt="" />
        </td>
        <td className="column column-price">{productState.price}</td>
        <td className="column column-catogory">
          {productState.catogory.map((catogory) => {
            return (
              <div className="catogoryCheck" key={catogory._id}>
                <label>{catogory.title}</label>
              </div>
            );
          })}
        </td>
        <td className="column column-edit">
          <button
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductList;
