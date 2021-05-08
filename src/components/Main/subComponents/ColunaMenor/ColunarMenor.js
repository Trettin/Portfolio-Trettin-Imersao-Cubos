import './ColunaMenor.css';
import psicologia from '../../../../assets/psicologia.jpg';
import cubos from '../../../../assets/cubos.png';


export default function ColunaMenor() {
    return(
        <div className="coluna_menor">
            <div className="experiencias">
                <h2>
                    Experiências Profissionais
                </h2>
                <div className="linha"></div>
                <ul>
                    <li>
                        <img src={psicologia} alt="símbolo da psicologia" />
                        <div className="conteudo">
                            <h3>Psicólogo </h3>
                            <span className="span">Autônomo</span>
                            <p className="t60">2019 - Atual</p>
                        </div>
                    </li>

                    <li>
                        <img src="https://i.imgur.com/OzLCX27.png" alt="" />
                        <div className="conteudo">
                            <h3>Psicólogo</h3>
                            <span className="span"> @Humanize Espaço Integral</span>
                            <p className="t60">2018 - 2020</p>
                        </div>
                    </li>

                    <li>
                        <img src="https://i.imgur.com/VbW4e1K.jpg" alt="" />
                        <div className="conteudo">
                            <h3>Psicólogo </h3>
                            <span className="span"> @Dirigindo Bem</span>
                            <p className="t60">2017 - 2018</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="formacao">
                <h2>
                    Formação
                </h2>
                <div className="linha"></div>
                <ul>
                    <li>
                        <img src={cubos} alt="" />
                        <div className="conteudo">
                            <h3>Programação do Zero</h3>
                            <span className="span">@Cubos Academy</span>
                            <p className="t60">2021 - 2021</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-vj2u_MGlubesveMHUxr9pubkZFEyRvbDg&usqp=CAU" alt="" />
                        <div className="conteudo">
                            <h3>Especialização - Psicologia Integral</h3>
                            <span className="span">@ISEO</span>
                            <p className="t60">2018 - 2019</p>
                        </div>
                    </li>

                    <li>
                        <img src="https://media.glassdoor.com/sqll/2489133/unime-squarelogo-1552286560833.png" alt="" />
                        <div className="conteudo">
                            <h3>Psicologia </h3>
                            <span className="span">@Unime</span>
                            <p className="t60">2012 - 2016</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
}