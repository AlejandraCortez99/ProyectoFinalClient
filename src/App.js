import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Login from "./components/forms/login";
import SignUp from "./components/forms/signup";
import HomeUsuario from "./components/homeUsuario/homeUsuario";
import ResultadosCanciones from "./components/vistasbuscador/resultadosCanciones";
import ResultadosArtistas from "./components/vistasbuscador/resultadosArtistas";
import LetrasCanciones from "./components/vistasbuscador/letrasCanciones";


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
        <Route
          exact
          path="/resultadosArtistas/:artista"
          render={() => {
            return <ResultadosArtistas></ResultadosArtistas>;
          }}
        />
        <Route
          exact
          path="/letrasCanciones/:id_artist/:id_album/:id_track"
          render={() => {
            return <LetrasCanciones></LetrasCanciones>;
          }}
        />
  
      </Switch>
    </div>
  );
};

export default App;
