import { Component } from "react";
import Color from "./color";

class User extends Component{
    constructor(props){
        super();
        this.state = {
            record : props.users,
            color : ["I","N","D"]
        }
    }
    render(){
        return(
            <div>
                <h1>
                    Users Percentages
                </h1>
                <table border={1} cellPadding={6} width={600}>
                    <thead>
                        <tr>
                            <th>sr no.</th>
                            <th>Name</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.record.map((val,index)=>{
                                const {Name,Percentage} = val;
                                return(
                                    <tr>
                                        <td>{++index}</td>
                                        <td>{Name}</td>
                                        <td>{Percentage}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Color
                    color={this.state.color}
                />
            </div>
        )
    }
}
export default User;