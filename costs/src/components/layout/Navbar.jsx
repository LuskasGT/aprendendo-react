import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.navList}>
                <li class={styles.item}><Link to='/'><img src={logo} alt='Costs'/></Link></li>
                <li class={styles.item}><Link to="/">Home</Link></li>
                <li><Link to="/Empresa">Empresa</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
                <li><Link to="/NewProject">Novo projeto</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
