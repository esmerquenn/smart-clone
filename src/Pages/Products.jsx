// import React from "react";
// import Headings from "../components/childrenComponentss/Headings";
// import { useTranslation } from "react-i18next";
// import Cards from "../components/childrenComponentss/sectionCarts/Cards";
// import { Pagination } from 'antd';

// function Products() {
//   const { t, i18n } = useTranslation();

//   return (
//     <div className=" py-16 md:py-11  px-4 md:px-10 lg:px-20 lato_regular bg-[#e6e7e8]">
//       <Headings head={t("products")} />
//       <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-9">
//         <Cards t={t} />
//         <Cards t={t} />
//         <Cards t={t} />
//         <Cards t={t} />
//       </div>
//        <Pagination defaultCurrent={1} total={50} />;
//     </div>
//   );
// }

// export default Products;

// import React, { useState } from "react";
// import Headings from "../components/childrenComponentss/Headings";
// import { useTranslation } from "react-i18next";
// import Cards from "../components/childrenComponentss/sectionCarts/Cards";
// import { Pagination } from "antd";

// const data = [
//   // Burada kart verilerinizi tanımlayın
//   { title: "Product 1", content: "Description 1" },
//   { title: "Product 2", content: "Description 2" },
//   { title: "Product 3", content: "Description 3" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   { title: "Product 4", content: "Description 4" },
//   // Daha fazla ürün ekleyin...
// ];

// const PAGE_SIZE = 8; // Sayfa başına gösterilecek kart sayısı

// function Products() {
//   const { t } = useTranslation();
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const startIndex = (currentPage - 1) * PAGE_SIZE;
//   const paginatedData = data.slice(startIndex, startIndex + PAGE_SIZE);

//   return (
//     <div className="py-16 md:py-11 px-4  lato_regular bg-[#e6e7e8]">
//       <Headings head={t("products")} />
//       <div className=" flex gap-6">
//         <div className=" w-[208px] h-[600px] bg-orange-400"></div>
//         <div className="w-full">
//           <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6 md:gap-9">
//             {paginatedData.map((item, index) => (
//               <Cards key={index} t={t} title={item.title} content={item.content} />
//             ))}
//           </div>
//           <Pagination
//             current={currentPage}
//             pageSize={PAGE_SIZE}
//             total={data.length}
//             onChange={handlePageChange}
//             className="  flex justify-center pt-10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;

import React, { useState } from "react";
import Headings from "../components/childrenComponentss/Headings";
import { useTranslation } from "react-i18next";
import Cards from "../components/childrenComponentss/sectionCarts/Cards";
import { Pagination } from "antd";
import ProductShow from "../components/childrenComponentss/Products/ProductShow";
import SliderSide from "../components/childrenComponentss/Products/SliderSide";

const data = [
  // Burada kart verilerinizi tanımlayın
  { title: "Product 1", content: "Description 1" },
  { title: "Product 2", content: "Description 2" },
  { title: "Product 3", content: "Description 3" },
  { title: "Product 4", content: "Description 4" },
  { title: "Product 5", content: "Description 5" },
  { title: "Product 6", content: "Description 6" },
  { title: "Product 7", content: "Description 7" },
  { title: "Product 8", content: "Description 8" },
  { title: "Product 9", content: "Description 9" },
  { title: "Product 10", content: "Description 10" },
  { title: "Product 11", content: "Description 11" },
  { title: "Product 12", content: "Description 12" },
  { title: "Product 13", content: "Description 13" },
  { title: "Product 14", content: "Description 14" },
  // Daha fazla ürün ekleyin...
];

const PAGE_SIZE = 6; // Sayfa başına gösterilecek kart sayısı

function Products() {

  // const { id } = useParams();   
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedData = data.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="bg-[#e6e7e8]">
      <ProductShow {...{currentPage, setCurrentPage, handlePageChange, paginatedData, t, PAGE_SIZE, data}} />
      <SliderSide t={t} />
    </div>
  );
}

export default Products;
