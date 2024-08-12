import { Component } from "react";

class Color extends Component{
    constructor(props){
        super();
        this.state ={
            colour : props.color,
            color : ["Orange","White","Green"]
        }
    }

    render(){
        return(
            <div>
                <h1>National Flag</h1>
                {
                    this.state.colour.map((val,index)=>{
                        return(
                            <h2 style={{backgroundColor:this.state.color[index++]}}>{val}</h2>
                        )
                    })
                }
            </div>
        )
    }
}
export default Color;