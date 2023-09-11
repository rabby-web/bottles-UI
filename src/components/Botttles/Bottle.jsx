import PropTypes from 'prop-types'
import './Bottle.css'

const Bottle = ({bottle, handleAddToCard}) => {
    const {name, img, price, ratings} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <p>Ratings: {ratings}</p>
            <button onClick={() => handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleAddToCard: PropTypes.func.isRequired
}
export default Bottle;