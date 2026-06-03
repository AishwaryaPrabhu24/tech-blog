import { Link } from "react-router-dom";
import logo from "../assets/logo (3).jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="TECHVERSE Logo" />
        <h1 className="logo">TECHVERSE</h1>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/contact">Contact</Link>

      </div>
    </nav>
  );
}

export default Navbar;