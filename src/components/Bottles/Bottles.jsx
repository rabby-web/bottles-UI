import { useEffect, useState } from "react";
import Bottle from "../Botttles/Bottle";
import './Bottles.css'
import { addToLS, getStoreCard } from "../../utilities/localstorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [card, setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);

    // load card from LS
    useEffect( ()=>{
        console.log('call the useEffect',bottles.length)
        if(bottles.length){
            const storedCard = getStoreCard();
            console.log(storedCard)

                const savedCard = []
            for(const id of storedCard){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCard.push(bottle)
                }
            }
            console.log(savedCard)
            setCart(savedCard)
        }
    }, [bottles])

    const handleAddToCard = bottle => {
        const newCart = [...card, bottle];
        setCart(newCart)
        console.log(newCart)
        addToLS(bottle.id)
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