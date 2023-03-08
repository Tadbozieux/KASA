
import '../../App.css';

import Banniere from '../../components/Banniere/Banniere';
// import './Home.css'
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/footer/Footer';

function Apropos() {
  return (
    
    <div className='body' >
      <Banniere />
		  <Collapse />
      <Footer/>
		</div>
  );
}

export default Apropos;