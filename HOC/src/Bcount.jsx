import React from "react";
import HOC from "./HOC";

const B = ({no,Incre,Decre}) => {
    return(
        <div align="center">
            <h2>B Count</h2>
            <h3>Counts : {no}</h3>
            <button onClick={ () => Incre() }>+</button>
            <button onClick={ () => Decre() }>-</button>
        </div>
    )
}

export default HOC(B);