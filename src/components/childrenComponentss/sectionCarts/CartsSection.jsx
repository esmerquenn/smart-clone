import React from "react";
import Headings from "../Headings";
import Cards from "./Cards";

function CartsSection({ t }) {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 3" },
    { id: 5, name: "Product 3" },
    { id: 6, name: "Product 3" },
    { id: 7, name: "Product 3" },
    { id: 8, name: "Product 3" },
  ];
  return (
    <>
      <div className="py-4 md:py-11 px-4 md:px-10 lg:px-20 bg-[#e6e7e8]">
        <Headings head={t("products")} />
        <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-9">
          {products.map((product) => (
            <Cards key={product.id} id={product.id} name={product.name} t={t} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CartsSection;
