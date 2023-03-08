import PropTypes from 'prop-types'
import colors from '../../utils/style/colors'
import styled from 'styled-components'


const CardImage = styled.img`
   
   
    
height: 250px;
    object-fit: cover;
`
 
function Card({  title, cover }) {
    return (
        <CardWrapper>
            <CardImage src={cover} alt="freelance" />
            <span>{title}</span>
        </CardWrapper>
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
const CardWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 15px;
    background:linear-gradient(180deg,  rgba(255,110,110,1) 0%,  rgba(214,55,55,1) 75%, rgba(149,81,81,1) 100%); 
    border-radius: 8px;
    width: 350px;
    margin:15px;
    height: 300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
export default Card