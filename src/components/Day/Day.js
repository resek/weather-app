import React from "react";
import classes from "./Day.css"

const Day = (props) => {

    console.log(props);
    return (
        <div className={classes.Day}>
            <p>{props.date}</p>
            <p>{props.temp}C</p>
            <p>{props.description}C</p>
            <img src={"http://openweathermap.org/img/w/" + props.iconCode + ".png"}/>
        </div>      
    )
}

export default Day;