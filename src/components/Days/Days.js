import React from "react";
import classes from "./Days.css"
import Day from "./Day/Day";

const Days = (props) => {        

    let days = props.data.map((day, i) => (
        <div className={classes.DayDiv}>
            <Day 
                temp={day.Temperature.Maximum.Value}
                description={day.Day.ShortPhrase}
                iconCode={day.Day.Icon}
                wind={day.Day.Wind.Speed.Value}
                key={i} />
            <Day 
                temp={day.Temperature.Minimum.Value}
                description={day.Night.ShortPhrase}
                iconCode={day.Night.Icon}
                wind={day.Night.Wind.Speed.Value}
                key={i} />
        </div>
    ));

    return (
        <div className={classes.Days}>
            {days}
        </div>             
    )
}

export default Days;