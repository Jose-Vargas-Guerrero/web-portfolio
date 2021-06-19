import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <> 
        <div className="container-fluid navbar">
        <NavLink to="/" className="logo">Rent a Travel</NavLink>
            <NavLink to="/" className="item">Home</NavLink>
            <NavLink to="/travel" className="item">Contracts</NavLink>
            <NavLink to="/about" className="item">About Us</NavLink>
        </div>
        </>
    )
}

export default Navbar