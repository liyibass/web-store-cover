import React from "react";
import "./ProductsPage.style.scss";
import ProductsFolderList from "../../components/ProductsFolderList/ProductsFolderList.component";
import ProductsPreviewList from "../../components/ProductsPreviewList/ProductsPreviewList.component";
import NavigationSection from "../../components/NavigationSection/NavigationSection.component";

function ProductsPage() {
  return (
    <div className="ProductsPage container">
      <NavigationSection />
      <div className="row">
        <ProductsFolderList />
        <ProductsPreviewList />
      </div>
    </div>
  );
}

export default ProductsPage;
