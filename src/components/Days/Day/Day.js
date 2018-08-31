import React from "react";

import classes from "./Day.css";

const Day = (props) => {

    return (
        <div className={classes.Day}>
            <img src={require("../../../assets/weatherIcons/" + props.iconCode + ".png")} alt="weatherIcon" />
            <p>{props.description}</p>          
            <p>{props.temp}&#8451;</p>            
            <p>{props.wind} m/s</p>
        </div>      
    )
}

export default Day;