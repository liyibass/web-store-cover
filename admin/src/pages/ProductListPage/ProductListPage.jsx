import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Table } from "react-bootstrap";
import ProductList from "../../component/ProductList/ProductList.component";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [catogoryList, setCatogoryList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/product")
      .then((response) => setProductList(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/catogory")
      .then((response) => {
        setCatogoryList(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <Table
        striped
        bordered
        hover
        variant="dark"
        responsive="md"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Catogory</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => {
            {
              return (
                <ProductList
                  product={product}
                  key={product._id}
                  catogoryList={catogoryList}
                />
              );
            }
            {
              /* console.log(product); */
            }
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductListPage;
