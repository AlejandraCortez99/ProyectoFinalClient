import React from "react";
import { useParams } from "react-router-dom";
import Buscar from "../forms/buscar";

const { useState, useEffect } = React;


const Canciones = () => {
  let [info, setInfo] = useState({
    cancion: [],
  });
  let cancion = useParams();
  const postCancion = async () => {
    console.log(cancion.cancion);
    const responseFromPost = await fetch(
      "http://localhost:2550/buscarCancion",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: window.localStorage.token,
        },
        body: JSON.stringify({ cancion: cancion.cancion }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
    setInfo({
      cancion: responseFromPost,
    });
  };
  useEffect(() => {
    postCancion();
  }, []);

  return (
    <div className="resultadosCanciones-container">
      <h1>Canciones</h1>
      <Buscar />
      <table>
        <caption>Tus favoritos</caption>
        <tbody>
          {info.cancion.map((resultado) => {
            return (
              <tr key={`resultados-container-${resultado}`}>
                <td key={`resultados-cover-${resultado}`}>
                  <img src={`https://api.happi.dev/v1/music/cover/${resultado.id_album}`} alt="cover" height="55" width="55" />
                </td>
                <td key={`resultados-titulo-${resultado}`}>
                  {resultado.track}
                </td>
                <td key={`resultados-autor-${resultado}`}>
                  {resultado.artist}
                </td>
                <td key={`resultados-album-${resultado}`}>{resultado.album}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Canciones;
