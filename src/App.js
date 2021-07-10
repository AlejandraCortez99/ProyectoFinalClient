import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Login from "./components/forms/login";
import SignUp from "./components/forms/signup";
import HomeUsuario from "./components/homeUsuario/homeUsuario";
import ResultadosCanciones from "./components/vistasbuscador/resultadosCanciones";


const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home></Home>;
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            return <Login></Login>;
          }}
        />
        <Route
          exact
          path="/signup"
          render={() => {
            return <SignUp></SignUp>;
          }}
        />
         <Route
          exact
          path="/homeUsuario"
          render={() => {
            return <HomeUsuario></HomeUsuario>;
          }}
        />
        <Route
          exact
          path="/resultadosCanciones/:cancion"
          render={() => {
            return <ResultadosCanciones></ResultadosCanciones>;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
