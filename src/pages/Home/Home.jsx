
import '../../App.css';

import Banniere from '../../components/Banniere/Banniere';
import './Home.css'
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    
    <div className='body' >
      <Banniere />
		  <Gallery />
      <Footer/>
		</div>
  );
}

export default Home;