import React from 'react'
import './Navbar.css'
import image from '../../assets/download.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={image} alt="" />
            <a>Logout</a>
        </div>
    )
}

export default Navbar
