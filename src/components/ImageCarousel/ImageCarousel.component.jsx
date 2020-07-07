/*
npm install --s bootstrap react-bootstrap

（Import Bootstrap CSS in the src/index.js file）
import 'bootstrap/dist/css/bootstrap.min.css';
*/
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import items from "./CarouselList";

const ImageCarousel = (props) => {
  const nextIcon = <i className="far fa-arrow-alt-circle-right "></i>;
  const prevIcon = <i className="far fa-arrow-alt-circle-left"></i>;

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={2000}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
      >
        {items.map((item) => {
          return (
            <Carousel.Item key={item.caption}>
              <picture>
                <source srcSet={item.src.lg} media="(min-width:1000px)" />
                <source srcSet={item.src.md} media="(min-width:640px)" />
                <img
                  className="d-block w-100"
                  src={item.src.sm}
                  alt={item.altText}
                />
              </picture>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
