import React from "react";
import { useParams } from "react-router-dom";
const { useState, useEffect } = React;

const Canciones = () => {
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
    console.log(responseFromPost);
  };
  useEffect(() => {
    postCancion();
  }, []);

  return (
    <div>
      <h1>Canciones</h1>
    </div>
  );
};
export default Canciones;
