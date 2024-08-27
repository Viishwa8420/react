import React,{useState} from "react";
const Control = () => {

    const [name,setname] =useState("");
    const [record,setRecord] =useState([]);

    const handlesubmit = (e) => {
        e.preventDefault();

        if(!name){
            alert("All fileds are required.");
            return false;
        }

        let old = [...record,name];
        setRecord(old);

        alert("Records added.");
        setname("");
    }

    return(
        <div align="center">
            <h1>Fill Out This Form</h1>
            <form onSubmit={handlesubmit}> 
                <table>
                    <tr>
                        <td>
                            Name :
                        </td>
                        <td>
                            <input type="text" onChange={ (e) => setname(e.target.value)} value={name}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit"/>
                        </td>
                    </tr>
                </table>
            </form>
            <br></br>
            <br></br>
            <table border={2} width={600}>
            <thead>
                <tr>
                    <th>
                        Sr no.
                    </th>
                    <th>
                        Name
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    record.map((val,i)=>{
                        return(
                            <tr>
                                <td>{++i}</td>
                                <td>{val}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
}
export default Control;