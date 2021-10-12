import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

const Home = (props) => {
    return(
        <div className="homePage">
            <h1>Welcome to Where's Waldo game</h1>
            <Link to="/game" onClick={()=>{props.reset()}}>
                <div className="cardOne card">
                    <div className="gameName">Game One</div>
                    <div className="gamePlace">Beach</div>
                </div>
            </Link>
        </div>
    )
}

export default Home;