import React from "react";
import "../CalculatedTime/CalculatedTime";

import classes from "./Day.css";
import CalculatedTime from "../CalculatedTime/CalculatedTime";

const Day = (props) => {

    return (
        <div className={classes.Day}>
            <CalculatedTime dateTxt={props.date} />
            <img src={require("../../assets/weatherIcons/" + props.iconCode + ".png")} alt="weatherIcon" />
            <p>{props.temp}&#8451;</p>
            <p>{props.description}</p>
        </div>      
    )
}

export default Day;