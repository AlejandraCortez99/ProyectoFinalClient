import React from "react";
import { useHistory } from "react-router-dom";
import "./resultadosBusquedas.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../home/navbar";
import iFavorito from "../../media/favorito.png";
import iNoFavorito from "../../media/noFavorito.png";
import Dishonor from "../../media/dishonor.gif";
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
  });
  let history = useHistory();

  const checked = async (event) => {
    event.preventDefault();
    if (info.favorito === false) {
      await guardarFav();
    } else if (info.favorito === true) {
      await borrarFav();
    }
    // redirect();
  };
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
    // console.log(responseFromGet.cancion.haslyrics);
    // if(responseFromGet.cancion.haslyrics === true){

    // }
    if (responseFromGet.cancion.lyrics) {
      const finalLinea = responseFromGet.cancion.lyrics;
      const versos = finalLinea.split("\n");
      setInfo({
        titulo: responseFromGet.cancion.track,
        artista: responseFromGet.cancion.artist,
        album: responseFromGet.cancion.album,
        id_album: responseFromGet.cancion.id_album,
        favorito: responseFromGet.favorito,
        lyrics: versos,
        cargando: false,
      });
    } else {
      console.log("hasta aqui");
      setInfo({
        ...info,
        cargando: false,
      })
    }
  };
  useEffect(() => {
    getLetra();
  }, []);
  const guardarFav = async () => {
    const postFav = await fetch(
      `http://localhost:2550/guardarFavorito/${id_artist}/${id_album}/${id_track}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: window.localStorage.token,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        return result.favorito;
      });
    console.log(postFav);
    setInfo({
      ...info,
      favorito: postFav,
    });
  };
  const borrarFav = async () => {
    const deleteFav = await fetch(
      `http://localhost:2550/borrarFavorito/${id_artist}/${id_album}/${id_track}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: window.localStorage.token,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        return result.favorito;
      });
    console.log(deleteFav);
    setInfo({
      ...info,
      favorito: deleteFav,
    });
  };
  const redirect = () => {
    history.push(`/letrasCanciones/${id_artist}/${id_album}/${id_track}`);
  };
  // console.log(info);
  if (info.cargando === true) {
    return <div>Cargando...</div>;
  } else if (info.cargando === false) {
    if (info.lyrics.length !== 0 ) {
      return (
        <div className="resultados-container-cancion">
          <Navbar />
          <div className="cancion-container">
            <div className="informacion">
              <img
                src={`https://api.happi.dev/v1/music/cover/${info.id_album}`}
                alt="cover"
                height="250"
                width="250"
              />
              <Link to={`/albumesArtista/${id_artist}`} className="link">
                <h5>{info.artista}</h5>
              </Link>
              <Link
                to={`/albumTracks/${id_artist}/${id_album}`}
                className="link"
              >
                <h6>{info.album}</h6>
              </Link>
              {info.favorito}
              <button className="button" onClick={checked}>
                {info.favorito === true ? (
                  <div>
                    <img src={iFavorito} alt="icono" className="icono" />
                  </div>
                ) : (
                  <div>
                    <img src={iNoFavorito} alt="icono" className="icono" />
                  </div>
                )}
              </button>
            </div>
            <div className="lyrics">
              <h2>
                <i>{info.titulo}</i>
              </h2>
              {info.lyrics.map((obj) => {
                return <div>{obj}</div>;
              })}
            </div>
          </div>
        </div>
      );
    }else {
      return(
        <div className="resultados-container-cancion">
          <Navbar />
          <div className="cancion-container">
            <div className="noletra">
              <h3>¡Ups! Lo siento, parece que esta cancion todavía no dispone de letra</h3>
              <img src={Dishonor} alt="noLetra"/>
            </div>
          </div>
        </div>
      )
    };
  }
};
export default Letras;
