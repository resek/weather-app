import React from "react";
import classes from "./CurrentWeather.css";
import CalculatedDateTime from "../CalculatedDateTime/CalculatedDateTime";

const CurrentWeather = (props) => {

    return (
        <div className={classes.CurrentWeather}>
            <p className={classes.CityName}>Current weather for <b>{props.cityName}</b></p>
            <CalculatedDateTime dateTxt={props.data.LocalObservationDateTime.substring(0, 19)}/>            
            <img src={require("../../assets/weatherIcons/" + props.data.WeatherIcon + ".png")} alt="weatherIcon" />
            <div>
                <p className={classes.TempText}>{props.data.Temperature.Metric.Value}&#8451; &nbsp;-</p>
                <p className={classes.TempText}>&nbsp;&nbsp;{props.data.WeatherText}</p>
            </div>
            <p>Wind: {props.data.Wind.Speed.Metric.Value} km/h</p>
            <p>Precipitation in last 3 hours: {props.data.PrecipitationSummary.Past3Hours.Metric.Value} mm</p>
        </div>              
    )
}

export default CurrentWeather;