import React from "react";
import "./resultadosBusquedas.css";
import { Link, useParams } from "react-router-dom";
import Favorito from "../favorito/favorito";
import iFavorito from "../../media/favorito.png";
import iNoFavorito from "../../media/noFavorito.png";
const { useState, useEffect } = React;

const Letras = () => {
  let [info, setInfo] = useState({
    titulo: "",
    artista: "",
    album: "",
    id_album: "",
    favorito: false,
    lyrics: [],
    cargando: true,
    // versos:[],
  });
  const presionado = (event)=>{
    event.preventDefault();
    console.log("el boton esta pulsado");
  }
  let { id_artist, id_album, id_track } = useParams();
  const getLetra = async () => {
    const responseFromGet = await fetch(
      `http://localhost:2550/cancion/${id_artist}/${id_album}/${id_track}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: window.localStorage.token,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
    console.log(responseFromGet.cancion.lyrics);
    const finalLinea = responseFromGet.cancion.lyrics;
    const versos = finalLinea.split("\n");
    console.log(versos);
    setInfo({
      titulo: responseFromGet.cancion.track,
      artista: responseFromGet.cancion.artist,
      album: responseFromGet.cancion.album,
      id_album: responseFromGet.cancion.id_album,
      favorito: responseFromGet.favorito,
      lyrics: versos,
      cargando: false,
    });
  };
  useEffect(() => {
    getLetra();
  }, []);

  if (info.cargando == true) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="resultados-container-cancion">
        <div className="cancion-container">
          <div className="informacion">
            <img
              src={`https://api.happi.dev/v1/music/cover/${info.id_album}`}
              alt="cover"
              height="200"
              width="200"
            />
            <h5>{info.artista}</h5>
            <h6>{info.album}</h6>
            {info.favorito}
            <button className="button" onClick={presionado}>
              <Favorito />
            </button>
          </div>
          <div className="lyrics">
            <h4>{info.titulo}</h4>
            {info.lyrics.map((obj) => {
              return <div>{obj}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
};
export default Letras;
