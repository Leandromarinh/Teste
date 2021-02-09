import React, {useState} from "react";

import "./styles.css";

export default function Calculator(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1)
    }

    return(
        <div className='container'>
            <div className="title-container">
                <h1>Calculadora</h1>
                <button onClick={increment}>Adicionar</button>
            </div>
            <div className='counter-container'>
                <h2>{counter}</h2>
            </div>
        </div>
    )
}