import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">E-BOTO</div>
      <ul className="nav-menu">
        <li className="nav-home">Home</li>
        <li>Voting System</li>
        <li>Login</li>
        <li className="nav-register">
          <NavLink className="nav-register-link" to="/api/register/save">
            Register
          </NavLink>
        </li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
