import React from "react";
import classes from "./CurrentWeather.css";
import CalculatedDateTime from "../CalculatedDateTime/CalculatedDateTime";

const CurrentWeather = (props) => {

    const currentDayData = props.data.list[0];

    return (
        <div className={classes.CurrentWeather}>
            <p>Current weather for <b>{props.data.city.name}</b></p>
            <CalculatedDateTime dateTxt={currentDayData.dt_txt}/>
            <p>{currentDayData.main.temp.toFixed()}&#8451;</p>
            <img src={require("../../assets/weatherIcons/" + currentDayData.weather[0].icon + ".png")} alt="weatherIcon" />
            <p>{currentDayData.weather[0].description}</p>
            <p>{Math.round(currentDayData.wind.speed)} m/s</p>            
        </div>              
    )
}

export default CurrentWeather;