import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

const links = [
    {
        path: '/',
        label: 'Homepage'
    },
    {
        path: '/about',
        label: 'About'
    },
    {
        path: '/products',
        label: 'Products'
    },
    {
        path: '/contacts',
        label: 'Contacts'
    }
]

const MainNavbar = () => {
    return (
        <nav>
            <ul className='list-unstyled d-flex'>
                {links.map((link) => {
                    return (
                        <li className='mx-2' key={link.path}>
                            <NavLink className='custom-links' to={link.path}>{link.label}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default MainNavbar