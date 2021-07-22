import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const { useState, useEffect } = React;

const Artistas = () => {
  let [info, setState] = useState({
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
    setState({
      artista: responseFromPost,
    });
  };
  useEffect(() => {
    postArtista();
  }, []);
  if (info.artista == ""){
    return <div>Cargando...</div>;
  } else {
  return (
    <div className="resultados-artistas-container">
      <h1>Artistas</h1>
      {/* <Buscar /> */}
      <table>
        <caption>Artistas</caption>
        <tbody>
        {info.artista.map((busqueda) =>{
          console.log(busqueda);
   //hacer que muestre un resultado por cada coincidencia, si se repiten, los ignore
          return (
              <tr key={`busqueda-container-${busqueda.id_artist}`}>
                <td key={`busqueda-cover-${busqueda}`}>
                  <img src={`https://api.happi.dev/v1/music/cover/${busqueda.id_album}`} alt="cover" height="55" width="55" />
                </td>
                <td key={`busqueda-artista-${busqueda}`}>
                  <Link
                    to={`/albumesArtista/${busqueda.id_artist}`}
                    className="link">
                    {busqueda.artist}
                  </Link>
                </td>
              </tr>
            );
          }
          )}
        </tbody>
      </table>
    </div>
  );
  };
};
export default Artistas;
