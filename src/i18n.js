// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// const resources = {

//   az: {
//     translation: {
//       welcome: "xos gelmisiz",
//     },
//   },
//   en: {
//     translation: {
//       welcome: "welcome !",
//     },
//   },
// };
// i18n.use(initReactI18next).init({
//   lng: "ru",
//     resources,
// });
// export default i18n;


import ru from "./lang/ru.json"
import az from "./lang/az.json"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import { getFromLocale } from "./utils";

i18n
  .use(Backend)
  .use(i18nextBrowserLanguagedetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      az: { translation: az },
    },
    lng: getFromLocale("language") ?? "az",
    fallbackLng: getFromLocale("language") ?? "az",
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
  });

export default i18n;

