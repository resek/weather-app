import React from "react";
import classes from "./DisplayCities.css";

const DisplayCities = (props) => {

    return (
        <div className={classes.Cities}>
            {props.foundCities.map(city => {
                return <button key={city.Key} id={city.Key} name={city.LocalizedName} onClick={props.click}>{city.LocalizedName}, {city.Country.ID}</button>
            })}
        </div>     
    )
}

export default DisplayCities;