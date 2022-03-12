import "./Header.css";
import React, { Suspense, useEffect, useRef } from "react";
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
  const containerRef1 = useRef(null);
  const innerRef1 = useRef(null);

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

  let counter = 0;
  const updateRate = 10;

  const isTimeToUpdate = function () {
    return counter++ % updateRate === 0;
  };

  const mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      if (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        console.log(this._x, this._y);
      }
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };
  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(containerRef1.current);

  const onMouseEnterHandler = function (event) {
    update(event);
  };
  const onMouseLeaveHandler = function (innerRef) {
    innerRef.current.style = "";
  };
  const onMouseMoveHandler = function (event, innerRef) {
    if (isTimeToUpdate()) {
      update(event, innerRef);
    }
  };

  const update = function (event, innerRef) {
    mouse.updatePosition(event);
    if (innerRef) {
      updateTransformStyle(
        (mouse.y / innerRef.current.offsetHeight / 2).toFixed(2),
        (mouse.x / innerRef.current.offsetWidth / 2).toFixed(2),
        innerRef
      );
    }
  };

  const updateTransformStyle = function (x, y, innerRef) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";

    innerRef.current.style.transform = style;
    innerRef.current.style.webkitTransform = style;
    innerRef.current.style.mozTransform = style;
    innerRef.current.style.msTransform = style;
    innerRef.current.style.oTransform = style;
  };

  return (
    <Suspense fallback="loading">
      <header>
        <div className="header-content">
          <div
            ref={containerRef1}
            id="outerPhoto"
            onMouseEnter={(e) => onMouseEnterHandler(e)}
            onMouseLeave={() => onMouseLeaveHandler(innerRef1)}
            onMouseMove={(e) => onMouseMoveHandler(e, innerRef1)}
          >
            <img
              ref={innerRef1}
              id="inner"
              className="photo"
              src={GabrielProfile}
              alt="Gabriel Trettin"
            />
          </div>

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
