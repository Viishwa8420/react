import React,{useState} from "react";

const  HOC = (Wrap) =>{

    return() =>{
        const[no,setNo] = useState(0);

        const Incre = () => {
            setNo(no + 1);
        }
        const Decre = () => {
            setNo(no - 1);
        }

        return(
            <Wrap
                no = {no}
                Incre = {Incre}
                Decre = {Decre}>
            </Wrap>
        )
    }
}

export default HOC;