import React from "react";
import { useParams } from "react-router-dom";
const { useState, useEffect } = React;

const Albumes = () => {
  let [info, setInfo] = useState({
    albumes: [],
  });
  let id_artist = useParams();
  console.log(id_artist);
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
      albumes: [responseFromGet],
    });
  };
  useEffect(() => {
    getAlbumes();
  }, []);
  if (info.albumes == ""){
    return <div>Cargando...</div>;
  } else {
  return (
    <div>
      <h1>esta es la ruta de los albumes</h1>
        {info.albumes.map((busqueda)=>{
          console.log("¿se ejecuta hasta aqui?");
          <div key={`albumes-container-${busqueda.id_artist}`}>
            <p>si llega aqui es un milagro(?)</p>
          </div>
          })
        }
    </div>
  )};
};
export default Albumes;
