import React from "react";
import '../App.css';

const Home = () => {
    return(
        <div className="homePage">
            <h1>Welcome to Where's Waldo game</h1>
            <div className="cardOne card" onClick={()=>{console.log(true)}}>
                <div className="gameName">Game One</div>
                <div className="gamePlace">Beach</div>
            </div>
        </div>
    )
}

export default Home;