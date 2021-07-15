import React from "react";
import { useParams } from "react-router-dom";
import Buscar from "../forms/buscar";

const { useState, useEffect } = React;

const Artistas = () => {
  let [info, setInfo] = useState({
    artista: [],
  });
  let artista = useParams();
  const postArtista = async () => {
    console.log(artista.artista);
    const responseFromPost = await fetch(
      "http://localhost:2550/buscarArtista",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: window.localStorage.token,
        },
        body: JSON.stringify({ artista: artista.artista }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
      console.log(responseFromPost);
    setInfo({
      artista: responseFromPost,
    });
  };
  useEffect(() => {
    postArtista();
  }, []);
  
  return (
    <div className="resultados-container">
      <h1>Artistas</h1>
      {/* <Buscar /> */}
      <table>
        <caption>Tus Artistas</caption>
        <tbody>
          {info.artista.map((busqueda) => {
            return (
              <tr key={`resultados-container-${busqueda}`}>
                <td key={`resultados-cover-${busqueda}`}>
                  <img src={`https://api.happi.dev/v1/music/cover/${busqueda.id_album}`} alt="cover" height="55" width="55" />
                </td>
                <td key={`resultados-artista-${busqueda}`}>
                  {busqueda.artist}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Artistas;
