import { ContentMain } from "../../components/content/contentMain";
import { Ranked } from "../../components/ranked/ranked";
import main from './main.module.css'

export function Main() {

    return (
        <div className={main.container}>
            <ContentMain/>
            <Ranked />
        </div>
    )
}