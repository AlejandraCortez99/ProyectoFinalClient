import React from "react";
import "./resultadosBusquedas.css";
import { useParams } from "react-router-dom";
const { useState, useEffect } = React;

const Letras = () => {
  let [info, setInfo] = useState({
    lyrics: [],
  });
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
    console.log(responseFromGet);
    setInfo({
      lyrics: [responseFromGet],
    });
  };
  useEffect(() => {
    getLetra();
  }, []);

  return (
    <div className="resultados-container-cancion">
      <div>
        <h3>OTRA RUTA CON LETRA</h3>
      </div>
      {info.lyrics.map((obj) => {
        const finalLinea = obj.cancion.lyrics;
        const versos = finalLinea.replace("/n", <br />);
        console.log(versos);
        return (
          <div
            key={`cancion-container-${obj.cancion}`}
            className="cancion-container"
          >
            <div key={`cancion-informacion-${obj}`} className="informacion">
              <img
                src={`https://api.happi.dev/v1/music/cover/${obj.cancion.id_album}`}
                alt="cover"
                height="190"
                width="190"
              />
              <h5>{obj.cancion.artist}</h5>
              <h6>{obj.cancion.album}</h6>
            </div>
            <div key={`cancion-lyrics-container-${obj}`} className="lyrics">
              <h4>{obj.cancion.track}</h4>
              <p>{versos}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Letras;
