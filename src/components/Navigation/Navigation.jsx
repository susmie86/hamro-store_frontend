import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import { getUserInfoApiHandler } from "../../Utils/Axios";
import { getDataFromCookies } from "../../Utils/cookieHandler";
import CartIcon from "../../assets/Icons/CartIcon";
import UserIcon from "../../assets/Icons/UserIcon";
import WishlistIcon from "../../assets/Icons/WishlistIcon";
import Container from "../Common/Container";
import LogOut from "../Common/LogOut";
import OverlayModel from "../Common/OverlayModal";
import DropDownMenu from "./DropDownMenu";
import NavLinks from "./NavLinks";
import "./Navigation.css";

function Navigation() {
  const { state, dispatch } = useAppContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const token = getDataFromCookies("accessToken");
      if (token) {
        const response = await getUserInfoApiHandler(token);
        dispatch({ type: "ADD_USER", payload: response.data.data });
      }
    })();
  }, [state.user]);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Show Mobile Menu on hamburger click
  const showMenu = () => {
    setIsMenuClicked(true);
  };
  return (
    <Container>
      <nav className="navbar">
        <h1 className="navbar__logo">
          hamro <span>store</span>
        </h1>

        <NavLinks
          setIsMenuClicked={setIsMenuClicked}
          className={isMenuClicked ? "mobile-menu" : ""}
        />

        <div className="navbar__hamburger" onClick={showMenu}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>

        <ul className="navbar__icons">
          <li className="navbar__icon">
            <Link to={"/cart"}>
              <CartIcon />
            </Link>
            <span className="navbar__icon-badge">{state.cart.length}</span>
          </li>

          <li className="navbar__icon">
            <Link to={"/wishlist"}>
              <WishlistIcon />
            </Link>
            <span className="navbar__icon-badge">{state.wishlist.length}</span>
          </li>

          {state.user ? (
            <li className="navbar__icon user">
              <button
                onClick={() => {
                  setShowDropdown((prevDropDown) => {
                    return !prevDropDown;
                  });
                }}
              >
                {showDropdown && (
                  <DropDownMenu
                    setShowDropdown={setShowDropdown}
                    showDropdown={showDropdown}
                  />
                )}
                <UserIcon />
              </button>
              {showModal && (
                <OverlayModel
                  children={<LogOut closeModal={setShowModal} />}
                  closeModal={setShowModal}
                />
              )}
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </Container>
  );
}

export default Navigation;
