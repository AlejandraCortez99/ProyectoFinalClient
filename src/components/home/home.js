import "./home.css";
import { Link } from "react-router-dom";
import Background from "../../media/background.jpg";

const Home = () => {
  return (
    <div className="home-container">
     
        <h1>Home</h1>
        <Link to="/login" className="link">
            Log In
        </Link>
        <Link to="/signup" className="link">
          Sign Up
        </Link>
        <img src={Background} alt="fondo" />
    </div>
  );
};
export default Home;
