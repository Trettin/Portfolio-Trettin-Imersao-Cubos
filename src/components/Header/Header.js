import "./Header.css";
import GabrielProfile from "../../assets/images/Gabriel-profile.jpeg";

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
        </p>
      </div>
    </header>
  );
}
