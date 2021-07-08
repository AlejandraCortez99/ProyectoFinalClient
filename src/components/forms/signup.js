import { Link } from "react-router-dom";
import "./forms.css";
import React from "react";
const useState = React.useState;

const SignUp = () => {
  let [info, setInfo] = useState({
    nombre: "",
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
      [event.target.name]: value,
    });
  };

  const getResponse = () => {
    fetch("http://localhost:2550/signup",{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="singup-container">
      {console.log(info)}
      <h1>Sign Up</h1>
      <Link to="/" className="link">Home</Link>
      <Link to="/login" className="link">Log In</Link>
      <form>
  
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />

      
        <input type="text" name="email" placeholder="Email" onChange={handleChange} />

      
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      </form>
      <button onClick={getResponse}>Sign Up</button>
    </div>
  );
};
export default SignUp;
