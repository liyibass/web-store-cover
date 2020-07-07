import React from "react";
import "./homepage.style.scss";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel.component";
import HomeProducts from "../../components/HomeProducts/HomeProducts.component";

function Homepage() {
  return (
    <div className="homepage">
      <ImageCarousel />
      <HomeProducts />
    </div>
  );
}

export default Homepage;
