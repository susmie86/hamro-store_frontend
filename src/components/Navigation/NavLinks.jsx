import React from 'react'
import { NavLink } from 'react-router-dom'
import CrossIcon from '../../assets/Icons/CrossIcon'

function NavLinks({ className, setIsMenuClicked }) {
    const handleCloseButtonClick = () => {
        setIsMenuClicked(false)
    }
    return (
        <>
            <ul className={`navbar__links ${className}`}>
                <li className="close-icon" onClick={handleCloseButtonClick}>
                    <CrossIcon />
                </li>
                <li className="navbar__link">
                    <NavLink to={"/"}>home</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink to={"/contact"}>contact</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink to={"/about"}>about</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink to={"/signin"}>sign in</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink to={"/signup"}>signup</NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavLinks