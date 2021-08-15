import React from "react";
import "../styles/main.css"
import Meter from "../components/Meter";
import Excercise from "../components/excercise";

function HomePage(){
    return(
        <div className="maincontainer">
            <Meter />
            <Excercise />
        </div>
    )
}

export default HomePage;

