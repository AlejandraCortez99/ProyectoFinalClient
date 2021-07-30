import React from "react";
import { useHistory } from "react-router-dom";
const useState = React.useState;

const Buscar = () => {
  let [info, setInfo] = useState({
    cancion: "",
    artista: "",
  });

  const handleChangeCancion = (event) => {
    let value = event.target.value;
    setInfo({
      ...info,
      cancion: value,
    });
  };
  const handleChangeArtista = (event) => {
    let value = event.target.value;
    setInfo({
      ...info,
      artista: value,
    });
  };

  let history = useHistory();

  let enviarCancion = (event) => {
    event.preventDefault();
    redirectCancion();
  };

  const redirectCancion = () => {
    let nombreCancion = info.cancion;
    history.push(`/intermedioCancion/${nombreCancion}`);
  };

  let enviarArtista = (evento) => {
    evento.preventDefault();
    redirectArtista();
  };

  const redirectArtista = () => {
    let nombreArtista = info.artista;
    history.push(`/intermedioArtista/${nombreArtista}`);
  };

  return (
    <div>
      <form onSubmit={enviarCancion}>
        <input
          type="text"
          name="buscador"
          placeholder="Bucar Cancion"
          onChange={handleChangeCancion}
        />
        <input type="submit" value="Buscar cancion" className="botones"/>
      </form>
      <form onSubmit={enviarArtista}>
        <input
          type="text"
          name="buscador"
          placeholder="Bucar Artista"
          onChange={handleChangeArtista}
        />
        <input type="submit" value="Buscar artista" className="botones" />
      </form>
    </div>
  );
};
export default Buscar;
