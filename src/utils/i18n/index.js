import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import uaTranslations from "./locales/ua/translation.json";

const LANGUAGES = {
  EN: "en",
  UA: "ua",
};

const resources = {
  [LANGUAGES.EN]: {
    translation: enTranslations,
  },
  [LANGUAGES.UA]: {
    translation: uaTranslations,
  },
};

const detection = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection,
    resources,
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: "ua",
    supportedLngs: ["en", "ua"],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
