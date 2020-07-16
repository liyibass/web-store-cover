import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Table } from "react-bootstrap";

import NavigationList from "../../component/NavigationList/NavigationList.component";

function NavigationListPage() {
  const [navigationList, setNavigationList] = useState([]);
  const [catogoryList, setCatogoryList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/navigation")
      .then((response) => {
        setNavigationList(response.data);
      })
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
            <th>Title</th>

            <th>Catogory</th>
          </tr>
        </thead>

        <tbody>
          {navigationList.map((navigation) => {
            return (
              <NavigationList
                navigation={navigation}
                key={navigation._id}
                catogoryList={catogoryList}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default NavigationListPage;
