// import React from "react";
// import "./resultadosBusquedas.css";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
// const { useState } = React;

// const Artista = () => {
//   let [info, setInfo] = useState({
//     discografia: [],
//   });
//   let history = useHistory();
//   let id_artist = useParams();
//   let redirectAlbumes = async () =>{
//     let myToken = await getDiscografia();
//     saveToken(myToken);
//     redirect();
//   };
//   const getDiscografia = async () => {
//     const responseFromGet = await fetch(
//       `http://localhost:2550/artista/${id_artist}`,
//       {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         return result;
//       });
//     console.log(responseFromGet);
//     setInfo({
//       discografia: responseFromGet,
//     });
//   };
//   const saveToken = (tokenElement) => {
//     console.log(tokenElement);
//     window.localStorage.setItem("token", tokenElement);
//   }
//   const redirect = () => {
//     history.push("/albumesArtista/:id_artist");

//   return (
//     <div className="resultados-container-cancion">
//       <div>
//         <h3>RUTA DE LA DISCOGRAFIA</h3>
//       </div>
//       <div>

//       </div>
// 
//     </div>
//   );
//   };
// };
// export default Artista;
