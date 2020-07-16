import React from "react";
import "./NavButton.style.scss";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchProductListFromApi } from "../../../../redux/productList/productList.action.js";

function NavButton({ navigation, menuToggle }) {
  const dispatch = useDispatch();

  if (!navigation.catogories) {
    return (
      <div className="NavButton">
        <Link className="NavButton-title" to="/products">
          {navigation.title}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="NavButton">
        <div className="NavButton-title">{navigation.title}</div>

        {navigation.catogories ? (
          <div className="NavButton-folder">
            {navigation.catogories.map((catogory) => {
              console.log(catogory._id);
              return (
                <Link
                  key={catogory._id}
                  className="folderItem"
                  to="/products"
                  onClick={() => {
                    dispatch(fetchProductListFromApi(catogory._id));
                    menuToggle();
                  }}
                >
                  {catogory.title}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default NavButton;
