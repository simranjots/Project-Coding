import React from "react";
import getStartedData from "./data";

function GetStartedValue(props) {
    return (
            <div className="column">
                <p><img src={props.image} alt={props.altText} /><br /><br />
                    <h2>{props.sectionHeading}</h2>
                    <h3>{props.sectionDescription}</h3></p>
            </div>
    );
}


function GetStarted() {
    return (
        <section id="get-started">
                <div className="row">
                    <h1>HOW TO ORDER A MEAL</h1>
                    {getStartedData.map (getStartedDataValue => (
                        <GetStartedValue 
                        key={getStartedDataValue.key}
                        image={getStartedDataValue.img} 
                        altText={getStartedDataValue.alt} 
                        sectionHeading={getStartedDataValue.heading} 
                        sectionDescription={getStartedDataValue.description} />
                    ))}
                </div>
         </section>
    );
}

export default GetStarted;