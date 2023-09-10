import { useEffect, useState } from "react";
import Bottle from "../Botttles/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    return (
        <div className="bottles-container">
            <div className="bottles">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;