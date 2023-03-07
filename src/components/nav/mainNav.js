import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <div className="main-nav-container">
      <NavLink to="/" className="main-nav link">
        Home
      </NavLink>
      <NavLink to="/about" className="main-nav link">
        About
      </NavLink>
      <NavLink to="/contact" className="main-nav link">
        Contact
      </NavLink>
    </div>
  );
}
