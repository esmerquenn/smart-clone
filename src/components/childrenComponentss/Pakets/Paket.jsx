import React from "react";
import CardOtaq from "./CardOtaq";

function Paket({ paket, t }) {
  return (
    <div className=" bg-[#E6E7E8] rounded-md capitalize  flex flex-col items-center p-4 w-[250px] md:w-[200px] lg:w-[250px]">
      <h5 className="text-[1.3rem] pb-2">{paket}</h5>
      <CardOtaq otaq={`1 ${t('room')}`} />
      <CardOtaq otaq={`2 ${t('room')}`} />
      <CardOtaq otaq={`3 ${t('room')}`} />
    </div>
  );
}

export default Paket;
