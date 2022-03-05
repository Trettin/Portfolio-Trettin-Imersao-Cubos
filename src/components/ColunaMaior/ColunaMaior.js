import "./ColunaMaior.css";
import cubosflix from "../../assets/images/cubosflix.jpg";
import marketCubos from "../../assets/images/market-cubos.jpg";

export default function ColunaMaior() {
  return (
    <div className="coluna_maior">
      <h2>Skills</h2>
      <div className="habilidades">
        <div className="habilidade">
          <h3>Front</h3>
          <ul>
            {/* HTML */}
            <li>
              <p className="nome">HTML</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* CSS */}
            <li>
              <p className="nome">CSS</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* JS */}
            <li>
              <p className="nome">Java Script</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* React */}
            <li>
              <p className="nome">React</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* Angular */}
            <li>
              <p className="nome">Angular</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="habilidade">
          <h3>Back</h3>
          <ul>
            {/* Node */}
            <li>
              <p className="nome">Node.js</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* PostgresSQL */}
            <li>
              <p className="nome">PostgresSQL</p>
              <div className="progresso">
                <div className="barra "></div>
                <div className="barra "></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* Java */}
            <li>
              <p className="nome">Java</p>
              <div className="progresso">
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
            {/* C# */}
            <li>
              <p className="nome">C#</p>
              <div className="progresso">
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="habilidade">
          <h3>Soft skills</h3>
          <ul>
            <li>
              <p className="nome">Communication</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>

            <li>
              <p className="nome">Team work</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>

            <li>
              <p className="nome">Time management</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra incompleto"></div>
              </div>
            </li>

            <li>
              <p className="nome">Conflict management</p>
              <div className="progresso">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="tituloprojetos">Projetos</h2>
      <div className="projetos">
        <div className="projeto">
          <h3>Market Cubos</h3>
          <p>
            Final project of module 3 of the 'Programming from Scratch' course
            at Cubos Academy. On the front-end, React was used with the
            react-hook-form, react-router-dom, react-use and material-ui
            libraries. In the back-end, Node was used with the express, bcrypt,
            json-webtoken, cors, dotenv and pg libraries. The database was
            PostgreSQL.
          </p>
          <a
            className="github"
            href="https://github.com/Trettin/Market-Cubos-Desafio03-front"
            target="_blank"
            rel="noreferrer"
          >
            See on Github: Front-end
          </a>
          <a
            className="github"
            href="https://github.com/Trettin/Market-Cubos-Desafio3-Back"
            target="_blank"
            rel="noreferrer"
          >
            See on Github: Back-end
          </a>
          <img src={marketCubos} alt="imagem do site market-cubos" />
          <a
            className="link_button"
            href="https://market-cubos.trettin.dev.br/"
            target="_blank"
            rel="noreferrer"
          >
            See Project
          </a>
        </div>

        <div className="projeto">
          <h3>Cubos Flix</h3>
          <p>
            Cubos Flix is a fictional website developed at the end of the second
            Cubes Academy's Zero Programming course module. site developed with
            React using componentization concepts, hooks useState and useEffect,
            storing information in localStorage.
          </p>
          <a
            className="github"
            href="https://github.com/Trettin/cubos-flix"
            target="_blank"
            rel="noreferrer"
          >
            See on Github
          </a>
          <img src={cubosflix} alt="imagem do site cubosflix" />
          <a
            className="link_button"
            href="https://trettin-cubos-flix.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            See Project
          </a>
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
