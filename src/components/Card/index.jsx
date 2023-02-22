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
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    height: 300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
export default Card