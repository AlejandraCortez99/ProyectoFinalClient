import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../home/navbar";
const { useState, useEffect } = React;

const Albumes = () => {
  let [info, setInfo] = useState({
    albumes: [],
    artista:"",
    id_artista: "",
  });
  let { id_artist } = useParams();
  const getAlbumes = async () => {
    const responseFromGet = await fetch(
      `http://localhost:2550/albumes/${id_artist}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: window.localStorage.token,
        },
      })
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
    setInfo({
      albumes: responseFromGet.albums.albums,
      artista: responseFromGet.albums.artist,
      id_artist: responseFromGet.albums.id_artist,
    });
    console.log(responseFromGet.albums.artist);
  };
  useEffect(() => {
    getAlbumes();
  }, []);
  if (info.albumes === "") {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="resultadosCanciones-container">
        <Navbar/>
        <h1>Discografía de {info.artista}</h1>
        {console.log(info)}
        <table>
          <tbody>
            {info.albumes.map((resultado) => {
              console.log(resultado);
              return (
                <tr key={`resultado-container-${resultado.album}`}>
                  <td key={`resultado-cover-${resultado.id_album}`}>
                    <img
                      src={`https://api.happi.dev/v1/music/cover/${resultado.id_album}`}
                      alt="cover"
                      height="55"
                      width="55"
                    />
                  </td>
                  <td key={`resultado-titulo-${resultado.album}`}>
                    <Link to={`/albumTracks/${info.id_artist}/${resultado.id_album}`} className="link">
                      {resultado.album}
                    </Link>
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
export default Albumes;
