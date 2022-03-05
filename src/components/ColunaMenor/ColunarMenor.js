import "./ColunaMenor.css";
import psicologia from "../../assets/images/psicologia.jpg";
import simbiose from "../../assets/images/simbiose.png";
import cubos from "../../assets/images/cubos.png";
import ford from "../../assets/images/ford.png";

export default function ColunaMenor() {
  return (
    <div className="coluna_menor">
      <div className="experiencias">
        <h2>Professional Experiences</h2>
        <div className="linha"></div>
        <ul>
          <li>
            <img src={ford} alt="Ford's logo" />
            <div className="conteudo">
              <h3>Developer</h3>
              <span className="span">Ford Motor Company</span>
              <p className="t60">Sep/2021 - Current</p>
            </div>
          </li>
          <li>
            <img src={simbiose} alt="simbose ventures' logo" />
            <div className="conteudo">
              <h3>Front-end Developer</h3>
              <span className="span">Simbiose Ventures</span>
              <p className="t60">Jun/2021 - Aug/2021</p>
            </div>
          </li>
          <li>
            <img src={psicologia} alt="psychology symbol" />
            <div className="conteudo">
              <h3>Psychologist </h3>
              <span className="span">Self-employed</span>
              <p className="t60">2018 - 2021</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="formacao">
        <h2>Academic Education</h2>
        <div className="linha"></div>
        <ul>
          <li>
            <img src={cubos} alt="" />
            <div className="conteudo">
              <h3>Programming from scratch</h3>
              <span className="span">@Cubos Academy</span>
              <p className="t60">Mar/2021 - Aug/2021</p>
            </div>
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-vj2u_MGlubesveMHUxr9pubkZFEyRvbDg&usqp=CAU"
              alt=""
            />
            <div className="conteudo">
              <h3>Specialization - Integral Psychology</h3>
              <span className="span">@ISEO</span>
              <p className="t60">2018 - 2019</p>
            </div>
          </li>

          <li>
            <img
              src="https://media.glassdoor.com/sqll/2489133/unime-squarelogo-1552286560833.png"
              alt=""
            />
            <div className="conteudo">
              <h3>Psychology </h3>
              <span className="span">@Unime</span>
              <p className="t60">2012 - 2016</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
