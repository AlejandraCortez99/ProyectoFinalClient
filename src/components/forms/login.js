import { Link } from "react-router-dom";
import "./forms.css";
import React from "react";
import { useHistory } from "react-router-dom";
const useState = React.useState;

const Login = () => {
  let [info, setInfo] = useState({
    email: "",
    password: "",
  });
  let history = useHistory();

  const handleChange = (event) => {
    let value = event.target.value;
    setInfo({
      ...info,
      [event.target.name]: value,
      [event.target.name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let myToken = await postLogin();
    saveToken(myToken);
    redirect();
  };
  const postLogin = async () => {
    const responseFromPost = await fetch("http://localhost:2550/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
    return responseFromPost.token;
  };
  const saveToken = (tokenElement) => {
    console.log(tokenElement);
    window.localStorage.setItem("token", tokenElement);
  }
  const redirect = () => {
    history.push("/homeUsuario");
  };
  
  return (
    <div className="login-container">
      <h1>Login</h1>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/signup" className="link">
        Sign Up
      </Link>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <input
        type="submit"
        value="Submit"
        />
      </form>
    </div>
  );
};
export default Login;
