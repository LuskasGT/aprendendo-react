import styles from './Home.module.css'
import savings from '../../../img/savings.svg'
import LinkButton from '../../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
        <h1>Seja muito bem vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar o seus projetos agora mesmo</p>
        <LinkButton to='./NewProject' text="Criar Projeto" />

        <img src={savings} alt="costs"></img>

    </section>
    )
}

export default Home