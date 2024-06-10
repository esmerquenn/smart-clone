import React from "react";
import Slider from "react-slick";
import cisco from "./../../../assets/Cisco.png";
import micro from "./../../../assets/MSFT.png";
function CarouselBrands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    responsive: [
    
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
     
    ],
  };
  return (
    <div className="slider-container carousel_brands h-[100px] py-4 md:py-11 px-4 ">
      <Slider className=" h-[120px]" {...settings}>
        <div className=" center ">
          <img src={cisco} alt="" />
        </div>
        <div className=" center ">
          <img src={micro} alt="" />
        </div>
        <div className=" center ">
          <img src={cisco} alt="" />
        </div>
        <div className=" center ">
          <img src={micro} alt="" />
        </div>
        <div className=" center ">
          <img src={cisco} alt="" />
        </div>
        <div className=" center ">
          <img src={micro} alt="" />
        </div>
        <div className=" center ">
          <img src={cisco} alt="" />
        </div>
        <div className=" center ">
          <img src={micro} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselBrands;
