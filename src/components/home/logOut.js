import { Link } from "react-router-dom";
import Ejection from "../../media/ejection.gif";
import "../home/home.css";
const LogOut = ()=>{
    return(
        <div className="ejection">
            <img src={Ejection} alt="exit"/>
            <h1>¡Vaya...!¡Autorización fallida...!</h1>
            <Link to="/" className="home-link">
                Return
            </Link>
        </div>
    )
}
export default LogOut;