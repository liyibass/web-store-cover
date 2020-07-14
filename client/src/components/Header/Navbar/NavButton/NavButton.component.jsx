import React from "react";
import "./NavButton.style.scss";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { showCatogoryShopData } from "../../../../redux/shopData/shopData.action.js";

function NavButton({ catogory }) {
  const dispatch = useDispatch();
  // console.log("NavButton", catogory);

  if (!catogory.folder) {
    return (
      <div className="NavButton">
        <Link
          className="NavButton-title"
          to="/products"
          // onClick={() => {
          //   dispatch(showCatogoryShopData(catogory));
          // }}
        >
          {catogory.title}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="NavButton">
        <div className="NavButton-title">{catogory.title}</div>

        {catogory.folder ? (
          <div className="NavButton-folder">
            {catogory.folder.map((subCatogory) => {
              return (
                <Link
                  key={subCatogory._id}
                  className="folderItem"
                  to="/products"
                  onClick={() => {
                    dispatch(showCatogoryShopData(subCatogory));
                  }}
                >
                  {subCatogory.title}
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
