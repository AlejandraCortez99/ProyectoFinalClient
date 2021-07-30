import React from "react";
import "./forms.css";
import "../home/home.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Background from "../../media/background.jpg";
const useState = React.useState;

const SignUp = () => {
  let [info, setInfo] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  let history = useHistory();

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
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let myToken = await postSignup();
    saveToken(myToken);
    redirect();
  };
  const postSignup = async () => {
    const responseFromPost = await fetch("http://localhost:2550/signup", {
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
      <div className="singup-container">
        <div class="formulario-wrap">
          {console.log(info)}
          <h3>Sign Up</h3>
          <div class="formulario-box">
            <form onSubmit={handleFormSubmit} className="signup-form">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña (min.8 crts)"
                onChange={handleChange}
              />
              <input type="submit" value="Submit" className="button-form" />
              <div className="opcion">
                <p>o inicia sesión aquí
                </p><Link to="/login" className="linkTo">
                  Log In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
