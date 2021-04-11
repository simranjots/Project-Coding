import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Mission from "./Mission"
import GetStarted from "./GetStarted";
import SnapshotContainer from "./SnapshotContainer";
import SnapshotGallary from "./SnapshotGallary";
import City from "./City"
import Team from "./Team";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Header />
            <Banner />
            <Mission />
            <GetStarted />
            <City />
            <SnapshotContainer />
            <SnapshotGallary />
            <Team />
            <Footer />
        </div>
    );
}


export default App;