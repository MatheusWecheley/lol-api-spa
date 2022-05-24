import { useEffect } from 'react'
import content from './content.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Aos from 'aos';
import 'aos/dist/aos.css'
import img from '../../components/imgs/3.jpg'


export function ContentMain() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className={content.container}>
            <div data-aos='fade-right' className={content.tittle}>
                <h1>BEM VINDO AO DASHBOARD DO LOL</h1>
                <span>O maior e mais completo site sobre League of Legends do Brasil</span>
                <button>PROCURE SEU PERFIL <AiOutlineArrowRight /></button>
            </div>
            <div data-aos='fade-left' className={content.Image}>
                <h1>MELHORE SUA GAMEPLAY COM O SISTEMA MAIS COMPLETO E EFICIENTE DO LEAGUE OF LEGENDS</h1>
                <span>Nosso sistema conta com a maior eficiencia e qualidade jamais vista antes</span>
                <img src={img} />
            </div>
        </div>
    )
}