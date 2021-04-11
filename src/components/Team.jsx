import React from "react";


function TeamValue(props) {
    return (
        <div className="responsive1">
            <div className="gallery1">
                <img src={props.image} alt={props.altText} />
                <div className="description">{props.description}</div>
            </div>
        </div>
    );
}

function Team() {
    return (
            <section id="team">
                    <div className="team-container">
                        <h3>Meet the Team</h3>
                        <p>We are a team of highly focused people, who came up with the idea of creating an app that will give our customers 
                            a taste of authentic home cooked food at their door step.</p>
                    </div>
                    <TeamValue image="../images/team-gifs/arpita.gif" altText="arpita-img" description="Arpita Sharma" />
                    <TeamValue image="../images/team-gifs/simran.gif" altText="simran-img" description="Simranjot Singh" />
                    <TeamValue image="../images/team-gifs/pruthvi.gif" altText="pruthvi-img" description="Pruthviraj Chauhan" />
                    <TeamValue image="../images/team-gifs/jaldeep.gif" altText="jaldeep-img" description="Jaldeep Senjaliya" />
                    <div className="clearfix1"></div>
            </section>
        );   
}

export default Team;
