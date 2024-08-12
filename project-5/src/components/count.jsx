import { useState } from "react";

const Counts = ({count,incre,decre}) =>{
    return(
        <div align="center">
            <h1>
                Counting App
            </h1>
            <h2>Count : {count}</h2>
        <input type="button" onClick={ () => incre() } value="+"/>
        {
            count == 0
            ? (<input type="button" disabled onClick={ () => decre() } value="-"/>)
            : (<input type="button" onClick={ () => decre() } value="-"/>)
        }
        </div>
    )
}
export default Counts;