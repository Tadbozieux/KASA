import datas from '../../data/data'
import Card from '../Card/index'

function Gallery (){
    datas.map(data => {
                    return (
                        <Card
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            cover={data.cover}
                        />
                    )
                })
    
}

export default Gallery