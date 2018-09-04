import React from "react";
import classes from "./DisplayCities.css";

const DisplayCities = (props) => {

    return (
        <div className={classes.Cities}>
            {props.foundCities.map(city => {
                return <button key={city.Key} id={city.Key} name={city.LocalizedName + ", " + city.AdministrativeArea.ID + ", " + city.Country.LocalizedName} onClick={props.click}>{city.LocalizedName + ", " + city.AdministrativeArea.ID + ", " + city.Country.LocalizedName}</button>
            })}
        </div>     
    )
}

export default DisplayCities;