import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import LogOut from "./components/home/logOut";
import Login from "./components/forms/login";
import SignUp from "./components/forms/signup";
import HomeUsuario from "./components/homeUsuario/homeUsuario";
import ResultadosCanciones from "./components/vistasbuscador/resultadosCanciones";
import Intermedio from "./components/vistasbuscador/intermedio";
import ResultadosArtistas from "./components/vistasbuscador/resultadosArtistas";
import LetrasCanciones from "./components/vistasbuscador/letrasCanciones";
import Albumes from "./components/vistasbuscador/albumesArtista";
import Tracks from "./components/vistasbuscador/albumTracks";

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
        <Route
          exact
          path="/albumesArtista/:id_artist"
          render={() => {
            return <Albumes></Albumes>;
          }}
        />
        <Route
          exact
          path="/albumTracks/:id_artist/:id_album"
          render={() => {
            return <Tracks></Tracks>;
          }}
        />
        <Route
          exact
          path="/logout"
          render={() => {
            window.localStorage.clear();
            return <Home></Home>;
          }}
        />
        <Route
          exact
          path="/intermedioCancion/:texto"
          render={() => {
            return <Intermedio tipo="cancion"></Intermedio>;
          }}
        />
        <Route
          exact
          path="/intermedioArtista/:texto"
          render={() => {
            return <Intermedio tipo="artista"></Intermedio>;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
