import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Buscar from "../forms/buscar";
import Navbar from "../home/navbar";
const { useState, useEffect } = React;

const Canciones = () => {
  let [info, setInfo] = useState({
    cancion: [],
  });
  let params = useParams();
  console.log(params);
  const postCancion = async () => {
    // console.log(params.cancion);
    const responseFromPost = await fetch(
      "http://localhost:2550/buscarCancion",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: window.localStorage.token,
        },
        body: JSON.stringify({ cancion: params.cancion }),
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
  useEffect(async () => {
    await postCancion();
  }, []);
  // console.log(info.cancion);
  if (info.cancion === "") {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="resultadosCanciones-container">
        <Navbar />
        <h1>Canciones</h1>
        <div className="resultados-table">
          <caption>Resultados</caption>
          <table>
            <tbody>
              {info.cancion.map((resultado) => {
                return (
                  <tr key={`resultados-container-${resultado.id_track}`} class="border">
                    {/* {console.log(resultado.track)} */}
                    <td key={`resultados-cover-${resultado}`}>
                      <img
                        src={`https://api.happi.dev/v1/music/cover/${resultado.id_album}`}
                        alt="cover"
                        height="75"
                        width="75"
                      />
                    </td>
                    <td key={`resultados-titulo-${resultado.track}`}>
                      <Link
                        to={`/letrasCanciones/${resultado.id_artist}/${resultado.id_album}/${resultado.id_track}`}
                        className="link"
                      >
                        {resultado.track}
                      </Link>
                    </td>
                    <td key={`resultados-autor-${resultado}`}>
                      {resultado.artist}
                    </td>
                    <td key={`resultados-album-${resultado}`}>
                      {resultado.album}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
export default Canciones;
