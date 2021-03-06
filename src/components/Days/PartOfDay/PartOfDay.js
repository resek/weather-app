import React from "react";

import classes from "./PartOfDay.css";

const Day = (props) => {
    
    return (
        <div className={classes.Day}>
            <p>{props.partOfDay}</p>
            <img src={require(`../../../assets/weatherIcons/${props.iconCode}s.png`)} alt="weatherIcon" />
            <p className={classes.Description}>{props.description}</p>          
            <p>{props.temp}&#8451;</p>            
            <p>{props.wind} km/s</p>
        </div>
    )
}

export default Day;