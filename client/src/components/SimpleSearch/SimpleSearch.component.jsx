import React, { useState } from "react";

import Button from "../Button/Button.component";
import { Link, withRouter } from "react-router-dom";

import "./SimpleSearch.style.scss";

import { fetchResultListFromApi } from "../../redux/productList/productList.action";
import { useDispatch } from "react-redux";

function SimpleSearch(props) {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();

    dispatch(fetchResultListFromApi(searchKeyWord));
    setSearchKeyWord("");

    event.currentTarget.classList.remove("hidingBlock-show");

    props.history.push("/search");
  };

  return (
    <div className="SimpleSearch">
      <div className="iconBlock searchIcon">
        <i className="fas fa-search"></i>
      </div>

      <form
        className="hidingBlock hidingBlock-searchBlock"
        onSubmit={(event) => handleSearch(event)}
      >
        <input
          type="text"
          value={searchKeyWord}
          placeholder="請輸入產品"
          onChange={(event) => setSearchKeyWord(event.target.value)}
          // onKeyPress={(e) => {
          //   if (e.key === "Enter") {
          //     handleSearch(e);
          //   }
          // }}
        />

        <Button title="搜尋" type="submit" className={"Button-small"} />
      </form>
    </div>
  );
}

export default withRouter(SimpleSearch);
