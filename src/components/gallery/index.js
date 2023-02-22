import datas from '../../data/data'
import Card from '../Card/index'


function Gallery() {

    return (
        <div className='home_gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </div>
    )
}


export default Gallery