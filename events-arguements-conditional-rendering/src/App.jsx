import { useState } from "react";

function App() {
  const [login, setlogin] = useState(false)
  const handlesubmit = (res) => {
    setlogin(res)
  }
  return (
    <div align="center">
      <h2>
        Simple Login
      </h2>
      {
        login ? (
          <div>
            <h2 style={{ color: "green" }}>Successfully Login</h2>
            <button onClick ={() => handlesubmit(false)}>Logout</button>
          </div>
        )
          :
          (
            <div>
              <h2 style={{ color: "blue" }}>Please Login Here</h2>
              <button onClick={() => handlesubmit(true)}>Login</button>
            </div>
          )
      }
    </div>
  )
}
export default App;