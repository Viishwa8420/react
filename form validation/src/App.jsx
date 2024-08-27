import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [toggle, setToggle] = useState(false);

  const validateForm = () => {
    const formErr = {};

    if (!name) {
      formErr.name = "Name is required.";
    }

    if (!email) {
      formErr.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      formErr.email = "Invalid email address.";
    }

    if (!password) {
      formErr.password = "password is required.";
    } else if (password.length < 8) {
      formErr.password = "Password must be at least 8 characters.";
    }

    setErrors(formErr);

    console.log(formErr);

    return false;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Name :", name);
      console.log("Email :", email);
      console.log("Password :", password);
    }
  };

  const showPassword = () => {
    setToggle(true)
  }

  return (
    <div className="container">
      <h2>Form Validation</h2>
      <div className="row mt-3">
        <div className="col-lg-6 p-4 border shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-grp mb-3">
              <label htmlFor="name">Name :</label>
              <input type="text" className="form-cntrl" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div className="form-grp mb-3">
              <label htmlFor="email">Email :</label>
              <input type="text" className="form-cntrl" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className="form-grp mb-3">
              <label htmlFor="password">Password :</label>
              {
                toggle ? (
                <input type="text" className ="form-cntrl" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" value={password} />
                )
                :(
                  <input type="password" className ="form-cntrl" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" value={password} />
                )
              }
              {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
           <div className="form-grp mb-3">
           <input type="submit" className="btn btn-primary" value="Submit" />

            </div>
          </form>
          <button onClick={ () => showPassword() }>Show password</button>
        </div>
      </div>
    </div>
  );
}

export default App
