import React from "react";
import {snapshotGallaryData} from "./data";

function SnapshotGallaryValue(props) {
    return (
            <div className="responsive">
                <div className="gallery">
                    <img src={props.image} alt={props.altText} />
                    <div className="description">{props.imageDescription}</div>
                </div>
            </div>
      );
}


function SnapshotGallary() {
    return(
        <section id="gallary">
        {snapshotGallaryData.map(snapshotGallaryDataValue => (
            <SnapshotGallaryValue key={snapshotGallaryDataValue.key} image={snapshotGallaryDataValue.img} 
            altText={snapshotGallaryDataValue.alt} imageDescription={snapshotGallaryDataValue.description} />
        ))}
         <div className="clearfix"></div>
         </section>
    );
}

export default SnapshotGallary;
