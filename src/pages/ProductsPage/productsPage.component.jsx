import React, { useEffect } from "react";
import { EventHandler } from "../../scripts/EventHandler";
import "./ProductsPage.style.scss";
import ProductsFolderList from "../../components/ProductsFolderList/ProductsFolderList.component";
import ProductsPreviewList from "../../components/ProductsPreviewList/ProductsPreviewList.component";
import NavigationSection from "../../components/NavigationSection/NavigationSection.component";

function ProductsPage() {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);
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
