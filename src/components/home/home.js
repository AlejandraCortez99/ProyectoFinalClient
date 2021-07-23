import "./home.css";
import { Link } from "react-router-dom";
import Background from "../../media/background.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container-links">
        <h1>Home</h1>
        <Link to="/signup" className="home-link">
          Sign Up
        </Link>

        <Link to="/login" className="home-link">
          Log In
        </Link>
      </div>
      <div className="fondo">
        <img src={Background} alt="fondo" />
      </div>
    </div>
  );
};
export default Home;
