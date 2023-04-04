import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <h1>work digital</h1>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact"></Link>
                    <Link to="/Header">Header</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;