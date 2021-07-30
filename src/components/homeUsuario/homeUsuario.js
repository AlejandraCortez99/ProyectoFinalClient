import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LogOut from "../home/logOut";
import Navbar from "../home/navbar";
const { useState, useEffect } = React;

const HomeUsuario = () => {
  let [info, setInfo] = useState({
    loading: true,
    nombre: "",
    favoritos: [],
    auth: false,
  });
  let params = useParams();
  const getUsuario = async () => {
    let responseFromGet = await fetch("http://localhost:2550/homeUsuario", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: window.localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    if (responseFromGet.auth === true) {
      setInfo({
        ...info,
        loading: false,
        nombre: responseFromGet.usuario.nombre,
        favoritos: responseFromGet.usuario.favoritos,
        auth: responseFromGet.auth,
      });
    } else if(responseFromGet.auth === false){
      setInfo({
        ...info,
        loading: false,
        auth: responseFromGet.auth,
      });
    }
    console.log(responseFromGet);
  };
  useEffect(() => {
    getUsuario();
  }, []);

  if (info.loading === true) {
    return <div>Cargando...</div>;
  } else if (info.loading === false) {
    if (info.auth === true) {
      if (info.favoritos.length === 0) {
        return (
          <div className="home-usuario-container">
            <Navbar />
            <h1>¡Bienvenidx {info.nombre}!</h1>
            <p>(Todavía no tienes favoritos guardados)</p>
          </div>
        );
      } else {
        return (
          <div className="home-usuario-container">
            <Navbar />
            <h1>¡Bienvenidx {info.nombre}!</h1>
            <h2>Tus favoritos</h2>
            <table className="tabla">
              <tbody>
                {info.favoritos.map((favorito) => {
                  return (
                    <tr key={`favorito-container-${favorito._id}`} className="border">
                      <td
                        key={`favorito-cover-${favorito._id}`}
                        className="caratula"
                      >
                        <img
                          src={`https://api.happi.dev/v1/music/cover/${favorito.id_album}`}
                          alt="cover"
                          height="150"
                          width="150"
                        />
                      </td>
                      <td key={`favorito-titulo-${favorito._id}`}>
                        <div className="celda-links">
                          <Link
                            to={`/letrasCanciones/${favorito.id_artist}/${favorito.id_album}/${favorito.id_track}`}
                            className="link"
                          >
                            <strong>{favorito.titulo}</strong>
                          </Link>

                          <Link
                            to={`/albumesArtista/${favorito.id_artist}`}
                            className="link"
                          >
                            {favorito.autor}
                          </Link>
                        </div>
                      </td>

                      <td key={`favorito-album-${favorito._id}`}>
                        <Link
                          to={`/albumTracks/${favorito.id_artist}/${favorito.id_album}`}
                          className="link"
                        >
                          {favorito.album}
                        </Link>
                      </td>
                      {/* <td key={`favorito-album-${favorito._id}`}>
                      {favorito.esFavorito}
                    </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
    }else if(info.auth === false){
      return <LogOut />
    }
  }
};
export default HomeUsuario;
