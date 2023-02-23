
import '../../App.css';

import Banniere from '../../components/Banniere/index';
import './Home.css'
import Gallery from '../../components/gallery';
import Footer from '../../components/footer';

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