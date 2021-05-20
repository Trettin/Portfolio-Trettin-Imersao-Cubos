import './Header.css'
import GabrielProfile from '../../assets/images/Gabriel-profile.jpeg';

export default function Header() {
    return(
        <header>
            <img className="foto" src={GabrielProfile} alt="Foto de Gabriel Trettin" />

            <div className="dados">
                <h1>Gabriel Trettin</h1>
                <p id="ptit" className="profissao t60">
                    Desenvolvedor full-stack em formação
                </p>
            </div>
        </header>
    );
}
    