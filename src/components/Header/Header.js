import { Link } from 'react-router-dom'
import logo from '../../../src/LOGOKASA.png'
import "./Header.css"


function Header() {
    return (
        <header className='headercss'>
            <Link to="/">
                <img className="logo-Header" src={logo} alt="logo de Kasa" />
            </Link>
            <nav className='navcss'>
                <ul>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/Apropos">A Propos</a> 
                    </li>
                
                </ul>
        </nav>
        </header>
    )
}

export default Header