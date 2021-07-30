import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const { useEffect } = React;

const Intermedio = (props) => {
  let tipo = props.tipo;
  let params = useParams();
  let history = useHistory();
  console.log(params.texto);
  const redirectResultados = () => {
      if(tipo === "cancion"){
        history.push(`/resultadosCanciones/${params.texto}`);
      }else if(tipo === "artista"){
        history.push(`/resultadosArtistas/${params.texto}`);
      }
  };
  useEffect(() => {
    redirectResultados();
  }, []);

  return (
    <div>
      <h2>hola</h2>
    </div>
  );
};
export default Intermedio;
