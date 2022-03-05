import "./Header.css";
import GabrielProfile from "../../assets/images/Gabriel-profile.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header() {
  return (
    <header>
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
    </header>
  );
}
