import "./Header.css";
import React, { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import GabrielProfile from "../../assets/images/Gabriel-profile.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState("English");
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const langDict = {
    english: "en",
    portuguese: "pt",
    deutsch: "de",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setSelectLanguage(e);
    changeLanguage(langDict[e.toLowerCase()]);
  };

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  useEffect(() => {
    const userLangExists = getKeyByValue(langDict, language.slice(0, 2));
    if (userLangExists) {
      setSelectLanguage(
        userLangExists.slice(0, 1).toUpperCase() + userLangExists.slice(1)
      );
    }
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
            <InputLabel
              id="demo-controlled-open-select-label"
              className="lang-label"
              onClick={handleOpen}
              style={{
                padding: "5px 12px",
                fontWeight: "600",
                color: "#a100f2",
              }}
            >
              {selectLanguage}
            </InputLabel>
            <Select
              className="hide"
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              value={selectLanguage}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={(e) => handleChange(e.target.value)}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Portuguese">Portuguese</MenuItem>
            </Select>
          </div>
        </div>
      </header>
    </Suspense>
  );
}
