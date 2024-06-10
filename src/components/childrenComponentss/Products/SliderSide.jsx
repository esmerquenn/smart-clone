import React from "react";
import Headings from "../Headings";
import CarouselLike from "../Carousels/CarouselLike";

function SliderSide({ t }) {
  return (
    <div>
      <Headings head={t("Similar_Products")} />
      <CarouselLike t={t} />
    </div>
  );
}

export default SliderSide;
