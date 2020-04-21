import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h3><Link to="/" rel="noopener noreferrer"><img src={require('.././compass.svg')} height='50%' width="50%" alt='dw-face' /></Link></h3>
            <ul className="nav-link">
                <Link to="/birds" rel="noopener noreferrer">
                <li>Birds</li>
                </Link>
                <Link to="/cats" rel="noopener noreferrer">
                <li>Cats</li>
                </Link>
                <Link to="/dogs" rel="noopener noreferrer">                
                <li>Dogs</li>
                </Link>
                <Link to="/monkeys" rel="noopener noreferrer"> 
                <li>Monkeys</li>
                </Link>
            </ul>
        </nav>
    )
}


export default Navbar;