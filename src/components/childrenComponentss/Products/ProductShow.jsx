import React from "react";
import Headings from "../Headings";
import { Pagination } from "antd";
import Cards from "../sectionCarts/Cards";
import CarouselDetails from "./../Carousels/CarouselDetails";
import banner1 from "./../../../assets/banner.jpg";
import { useMediaQuery } from "react-responsive";

function ProductShow({ currentPage, handlePageChange, paginatedData, t, PAGE_SIZE, data }) {
  const isBigDesktop = useMediaQuery({ minWidth: 1100 });

  return (
    <div className="py-16 md:py-11 px-4 md:px-11 lato_regular ">
      <Headings head={t("products")} />
      <div className="flex gap-6 ">
        <div className="w-[250px] h-[720px] hidden lg:block ">
          <CarouselDetails {...{ isBigDesktop, banner1 }} />
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-9">
            {paginatedData.map((item, index) => (
              <Cards key={index} t={t} title={item.title} content={item.content} />
            ))}
          </div>
          <Pagination
            current={currentPage}
            pageSize={PAGE_SIZE}
            total={data.length}
            onChange={handlePageChange}
            className="flex justify-center pt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductShow;
