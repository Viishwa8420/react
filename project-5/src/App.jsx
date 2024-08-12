import { useState } from "react"
import Counts from "./components/count"

function App() {

  const [no,setNo] = useState(0)
  
  const Increment = () =>{
    setNo(no+1)
  }
  const Decrement = () =>{
    setNo(no-1)
  }

  return (
   <div>
    <Counts
    count = {no}
    incre = {Increment}
    decre = {Decrement}
    />
   </div>
  )
}

export default App
