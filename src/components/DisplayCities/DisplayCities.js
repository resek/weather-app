import React from "react";
import classes from "./DisplayCities.css";

const DisplayCities = (props) => {

    return (
        <div className={classes.Cities}>
            {props.foundCities.map(city => {
                return <button key={city.id} id={city.id} onClick={props.click}>{city.name} {city.country}</button>
            })}
        </div>     
    )
}

export default DisplayCities;