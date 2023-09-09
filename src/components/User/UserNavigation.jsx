import React from 'react'
import { NavLink } from 'react-router-dom'
import "./User.css"
import { userNavigation } from '../../Constants/Contant'

function UserNavigation() {
    return (
        <ul className="user-navigation">
            {userNavigation.map(({ id, title, path }) => {
                return <li className="user-navigation_item" key={id}>
                    <NavLink to={path}>{title}</NavLink>
                </li>
            })}
        </ul>
    )
}

export default UserNavigation