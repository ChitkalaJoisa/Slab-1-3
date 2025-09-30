import { NavLink } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav>
      <h1>MyApp</h1>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
