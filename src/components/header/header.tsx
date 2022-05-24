import styles from './style.module.css'
import {FiSearch} from 'react-icons/fi'
import { useState } from 'react'

export function Header() {

    const [isSearch, setIsSearch] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        let response = await fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${setIsSearch}?`);
        let data = response.json();
        console.log(data)
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <h1>Yex Lol API</h1>
            </div>
            <div className={styles.searchbar}>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={e => setIsSearch(e.target.value)} placeholder="Digite o nome do player que procura" />
                    <button><FiSearch /></button>
                </form>
            </div>
            <div className={styles.menu}>
                <span>Ranked</span>
                <span>Estatisticas</span>
                <span>Seu Perfil</span>
            </div>
        </div>
    )
}