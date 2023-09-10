import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name, img, price, ratings, ratingsCount, seller, shipping, stock} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>name: {name}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default Bottle;