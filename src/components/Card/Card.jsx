import PropTypes from 'prop-types'
import './Card.css'

function Card({ title, cover }) {
    return (
        <div className='Card'> 
            <img className='CardImage' src={cover} alt="accomodation" />
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