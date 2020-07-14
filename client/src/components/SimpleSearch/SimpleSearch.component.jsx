import React, { useState } from "react";

import Button from "../Button/Button.component";
import { Link, withRouter } from "react-router-dom";

import "./SimpleSearch.style.scss";

import { fetchResultListFromApi } from "../../redux/productList/productList.action";
import { useDispatch } from "react-redux";

function SimpleSearch(props) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(fetchResultListFromApi(search));
    setSearch("");
    e.currentTarget.parentNode.classList.remove("hidingBlock-show");

    props.history.push("/search");
  };

  return (
    <div className="SimpleSearch">
      <div className="iconBlock searchIcon">
        <i className="fas fa-search"></i>
      </div>

      <div className="hidingBlock hidingBlock-searchBlock">
        <input
          type="text"
          value={search}
          placeholder="請輸入產品"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
        />
        <Link
          to="/search"
          style={{ textDecoration: "none" }}
          onClick={(e) => handleSearch(e)}
        >
          <Button title="搜尋" />
        </Link>
      </div>
    </div>
  );
}

export default withRouter(SimpleSearch);
