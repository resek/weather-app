import React from "react";
import classes from "./Days.css"

import PartOfDay from "./PartOfDay/PartOfDay";
import CalculatedDateTime from "../CalculatedDateTime/CalculatedDateTime";

const Days = (props) => {

    const days = props.data.map((day, i) => (
        <div key={i + "dayBlock"} className={classes.DayBlock}>
            <CalculatedDateTime dateTxt={day.Date.substring(0, 10)}/>
            <PartOfDay
                partOfDay="Day" 
                temp={day.Temperature.Maximum.Value}
                description={day.Day.IconPhrase}
                iconCode={day.Day.Icon}
                wind={day.Day.Wind.Speed.Value}
                key={i + "d"} />
            <PartOfDay
                partOfDay="Night" 
                temp={day.Temperature.Minimum.Value}
                description={day.Night.ShortPhrase}
                iconCode={day.Night.Icon}
                wind={day.Night.Wind.Speed.Value}
                key={i + "n"} />
        </div>
    ));

    return (
        <div className={classes.Days}>
            <p className={classes.CityName}>5 days forecast for <b>{props.cityName}</b></p>
            {days}
        </div>             
    )
}

export default Days;