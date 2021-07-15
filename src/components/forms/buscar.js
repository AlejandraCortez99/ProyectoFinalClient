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
    redirect();
  };
  const redirect = () => {
      let nombreCancion = info.cancion;
    history.push(`/resultadosCanciones/${nombreCancion}`);
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
        <input type="submit" value="Buscar cancion" />
      </form>

      <form>
        <input
          type="text"
          name="buscador"
          placeholder="Bucar Artista"
          onChange={handleChangeArtista}
        />
        <input type="submit" value="Buscar artista" />
      </form>
    </div>
  );
};
export default Buscar;
