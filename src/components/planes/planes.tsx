import { ButtonPay } from "../button/button";
import planes from './planes.module.css'


export function Planes() {
    return (
        <div className={planes.plane}>
            <h1>Planos a partir de <span className={planes.value1}>R$20,00</span></h1>
                <div className={planes.plane1}>    
                    <h3>PLANO 1: <span className={planes.value2}>R$20,00</span></h3>
                    <span>Plano para iniciantes</span>
                    <br/>
                    <span>Tudo sobre o básico do jogo!</span>
                    <ButtonPay />
                </div>
                
                <div className={planes.plane2}>                   
                    <h3>PLANO 2: <span className={planes.value3}>R$50,00</span></h3>
                    <span>Plano para Intermediarios</span>
                    <br/>
                    <span>Evolua suas habilidades treinando com os melhores!</span>
                    <ButtonPay/>
                </div>

                <div className={planes.plane3}>                   
                    <h3>PLANO 3: <span className={planes.value4}>R$100,00</span></h3>
                    <span>Plano para Avançados</span>
                    <br/>
                    <span>Tenha como mentor um jogador profissional ao seu lado!</span>
                    <ButtonPay/>
                </div>
        </div>
    )
}