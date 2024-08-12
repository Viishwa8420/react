import { Component } from "react";
import "./style.css"

class State extends Component {
    constructor() {
        super();
        this.State = {
            no: 0,

        }
    }
    increment() {
        this.setState({ no: this.State.no = this.State.no + 1 })
    }
    decrement() {
        this.setState({ no: this.State.no = this.State.no - 1 });
    }
    reset() {
        this.setState({ no: this.State.no = 0 });
    }
    render() {

        return (
                <div className="container" align="center">
                    <h2>Counter App</h2>
                    <button onClick={() => { this.increment() }}>+</button>
                    <span>{this.State.no}</span>
                    {
                        this.State.no == 0
                            ? <button disabled onClick={() => { this.decrement() }} style={{ cursor: "not-allowed" }}>-</button>
                            : <button onClick={() => { this.decrement() }}>-</button>
                    }
                   <h3>
                   {
                        this.State.no == 0
                            ? <button disabled onClick={() => { this.reset() }} style={{ cursor: "not-allowed" }}>Reset</button>
                            : <button onClick={() => { this.reset() }}>Reset</button>
                    }
                   </h3>
                </div>
        )
   
    }
}


export default State;