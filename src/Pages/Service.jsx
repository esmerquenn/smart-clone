import React from "react";
import AboutSections from "../components/childrenComponentss/AboutSection/AboutSections";
import { useTranslation } from "react-i18next";
import Headings from "../components/childrenComponentss/Headings";
function Service() {
  const { t } = useTranslation();
  return (
    <div className=" py-16 px-4 md:px-10 lg:px-20 bg-white lato_regular">
      <Headings head={t("service")} />
      <div className="space-y-8 text-[#4C4C4C] text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-[#333]">{t("title1")}</h2>
          <p>{t("introduction")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#333]">{t("title2")}</h2>
          <p>{t("history")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#333]">{t("title3")}</h2>
          <p>{t("mission_and_values")}</p>
          <p className="mt-4">{t("warranty")}</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#333]">{t("title4")}</h2>
          <p>{t("future_goals")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#333]">{t("title5")}</h2>
          <p>{t("founders")}</p>
        </section>
      </div>
    </div>
  );
}

export default Service;
