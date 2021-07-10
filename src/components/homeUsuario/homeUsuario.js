import React from "react";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
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
      console.log(responseFromGet);
      setInfo({ nombre: responseFromGet.nombre, favoritos: responseFromGet.favoritos})
    };
    //       let nombreUsuario = responseFromGet.nombre;
    //       let favoritosUsuario = responseFromGet.favoritos;
    //       let guardados = [];
    //         guardados = favoritosUsuario.map((favoritos) =>{
    //           let favoritosObj = {
    //             id: favoritos._id,
    //             titulo: favoritos.titulo,
    //             artista: favoritos.artista,
    //             algum: favoritos.album,
    //           };
    //           return favoritosObj;
    //         });
    //         let usuarioInfo = {
    //             nombre: nombreUsuario,
    //           favoritos: favoritosUsuario,
    //         };
    //         setInformation(usuarioInfo);
    //       };

    //       const setInformation = (information) => {
    //         setInfo({
    //           nombre: information.nombre,
    //           favoritos: information.favoritos,
    //         });
    //       };

          useEffect(() => {
            getUsuario();
          }, []);

    if (info.nombre === "") {
        return <div>Cargando...</div>;
      } else {
        return (
            <div className="home-usuario-container">
            <p>Welcome {info.nombre}</p>
            <table>
              <caption>
                Tus favoritos
              </caption>
              <tbody>
                {info.favoritos.map((favorito) => {
                  return (
                    <tr key={`favorito-container-${favorito.id}`}>
                      <td key={`favorito-titulo-${favorito.id}`}>{favorito.titulo}</td>
                      <td key={`favorito-autor-${favorito.id}`}>{favorito.autor}</td>
                      <td key={`favorito-album-${favorito.id}`}>{favorito.album}</td>
                    </tr>
                 );
                 })
                 }
              </tbody>
            </table>
          </div>
        )};
    // return (
    //     <div className="home-usuario-container">
    //         <h1>Ruta Privada</h1>
    //     </div>
    // );

};
export default HomeUsuario;
