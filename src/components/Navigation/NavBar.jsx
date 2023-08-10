import { NavLink } from "react-router-dom";
import { navLinks } from "../../Constants/Contant";

function NavBar() {
  return (
    <ul className="nav-links">
      {navLinks.map(({ id, title, routeTo }) => {
        return (
          <li key={id}>
            <NavLink to={routeTo}>{title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBar;
