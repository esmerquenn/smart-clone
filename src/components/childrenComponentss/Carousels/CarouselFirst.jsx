import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "./../../../assets/slider1.webp";
import slider2 from "./../../../assets/H618-iF-banner-21.webp";

export default function CarouselFirst() {
  const [activeSlide, setActiveSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, 
    afterChange: (current) => setActiveSlide(current),
  };

  return (
   <div className="carousel_first">
     <Slider {...settings}>
    <div className={activeSlide === 0 ? "slide active" : "slide"}>
      <img src={slider1} alt="slider" />
    </div>
    <div className={activeSlide === 1 ? "slide active" : "slide"}>
      <img src={slider2} alt="slider" />
    </div>
  </Slider>
   </div>
  );
}

