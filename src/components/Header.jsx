import React from "react";

function Header() {
    return (
        <section id="home">
            <div className="navigation-bar">
                <div className="navigation-container">    
                     {/* <a href="#home"><img src="../images/brand-logo.jpg" alt="brand-logo" /></a>    */}
                     <li><a className="brand" href="#home">HomeFood</a></li>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#mission">Mission</a></li>
                        <li><a href="#get-started">Get Started</a></li>
                        <li><a href="#cities">Explore By Cities</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#footer">Get in Touch</a></li>
                    </ul>
                </div> 
            </div>
    </section>
    );
}

export default Header;
