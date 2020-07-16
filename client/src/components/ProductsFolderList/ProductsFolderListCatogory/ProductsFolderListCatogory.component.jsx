import React, { useEffect } from "react";
import "./ProductsFolderListCatogory.style.scss";
import { useDispatch } from "react-redux";
import { fetchProductListFromApi } from "../../../redux/productList/productList.action.js";

function ProductsFolderListCatogory({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const navigationList = document.querySelectorAll(".mainNavigation");

    navigationList.forEach((singleNavigation) => {
      singleNavigation.addEventListener("click", () => {
        singleNavigation.parentElement.classList.toggle("folder-show");
      });
    });
  }, []);

  if (navigation.catogories.length > 0) {
    return (
      <div className="navigation ">
        <div className="navigation-title mainNavigation">
          {navigation.title}
          <i className="fas fa-chevron-down navigationArrow"></i>
        </div>

        <div className="navigation-folder ">
          {navigation.catogories.map((catogory) => {
            return (
              <div
                className="catogory-title"
                key={catogory._id}
                onClick={() => {
                  dispatch(fetchProductListFromApi(catogory._id));
                }}
              >
                {catogory.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else
    return (
      <div className="navigation">
        <div className="navigation-title">{navigation.title}</div>
      </div>
    );
}

export default ProductsFolderListCatogory;
