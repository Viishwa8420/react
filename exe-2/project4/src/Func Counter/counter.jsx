import { useState } from "react";
import "./style.css"

const Counts = ({count,incre,decre,rst}) =>{
    return(
        <div align="center">
            <h1>
                Counter App
            </h1>
            <h2>{count}</h2>
        <input type="button" onClick={ () => incre() } value="+"/>
        {
            count == 0
            ? (<input type="button" disabled onClick={ () => decre() } style={{ cursor: "not-allowed" }} value="-"/>)
            : (<input type="button" onClick={ () => decre() } value="-"/>)
        }
        {
            count == 0
            ? (<input type="button" disabled onClick={ () => rst() } style={{ cursor: "not-allowed" }} value="0"/>)
            : (<input type="button" onClick={ () => rst() } value="0"/>)
        }
        </div>
    )
}
export default Counts;