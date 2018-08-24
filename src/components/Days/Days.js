import React from "react";
import classes from "./Days.css"
import Day from "./Day/Day";

const Days = (props) => {

    let days;
    const pickedDaysArr = [];     
    const daysArr = props.data.list;
        
        for (var i = 1; i < daysArr.length; i+=2) {
            pickedDaysArr.push(daysArr[i]);
        }          

        days = pickedDaysArr.map((day, i) => (
            <Day 
                date={day.dt_txt}
                temp={day.main.temp.toFixed()}
                description={day.weather[0].description}
                iconCode={day.weather[0].icon}
                wind={day.wind.speed}
                key={i} />
        ));

    return (
        <div className={classes.Days}>
            {days}
        </div>
             
    )
}

export default Days;