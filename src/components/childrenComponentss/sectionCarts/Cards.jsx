import React from "react";
import img from "./../../../assets/S213M-2.webp";
import { useNavigate } from "react-router-dom";

function Cards({ t, m, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <>
      <div onClick={handleClick} className={`rounded-xl bg-white p-3 ${m ? "w-[280px]" : ""}`}>
        <img className=" w-full" src={img} alt="img" />
        <h5 className=" capitalize text-xl truncate ">məhsul adı uzunda ola biler belke</h5>
        <span className=" pb-4 pt-2 flex lato_bold text-[.85rem] text-[#333]">10 AZN</span>
        <div className=" text-center">
          <button className=" capitalize text-white bg-orange-400 p-1 w-full rounded-md">{t("more")}</button>
        </div>
      </div>
    </>
  );
}

export default Cards;
