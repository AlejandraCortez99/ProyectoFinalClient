import React from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import "../home/home.css";
import { useHistory } from "react-router-dom";
import Background from "../../media/background.jpg";
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
    // valido();
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
  };
  const redirect = () => {
    history.push("/homeUsuario");
  };

  return (
    <div className="supremo">
      <div className="home-container">
        <div className="home-container-links">
          <h1>Home</h1>
        </div>
        <div className="fondo">
          <img src={Background} alt="fondo" />
        </div>
      </div>
      <div className="login-container">
        <div className="formulario-wrap">
          <h3>Login</h3>
          <div class="formulario-box">
            <form onSubmit={handleFormSubmit} className="login-form">
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
              <input type="submit" value="Submit" className="button-form" />
              <div className="opcion">
                <p>o regístrate aquí </p><Link to="/signup" className="linkTo">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
