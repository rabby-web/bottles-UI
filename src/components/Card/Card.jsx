import PropTypes from 'prop-types'
import './cart.css'


const Card = ({card}) => {
    return (
        <div>
            <h2>Card: {card.length}</h2>
            <div className="card-container-img">
                {
                    card.map(bottle => <img key={bottle.key} src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.array.isRequired
}

export default Card;