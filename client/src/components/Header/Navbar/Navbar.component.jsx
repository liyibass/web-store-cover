import React, { useState, useEffect } from "react";
import "./Navbar.style.scss";
import NavButton from "./NavButton/NavButton.component";
import { useSelector, useDispatch } from "react-redux";
// import Dropdown from "react-bootstrap";

import Axios from "axios";

function Navbar() {
  const [catogoryList, setCatogoryLIst] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/catogory/")
      .then((response) => {
        setCatogoryLIst(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Navbar">
      {catogoryList.map((catogory) => {
        return <NavButton key={catogory._id} catogory={catogory} />;
      })}
    </div>
  );
}

export default React.memo(Navbar);
