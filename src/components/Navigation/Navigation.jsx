import { useState } from "react";
import "./Navigation.css";
import NavBar from "./NavBar";
import NavIcons from "./NavIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Container from "../Common/Container";

function Navigation() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => {
      return !prevIsMenuOpen;
    });
  };
  return (
    <nav className="header">
      <Container>
        <div className="navigation">
          <h3 className="logo">
            Hamro <span>Store</span>
          </h3>

          <div className={`links ${isMenuOpen ? "show-menu" : ""}`}>
            <NavBar />
            <NavIcons />
          </div>

          <div className="hamburger-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
