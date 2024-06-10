import React from "react";
import Headings from "../Headings";
import Paket from "./Paket";

function Pakets({t, i18n}) {
  return (
    <div className="py-4 md:py-11 px-4 md:px-10 lg:px-20">
      <Headings head={t("ready_Packages")} />
      <div className="grid gap-3 gap-y-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  place-items-center">
        <Paket t={t} paket={t("economic")} />
        <Paket t={t} paket={t("standart")} />
        <Paket t={t} paket={t("premium")} />
      </div>
    </div>
  );
}

export default Pakets;
