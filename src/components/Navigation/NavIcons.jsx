// Here are Navigation items to Search Field... Accounts and Card
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

function NavIcons() {
  const { state } = useAppContext();
  const icons = [
    {
      id: 1,
      iconClass: faHeart,
      path: "/wishlist",
    },
    {
      id: 2,
      iconClass: faShoppingCart,
      path: "/cart",
    },
  ];
  return (
    <div className="navIcons">
      <SearchBox />
      <ul className="icons">
        {icons.map(({ id, iconClass, path }) => {
          return (
            <li key={id} className="icon-badge">
              <Link to={path}>
                <FontAwesomeIcon icon={iconClass} />
              </Link>
              <span>
                {path === "/cart" ? state.cart.length : state.wishlist.length}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavIcons;
