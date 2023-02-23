import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../../src/LOGOKASA.png'
import "./Header.css"

const StyledLink = styled(Link)`
height: 68px;
width: 1240px;
left: 100px;
top: 40px;
border-radius: 0px;






    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 300px; color: ${colors.primary}; `}

`

function Header() {
    return (
        <header className='headercss'>
            <Link to="/">
                <img className="logo-Header" src={logo} alt="logo de Kasa" />
            </Link>
            <nav className='navcss'>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/Apropos" $isFullLink>
                A Propos
                </StyledLink>
                {/* <StyledLink to="/freelances">Profils</StyledLink> */}
        </nav>
        </header>
    )
}

export default Header