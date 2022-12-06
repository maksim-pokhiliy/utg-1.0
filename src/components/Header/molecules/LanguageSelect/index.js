import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Select from "../../../Select";

const LanguageSelect = () => {
  const [options, setOptions] = useState([]);
  const [selectedLang, setSelectedLang] = useState("");

  const { i18n } = useTranslation();

  const init = () => {
    const currentLang = localStorage.getItem("APP_LANG") || i18n.language;
    const langsOptions = Object.keys(i18n.options.resources).map((lang) => ({
      value: lang,
      label: lang,
    }));

    setSelectedLang(currentLang);
    setOptions(langsOptions);
  };

  const handleChange = (value) => {
    setSelectedLang(value);
    i18n.changeLanguage(value);
    localStorage.setItem("APP_LANG", value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(init, []);

  return (
    <Select value={selectedLang} options={options} onChange={handleChange} />
  );
};

export default LanguageSelect;
