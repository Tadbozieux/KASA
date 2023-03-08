
import '../../App.css';

import Banniere2 from '../../components/BanierreApropos/Banniere';
// import './Home.css'
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/footer/Footer';

function Apropos() {
  return (
    
    <div className='body' >
      <Banniere2 />
		  <Collapse />
      <Footer/>
		</div>
  );
}

export default Apropos;