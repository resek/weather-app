import React from "react";

const CalculatedTime = (props) => {

    const dateObject = new Date(props.dateTxt);
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];   
    
    const currentDay = dateObject.getDay();
    const hour = dateObject.getHours();
    
    let time;
    if (hour < 10) {
        time = `0${hour}.00`;
    } else {
        time = `${hour}.00`;
    }

    return (
        <p>{daysArr[currentDay]} - <b>{time}</b></p>                
    )
}

export default CalculatedTime;