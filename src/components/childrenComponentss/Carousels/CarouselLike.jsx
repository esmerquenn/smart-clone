import React from "react";
import Slider from "react-slick";
import Cards from "../sectionCarts/Cards";
function CarouselLike({ t }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 20000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" h-[500px] ">
      <Slider className="min-h-[500px] pt-10 carousel_like flex gap-10" {...settings}>
        <div className="w-[280px] center_like">
          <Cards m={true} t={t} />
        </div>
        <div className="w-[280px] center_like">
          <Cards m={true} t={t} />
        </div>
        <div className="w-[280px] center_like">
          <Cards m={true} t={t} />
        </div>
        <div className="w-[280px] center_like">
          <Cards m={true} t={t} />
        </div>
        <div className="w-[280px] center_like">
          <Cards m={true} t={t} />
        </div>
        <div className="w-[280px] center_like">
          <Cards m={true} t={t} />
        </div>
        <div className="w-[280px] center_like">
          <Cards m={true} t={t} />
        </div>
        <div className="w-[280px] center_like">
          <Cards m={true} t={t} />
        </div>

      </Slider>
    </div>
  );
}


export default CarouselLike;
