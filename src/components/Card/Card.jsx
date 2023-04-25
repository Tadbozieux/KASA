import PropTypes from 'prop-types'
import styled from 'styled-components'
import './Card.css'


const CardImage = styled.img`
   
   
    
height: 250px;
    object-fit: cover;
`
 
function Card({  title, cover }) {
    return (
        <div className='Card'> 
            <CardImage src={cover} alt="accomodation" />
            <span className='title'>{title}</span>
        </div>
    )
}
 
Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string,
}
 
Card.defaultProps = {
    title: 'Mon titre par défaut',
}

export default Card