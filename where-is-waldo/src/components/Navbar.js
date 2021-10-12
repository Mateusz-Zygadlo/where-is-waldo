import React from 'react';
import Timer from './Timer';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = (props) => {
    return(
        <div className='navbar'>
            <div className="home"><Link to='/'>Home</Link></div>
            <Timer {...props} />
            <div className="navbar-characters">One</div>
        </div>
    )
}

export default NavBar;