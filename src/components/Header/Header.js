import { Link } from 'react-router-dom';
import logo from '../../../src//assets/LOGOKASA.png';
import './Header.css';

function Header() {
  return (
    <header className="headercss">
      <Link to="/">
        <img className="logo-Header" src={logo} alt="logo de Kasa" />
      </Link>
      <nav className="navcss">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Apropos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;