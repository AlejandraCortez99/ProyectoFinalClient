import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import iNoFavorito from "../../media/favorito.png";
import iFavorito from "../../media/noFavorito.png";
const { useState, useEffect } = React;

const Favorito = () => {
//   let [info, setInfo] = useState({
//       favorito: false,
//   });
//   let { id_artist, id_album, id_track } = useParams();
//   const postFavorito = async () =>{
//     const responseFromPost = await fetch(
//         `http://localhost:2550/guardarFavorito/${id_artist}/${id_album}/${id_track}`,
//         {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             token: window.localStorage.token,
//           },
//         }
//       )
//         .then((res) => res.json())
//         .then((result) => {
//           return result;
//         });
//         setInfo({
//             favorito: responseFromPost
//         });
//   };
//   useEffect(() =>{
//       postFavorito();
//   }, []);
//   if (info.favorito == false){
    return (
        <div>
          <img src={iNoFavorito} alt="icono" height="20" width="20" />
        </div>
     )
//   }
//      else{
//       return (
//           <div>
//               <img src={iFavorito} alt="icono" height="20" width="20" />
//           </div>
//       )
//   };
};
export default Favorito;
