import ranked from './ranked.module.css'
import challenge from '../../assents/challenger.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Planes } from '../planes/planes'
import { useEffect } from 'react';

export function Ranked() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    
    return (
        <div data-aos='fade-right' className={ranked.index}>
            <div className={ranked.challenge}>
                <h1>Seja um DESAFIANTE!</h1>
                <span>Aprenda com os erros e evolua no LOL!</span>
                <img src={challenge} />
            </div>
            <div className={ranked.bar}>
                <span></span>
            </div>
            <div className={ranked.planes}>
                <Planes/>
            </div>
        </div>
    )
}