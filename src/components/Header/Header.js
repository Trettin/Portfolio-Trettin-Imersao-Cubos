import "./Header.css";
import React, { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import GabrielProfile from "../../assets/images/Gabriel-profile.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("us");
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const countryLangDict = {
    us: "en",
    br: "pt",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setSelectedLanguage(e);
    changeLanguage(countryLangDict[e.toLowerCase()]);

    console.log("handleChangeEvent", e);
    console.log(
      "handleChange changeLang value",
      countryLangDict[e.toLowerCase()]
    );
  };

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  useEffect(() => {
    console.log("user laanguage", language);
    const userLangExists = getKeyByValue(countryLangDict, language.slice(0, 2));
    console.log("dictresult", userLangExists);
    if (userLangExists) {
      setSelectedLanguage(userLangExists);
    }

    Object.keys(countryLangDict).forEach((country) => console.log(country));
    // eslint-disable-next-line
  }, []);

  return (
    <Suspense fallback="loading">
      <header>
        <div className="header-content">
          <img className="photo" src={GabrielProfile} alt="Gabriel Trettin" />

          <div className="dados">
            <h1>Gabriel Trettin</h1>
            <p id="ptit" className="profissao t60">
              {t("title")}
              <a
                href="https://github.com/Trettin/"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="large" style={{ fill: "black" }} />
              </a>
            </p>
          </div>

          <div className="select-language">
            <label
              id="demo-controlled-open-select-label"
              className="lang-label"
              onClick={handleOpen}
              style={{
                padding: "4px",
              }}
            >
              <img src={`countries-flags/${selectedLanguage}.svg`} alt="" />
            </label>
            <Select
              className="hide"
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              value={selectedLanguage}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={(e) => handleChange(e.target.value)}
            >
              {Object.keys(countryLangDict).map((country) => {
                return (
                  <MenuItem key={country} value={country}>
                    <img
                      src={`countries-flags/${country}.svg`}
                      alt={country + " flag"}
                    />
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </div>
      </header>
    </Suspense>
  );
}
