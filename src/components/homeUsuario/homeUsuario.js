import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../home/navbar";
import LetrasCanciones from "../vistasbuscador/letrasCanciones";
const { useState, useEffect } = React;


const HomeUsuario = () => {
  let [info, setInfo] = useState({
    nombre: "",
    favoritos: [],
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
    setInfo({
      nombre: responseFromGet.nombre,
      favoritos: responseFromGet.favoritos,
    });
  };
  useEffect(() => {
    getUsuario();
  }, []);

  if (info.nombre === "") {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="home-usuario-container">
        <Navbar />
        <h1>Bienvenido {info.nombre}</h1>
        <h2>Tus favoritos</h2>
        <table>
          <tbody>
            {info.favoritos.map((favorito) => {
              return (
                <tr key={`favorito-container-${favorito._id}`}>
                  <td key={`favorito-cover-${favorito._id}`}>
                  <img src={`https://api.happi.dev/v1/music/cover/${favorito.id_album}`} alt="cover" height="55" width="55" />
                  </td>
                  <td key={`favorito-titulo-${favorito._id}`}>
                  <Link
                    to={`/letrasCanciones/${favorito.id_artist}/${favorito.id_album}/${favorito.id_track}`}
                    className="link">
                    {favorito.titulo}
                  </Link>
                  </td>
                  <td key={`favorito-autor-${favorito._id}`}>
                    {favorito.autor}
                  </td>
                  <td key={`favorito-album-${favorito._id}`}>
                    {favorito.album}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
};
export default HomeUsuario;
