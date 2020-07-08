import React from "react";
import "./ProductsFolderListCatogory.style.scss";
import { useDispatch } from "react-redux";
import { showCatogoryShopData } from "../../../redux/shopData/shopData.action.js";

function ProductsFolderListCatogory({ catogory }) {
  const dispatch = useDispatch();

  if (catogory.folder) {
    return (
      <div className="catogory ">
        <div className="catogory-title mainCatogory">
          {catogory.title}
          <i className="fas fa-chevron-down catogoryArrow"></i>
        </div>

        <div className="catogory-folder ">
          {catogory.folder.map((subCatogory) => {
            return (
              <div
                className="catogory-title"
                key={subCatogory.id}
                onClick={() => {
                  dispatch(showCatogoryShopData(subCatogory));
                }}
              >
                {subCatogory.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else
    return (
      <div className="catogory">
        <div className="catogory-title">{catogory.title}</div>
      </div>
    );
}

export default ProductsFolderListCatogory;
