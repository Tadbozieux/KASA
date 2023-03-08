import BanniereApropos from '../../assets/BanniereApropos.png';
import './BanniereApropos.css'


function BanniereApropos(){
    return(
        <div className='banniere'>
            <img className='banniereimg' src={BanniereApropos} alt='BanniereApropos'/>
            <h1 className='bannieretittle'>Chez vous,partout et ailleurs</h1>
        </div>
    )
}

export default BanniereApropos