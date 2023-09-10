import { useEffect, useState } from "react";
import Bottle from "../Botttles/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [card, setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);

    const handleAddToCard = bottle => {
        const newCart = [...card, bottle];
        setCart(newCart)
        console.log(newCart)
    }

    

    return (
        <div className="bottles-container">
            <h2>Bottles Available : {bottles.length}</h2>
            <hr />
            <p>Select Product Item: {card.length}</p>
            <hr />
            <div className="bottles">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCard={handleAddToCard}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;