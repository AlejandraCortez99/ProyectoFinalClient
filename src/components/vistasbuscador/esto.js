 // import React from "react";
// import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";   => No se si lo neceitarás. Si no, puedes borrarlo
// const { useState, useEffect } = React;

// Haz un Alt+Z para que se haga un salto de linea, para ver las notas enteras, en vez de usar el cursor horizontal.

// const Patient = () => {
//     let [state, setState] = useState({
//     identification: "", 
//     name: "",
//     lastname: "",
//     age: "",
//     gender: "",
//     phone: "",
//     address: "",
//     city: "",
//     postalcode: "",
//     auth: false,
//     loading: false,
//     })
//     let identification = useParams(); 
//   // declaramos "identification" (o el nombre que quieras, como si le llamas Pedro, Dni, etc), para decirle que con useParams tome el valor dinamico puesto en la ruta del link del <tr> desde el que hemos clikeado, para usarlo en el fetch. 
//     let getPatient = async () => {
//       let responseFromGet = await fetch(
//         `http://localhost:4000/user/patient/${identification}`,
//         {
//           method: "GET", //Linea 91 del backend (en privateroutes.js) el método es GET 
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             token: window.localStorage.token, //No sé si tenías pensado pasarle un rol al fetch, no creo que sea necesario, porque como el token es único, es el medio de identificacion más seguro y sencillo para tu peticion.
//           },
//     //Por lo que tienes declarado en el backend para la peticion, no necesitas un body, solo el parametro patientId (que aquí le hemos dicho que será el valor que tome la variable "identification", así que lo que había de la linea 31 a la 41, (de este commit que me enseñaste) podrias borrarlo o comentarlo, como tú veas.
//         })
//         .then((response) => response.json())
//         .then((result) => {
//           return result;
//         });
//         setState({
//      //actualizamos la informacion de las propiedades del state de la linea 8, con la informacion devuelta por el fetch. Ver lo que sale del fetch con un console.log(responseFromGet.result) 
//         identification:responseFromGet.result.LaPropiedadQueNecesitas, 
//         name:responseFromGet.result.LaPropiedadQueNecesitas ,
//         lastname:responseFromGet.result.LaPropiedadQueNecesitas ,
//         age:responseFromGet.result.LaPropiedadQueNecesitas ,
//         gender:responseFromGet.result.LaPropiedadQueNecesitas,
//         phone:responseFromGet.result.LaPropiedadQueNecesitas ,
//         address:responseFromGet.result.LaPropiedadQueNecesitas ,
//         city:responseFromGet.result.LaPropiedadQueNecesitas ,
//         postalcode:responseFromGet.result.LaPropiedadQueNecesitas ,
//         auth:responseFromGet.result.LaPropiedadQueNecesitas ,
//         loading:responseFromGet.result.LaPropiedadQueNecesitas ,
//         });
//   };
//   useEffect(() => {
//     getPatient();
//   }, []);
//   if (state.loading === "") {
//     return <div>Cargando...</div>;
//   } else {
//     return (
//       <div>
//         <h1>Comprobamos que hemos llegado a la ruta correcta</h1>
//       </div>
//     )
//   };
// };
// export default Patient;