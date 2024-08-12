import { Component } from "react";
import "./style.css"
import User from "./users";

class State extends Component {
    constructor() {
        super();
        this.State = {
            no: 1,
            user: [
                {
                    Name:"Vishwa",
                    Percentage:95
                },
                {
                    Name:"Nisarg",
                    Percentage:90
                }
            ]

        }
    }
    increment() {
        this.setState({ no: this.State.no = this.State.no + 1 })
    }
    decrement() {
        this.setState({ no: this.State.no = this.State.no - 1 });
    }
    reset() {
        this.setState({ no: this.State.no = 1 });
    }
    render() {

        return (
                <div className="counter">
                    <h2>Count : {this.State.no}</h2>
                    <button onClick={() => { this.increment() }}>+</button>
                    {
                        this.State.no == 0
                            ? <button disabled onClick={() => { this.decrement() }} style={{ cursor: "not-allowed" }}>-</button>
                            : <button onClick={() => { this.decrement() }}>-</button>
                    }
                    {
                        this.State.no == 0
                            ? <button disabled onClick={() => { this.reset() }} style={{ cursor: "not-allowed" }}>reset</button>
                            : <button onClick={() => { this.reset() }}>reset</button>
                    }
                  <User users={this.State.user}/>
                </div>
        )
   
    }
}


export default State;