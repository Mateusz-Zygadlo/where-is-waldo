import React from 'react';
import Timer from '../Timer';
import '../App.css';

const NavBar = (props) => {
    return(
        <div className='navbar'>
            <div className="home">Home</div>
            <Timer {...props} />
            <div className="navbar-characters">One</div>
        </div>
    )
}

export default NavBar;