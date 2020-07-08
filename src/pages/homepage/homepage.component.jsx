import React from "react";
import "./HomePage.style.scss";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel.component";
import HomeProducts from "../../components/HomeProducts/HomeProducts.component";

function HomePage() {
  return (
    <div className="HomePage">
      <ImageCarousel />
      <HomeProducts />
    </div>
  );
}

export default HomePage;
