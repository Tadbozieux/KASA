import "./footer.css"
import logo from '../../../src/assets/logoFooter.png'
import C2020 from '../../../src/assets/C2020.png'

function footer({ className }){
    return(
        <div className={`footer ${className}`}>
            <img className="logoFooter" src={logo} alt="logo de Kasa"></img>
            <img className="C2020" src={C2020} alt="logo de Kasa"></img>
        </div>
    )
}

export default footer