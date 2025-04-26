import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </nav>
};

export default Navbar;