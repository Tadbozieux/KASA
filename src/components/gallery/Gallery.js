import { Link } from 'react-router-dom';
import datas from '../../data/data'
import Card from '../Card/Card'
import './gallery.css'

function Gallery() {
    return (
      <div className='home_gallery'>
        {datas.map(data => {     //parcours du fichier datas, pour chaque accomodation creation d'une card
          return (
            <div className='cardMother' key={data.id}>
              <Link to={`/gallery/${data.id}`}>   
                <Card
                  id={data.id}
                  title={data.title}
                  cover={data.cover}
                />
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
  
  export default Gallery;