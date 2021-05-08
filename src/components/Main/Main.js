import './Main.css';
import ColunaMenor from './subComponents/ColunaMenor/ColunarMenor';
import ColunaMaior from './subComponents/ColunaMaior/ColunaMaior';


export default function Main() {
    return(
        <main>
            <ColunaMenor/>
            <ColunaMaior/>
        </main>
    );
}

