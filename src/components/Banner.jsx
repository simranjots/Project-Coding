import React from "react";

function Banner() {

    return (
        <div className="banner-container">
            <img className="banner" src="../images/main-banner2.jpg" alt="homeFood" />
            <div className="text-centered">
                <h1>HOME FOOD</h1>
                <p>A Taste of authentic home cooked food at your door step.</p>
                <a href="#get-started" ><button className="btn" >Order Your Meal</button></a>
            </div>
        </div>
    );   
}

export default Banner;


