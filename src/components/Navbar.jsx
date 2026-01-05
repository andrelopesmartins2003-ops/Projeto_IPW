import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">F1 WINNERS 🏁</h1>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/worldchampions">Driver World Champions</Link></li>
        <li><Link to="/constructors">Teams World Champions</Link></li>
        <li><Link to="/races">Race Winners</Link></li>
        <li><Link to="/drivers">Drivers</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
