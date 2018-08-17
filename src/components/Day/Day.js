import React from "react";

import classes from "./Day.css";

const Day = (props) => {

    return (
        <div className={classes.Day}>
            <p>{props.date}</p>
            <p>{props.temp}C</p>
            <p>{props.description}</p>
            <img src={require("../../assets/weatherIcons/" + props.iconCode + ".png")} alt="weatherIcon" />
        </div>      
    )
}

export default Day;