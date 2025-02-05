import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/Pag1" > Pagina 1 </NavLink>
      <NavLink to="/Pag2" > Pagina 2 </NavLink>
      <NavLink to="/Pag3" > Pagina 3 </NavLink>
    </nav>
  );
};

export default Navbar;
