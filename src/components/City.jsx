import React from "react";


function CityValue(props) {
    return (
        <div className="responsive1">
            <div className="gallery1">
                <img src={props.image} alt={props.altText} />
                <div className="description">{props.description}</div>
            </div>
        </div>
    );
}

function City() {
    return (
            <section id="cities">
                    <div className="team-container">
                        <h3>Explore Our Service By Cities</h3>
                    </div>
                    <CityValue image="../images/city-images/toronto.jpg" altText="toronto-img" description="Toronto" />
                    <CityValue image="../images/city-images/scarborough.jpg" altText="scarborough-img" description="Scarborough" />
                    <CityValue image="../images/city-images/northyork.jpg" altText="north-york-img" description="North York" />
                    <CityValue image="../images/city-images/etobicoke.jpg" altText="etobicoke-img" description="Etobicoke" />
                    <CityValue image="../images/city-images/mississauga.jpg" altText="mississauga-img" description="Mississauga" />
                    <CityValue image="../images/city-images/brampton.jpg" altText="brampton-img" description="Brampton" />
                    <CityValue image="../images/city-images/hamilton.jpg" altText="hamilton-img" description="Hamilton" />
                    <CityValue image="../images/city-images/kitchener.jpg" altText="kitchner-img" description="Kitchener" />
                    <div className="clearfix1"></div>
            </section>
        );   
}

export default City;
