import "./ColunaMaior.css";
import { useRef, createRef } from "react";
import cubosflix from "../../assets/images/cubosflix.jpg";
import marketCubos from "../../assets/images/market-cubos.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useTranslation } from "react-i18next";

export default function ColunaMaior() {
  const { t } = useTranslation();
  const containerRef1 = document.getElementById("outer");
  const innerRef1 = document.getElementById("inner");
  const containerRef2 = useRef(null);
  const innerRef2 = useRef(null);
  const front = [
    {
      name: "HTML",
      lvl: 60,
    },
    {
      name: "CSS",
      lvl: 60,
    },
    {
      name: "Java Script",
      lvl: 60,
    },
    {
      name: "React",
      lvl: 60,
    },
    {
      name: "Angular",
      lvl: 40,
    },
  ];

  const back = [
    {
      name: "Node.js",
      lvl: 60,
    },
    {
      name: "PostgresSQL",
      lvl: 60,
    },
    {
      name: "Typescript",
      lvl: 40,
    },
  ];

  const soft = [
    {
      name: "Communication",
      lvl: 80,
    },
    {
      name: "Team work",
      lvl: 70,
    },
    {
      name: "Time management",
      lvl: 70,
    },
    {
      name: "Conflict management",
      lvl: 75,
    },
  ];

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#a100f233",
      // theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#a100f2" : "#308fe8",
    },
  }));

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
        // console.log(this._x, this._y);
      }
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };
  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(containerRef1);
  // mouse.setOrigin(containerRef2.current);

  const onMouseEnterHandler = function (event) {
    console.log(containerRef1);
    update(event);
  };
  const onMouseLeaveHandler = function (innerRef) {
    if (innerRef1) innerRef1.style = "";
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
        (mouse.y / innerRef1.offsetHeight / 2).toFixed(2),
        (mouse.x / innerRef1.offsetWidth / 2).toFixed(2),
        innerRef
      );
    }
  };

  const updateTransformStyle = function (x, y, innerRef) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";

    innerRef1.style.transform = style;
    innerRef1.style.webkitTransform = style;
    innerRef1.style.mozTransform = style;
    innerRef1.style.msTransform = style;
    innerRef1.style.oTransform = style;
  };

  return (
    <div className="coluna_maior">
      <h2>{t("skills")}</h2>
      <div className="habilidades">
        <div className="habilidade">
          <h3>Front</h3>
          <ul>
            {front.map((skill) => {
              return (
                <li key={skill.name}>
                  <p className="nome">{skill.name}</p>
                  <BorderLinearProgress
                    variant="determinate"
                    value={skill.lvl}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="habilidade">
          <h3>Back</h3>
          <ul>
            {back.map((skill) => {
              return (
                <li key={skill.name}>
                  <p className="nome">{skill.name}</p>
                  <BorderLinearProgress
                    variant="determinate"
                    value={skill.lvl}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="habilidade">
          <h3>Soft skills</h3>
          <ul>
            {soft.map((skill) => {
              return (
                <li key={skill.name}>
                  <p className="nome">
                    {t(`softskills.${[skill.name.toLocaleLowerCase()]}`)}
                  </p>
                  <BorderLinearProgress
                    variant="determinate"
                    value={skill.lvl}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <h2 className="tituloprojetos">{t("projects")}</h2>
      <div className="projetos">
        <div
          // ref={containerRef1}
          id="outer"
          onMouseEnter={(e) => onMouseEnterHandler(e)}
          onMouseLeave={() => onMouseLeaveHandler(innerRef1)}
          onMouseMove={(e) => onMouseMoveHandler(e, innerRef1)}
        >
          <div id="inner" className="projeto">
            <h3>Market Cubos</h3>
            <p>{t("mkt-description")}</p>
            <div className="project-github-links">
              <a
                className="github"
                href="https://github.com/Trettin/Market-Cubos-Desafio03-front"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="large" /> Front-end
              </a>
              <a
                className="github"
                href="https://github.com/Trettin/Market-Cubos-Desafio3-Back"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="large" /> Back-end
              </a>
            </div>

            <img src={marketCubos} alt="imagem do site market-cubos" />
            <a
              className="link_button"
              href="https://market-cubos.trettin.dev.br/"
              target="_blank"
              rel="noreferrer"
            >
              {t("see-project")}
            </a>
          </div>
        </div>

        <div
        // ref={containerRef2}
        // id="outer"
        // onMouseEnter={(e) => onMouseEnterHandler(e)}
        // onMouseLeave={() => onMouseLeaveHandler(innerRef2)}
        // onMouseMove={(e) => onMouseMoveHandler(e, innerRef2)}
        >
          <div className="projeto">
            <h3>Cubos Flix</h3>
            <p>{t("cubos-flix-description")}</p>
            <a
              className="github"
              href="https://github.com/Trettin/cubos-flix"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" /> Front-end
            </a>
            <img src={cubosflix} alt="imagem do site cubosflix" />
            <a
              className="link_button"
              href="https://trettin-cubos-flix.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {t("see-project")}
            </a>
          </div>
        </div>

        {/* <div className="projeto">
          <h3>Casa Criativa</h3>
          <p>
            Casa criativa é um site para se catalogar ideias com intuito de
            tornar o período de isolamento social, devido ao Covid19, mais
            interessante. <br />
            Projeto desenvolvio no WorkshopDev Especial da Rocketseat.
          </p>
          <img
            src="https://i.imgur.com/bUt3lLe.jpg"
            alt="imagem casa criativa"
          />
          <a
            className="link_button"
            href="https://criativacasa.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto
          </a>
        </div> */}
      </div>
    </div>
  );
}
