import "./Main.css";
import ColunaMenor from "../ColunaMenor/ColunarMenor";
import ColunaMaior from "../ColunaMaior/ColunaMaior";

export default function Main() {
  return (
    <main>
      <div className="main-content">
        <ColunaMenor />
        <ColunaMaior />
      </div>
    </main>
  );
}
