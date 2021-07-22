import React from "react";
import { Link } from "react-router-dom";
import Buscar from "../forms/buscar";

const Navbar = () => {
    return (
        <div className="navbar-container">
        <Link to="/homeUsuario" className="link">
            Mis favoritos
        </Link>
        
        <Buscar />
        
        </div>
    );
};
export default Navbar;