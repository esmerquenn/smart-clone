import React from "react";
import cisco from "./../../../assets/Cisco.png";
import CardOtaq from "../Pakets/CardOtaq";
import Video from "./Video";
import { Link } from "react-router-dom";

function About({ t }) {
  return (
    <div className=" mt-24 py-16 md:py-11 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 lg:px-20 bg-[#e6e7e8] lato_regular">
      <div className="sm:px-6">
        <div className="b_bottom">
          <img src={cisco} alt="" />
        </div>
        <div className=" my-12">
          <h2 className=" text-[1.5rem] leading-loose font-bold text-[#444]">Azerbaijan smart electronics </h2>
          <p className="text-[#4C4C4C] text-[1.1rem] leading-loose">
            Şirkətin yaranma tarixi: <b>2024</b>
          </p>
          <p className=" text-[#4C4C4C] text-[1.1rem] leading-loose">
            Qurucular:<b>Orxan Vəliyev</b>, <b>Vüsal Şirinov</b>
          </p>
          <p className=" text-[#4C4C4C] text-[1.1rem] leading-loose">
            Platform: <b>TUYA APP</b>
          </p>
        </div>
        <Link to="/about"><CardOtaq otaq={t("more")} /></Link>
      </div>
      <Video />
    </div>
  );
}

export default About;
