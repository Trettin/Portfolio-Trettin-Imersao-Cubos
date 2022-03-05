import "./Header.css";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import GabrielProfile from "../../assets/images/Gabriel-profile.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    const langDict = {
      English: "en",
      Portuguese: "pt",
      Deutsch: "de",
    };
    console.log(e);

    console.log(langDict[e]);
    setLanguage(e.target.value);
    changeLanguage(langDict[e]);
  };

  return (
    <Suspense fallback="loading">
      <header>
        <div className="header-content">
          <img
            className="photo"
            src={GabrielProfile}
            alt="Gabriel Trettin's Picture"
          />

          <div className="dados">
            <h1>Gabriel Trettin</h1>
            <p id="ptit" className="profissao t60">
              Full-stack Developer
              <a href="https://github.com/Trettin/" target="_blank">
                <GitHubIcon fontSize="large" style={{ fill: "black" }} />
              </a>
            </p>
          </div>

          <div className="select-language">
            <InputLabel
              id="demo-controlled-open-select-label"
              className="filterButton "
              onClick={handleOpen}
            >
              {language}
            </InputLabel>
            <Select
              className=""
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              value={language}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={(e) => handleChange(e.target.value)}
            >
              <MenuItem value="English" name="English">
                English
              </MenuItem>
              <MenuItem value="Deutch" name="Deutch">
                Deutsch
              </MenuItem>
              <MenuItem value="Portuguese" name="Portuguese">
                Portuguese
              </MenuItem>
            </Select>
          </div>
        </div>
      </header>
    </Suspense>
  );
}
