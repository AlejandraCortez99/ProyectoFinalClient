import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../home/navbar";
const { useState, useEffect } = React;

const Tracks = () => {
  let [info, setInfo] = useState({
    album: "",
    trackList: [],
  });
  let { id_artist, id_album } = useParams();
  console.log(useParams());
  const getTracks = async () => {
    const responseFromGet = await fetch(
      `http://localhost:2550/cancionesAlbum/${id_artist}/${id_album}`,
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
    setInfo({
      album: responseFromGet.album,
      trackList: responseFromGet.tracks,
    });
  };
  useEffect(() => {
    getTracks();
  }, []);
  return (
    <div className="albumTrackList-container">
      <Navbar />
      <h1>Track List</h1>
      <div className="tracklist">
        <img
          src={`https://api.happi.dev/v1/music/cover/${id_album}`}
          alt="cover"
          height="350"
          width="350"
        />
        <div className="tracklist-table">
          <caption>
            <h1>{info.album}</h1>
          </caption>
          <table>
            <tbody>
              {info.trackList.map((resultado) => {
                console.log(resultado);
                return (
                  <tr key={`resultado-container-${resultado.album}`}>
                    <td key={`resultado-titulo-${resultado.album}`}>
                      <Link
                        to={`/letrasCanciones/${id_artist}/${id_album}/${resultado.id_track}`}
                        className="link"
                      >
                        {resultado.track}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Tracks;
