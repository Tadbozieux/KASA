import MaskGroup from '../../assets/MaskGroup.png';
import './Banniere.css'


function Banniere(){
    return(
        <div className='banniere'>
            <img className='banniereimg' src={MaskGroup} alt='masque'/>
            <h1 className='bannieretittle'>Chez vous,partout et ailleurs</h1>
        </div>
    )
}

export default Banniere