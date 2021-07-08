import { Link } from "react-router-dom";
import "./forms.css";
import React from "react";
const useState = React.useState;

const Login = () => {
  let [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;

    setInfo({
      ...info,
      [event.target.name]: value,
      [event.target.name]: value,
    });
  };

  const getResponse = () => {
    fetch("http://localhost:2550/login", {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(info)
    })
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
  };
  return (
    <div className="login-container">
          {console.log(info)}
        <h1>Login</h1>
        <Link to="/" className="link">Home</Link>
        <Link to="/signup" className="link">Sign Up</Link>
        <form>
          <input type="text" name="email" placeholder="Email" onChange={handleChange} />
        
          <input type="password" name="password" placeholder="Contraseña" onChange={handleChange}/>
        </form>
        <button onClick={getResponse}>Log In</button>
    </div>
  );
};
export default Login;
