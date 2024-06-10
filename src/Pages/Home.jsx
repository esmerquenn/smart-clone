import React from "react";
import CarouselFirst from "../components/childrenComponentss/Carousels/CarouselFirst";
import Pakets from "../components/childrenComponentss/Pakets/Pakets";
import CartsSection from "./../components/childrenComponentss/sectionCarts/CartsSection";
import CarouselBrands from "../components/childrenComponentss/Carousels/CarouselBrands";
import AboutSections from "../components/childrenComponentss/AboutSection/AboutSections";
import { useTranslation } from "react-i18next";
import CarouselApi from "../components/childrenComponentss/Carousels/CarouselApi";
import bg from "./../assets/bg.png";
function Home() {
  const { t, i18n } = useTranslation();
  const images = [bg, bg, bg];
  return (
    <div className="mb-[130px]">
      <div className="bg-[#e6e7e8]">
        <CarouselFirst />
        <CartsSection {...{ t, i18n }} />
      </div>
      <CarouselApi images={images} />
      <Pakets {...{ t, i18n }} />
      <CarouselBrands />
      <AboutSections {...{ t, i18n }} />
    </div>
  );
}

export default Home;
