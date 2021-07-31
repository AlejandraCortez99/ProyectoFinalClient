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
    message: "",
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
    let response = await postSignup();
    if (response.auth === true) {
      saveToken(response.token);
      redirect();
    } else if(response.auth === false){
      setInfo({
        message: response.message
      });
    }
  };
  const postSignup = async () => {
    const responseFromPost = await fetch("http://localhost:2550/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: info.nombre,
        email: info.email,
        password: info.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
    return responseFromPost;
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
                <p>o inicia sesión aquí</p>
                <Link to="/login" className="linkTo">
                  Log In
                </Link>
              </div>
              <div className="aviso">
                <p>{info.message}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
