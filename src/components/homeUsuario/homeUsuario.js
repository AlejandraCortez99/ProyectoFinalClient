import React from "react";
import Buscar from "../forms/buscar";
const { useState, useEffect } = React;

const HomeUsuario = () => {
  let [info, setInfo] = useState({
    nombre: "",
    favoritos: [],
  });

  const getUsuario = async () => {
    let responseFromGet = await fetch("http://localhost:2550/homeUsuario", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: window.localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    setInfo({
      nombre: responseFromGet.nombre,
      favoritos: responseFromGet.favoritos,
    });
  };
  useEffect(() => {
    getUsuario();
  }, []);

  if (info.nombre === "") {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="home-usuario-container">
          <Buscar />
        {/* <form>
          <input
            type="text"
            name="buscador"
            placeholder="Bucar Cancion o Artista"
          />

          <input type="submit" value="Buscar artista" />
          <input type="submit" value="Buscar cancion" />

        </form> */}

        <p>Welcome {info.nombre}</p>
        <table>
          <caption>Tus favoritos</caption>
          <tbody>
            {info.favoritos.map((favorito) => {
              return (
                <tr key={`favorito-container-${favorito._id}`}>
                  <td key={`favorito-titulo-${favorito._id}`}>
                    {favorito.titulo}
                  </td>
                  <td key={`favorito-autor-${favorito._id}`}>
                    {favorito.autor}
                  </td>
                  <td key={`favorito-album-${favorito._id}`}>
                    {favorito.album}
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
export default HomeUsuario;
