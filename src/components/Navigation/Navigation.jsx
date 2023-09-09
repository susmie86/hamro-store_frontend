import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navigation.css"
import Container from '../Common/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CartIcon from '../../assets/Icons/CartIcon'
import WishlistIcon from '../../assets/Icons/WishlistIcon'
import { useAppContext } from '../../Context/AppContext'
import NavLinks from './NavLinks'

function Navigation() {
    const { state } = useAppContext();
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    // Show Mobile Menu on hamburger click
    const showMenu = () => {
        setIsMenuClicked(true);
    }
    return (
        <Container>
            <nav className="navbar">
                <h1 className="navbar__logo">
                    hamro <span>store</span>
                </h1>

                <NavLinks setIsMenuClicked={setIsMenuClicked} className={isMenuClicked ? "mobile-menu" : ""} />

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
                </ul>
            </nav>
        </Container>
    )
}

export default Navigation