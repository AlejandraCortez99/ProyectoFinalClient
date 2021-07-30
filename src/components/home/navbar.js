import React from "react";
import { Link } from "react-router-dom";
import Buscar from "../forms/buscar";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <Link to="/homeUsuario" className="link">
          Mis favoritos
        </Link>
      </div>
      <div>
        <Link to="/logOut" className="link">
          Log Out
        </Link>
      </div>
        <Buscar />
    </div>
  );
};
export default Navbar;
