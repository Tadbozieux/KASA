
import '../../App.css';

import Banniere from '../../components/Banniere/index';
import './Home.css'
import Gallery from '../../components/gallery';

function Home() {
  return (
    
    <div className='body' >
      <Banniere />
		  <Gallery />
		</div>
  );
}

export default Home;