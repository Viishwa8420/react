import { useState } from "react"
import Counts from "./Func Counter/counter.jsx"
import "./Func Counter/style.css"

function App() {

  const [no,setNo] = useState(0)
  
  const Increment = () =>{
    setNo(no+1)
  }
  const Decrement = () =>{
    setNo(no-1)
  }
  const Reset = () =>{
    setNo(0)
  }

  return (
   <div>
    <Counts
    count = {no}
    incre = {Increment}
    decre = {Decrement}
    rst = {Reset}
    />
   </div>
  )
}

export default App
