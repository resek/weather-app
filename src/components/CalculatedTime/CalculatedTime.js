import React from "react";

const CalculatedTime = (props) => {

    const dateObject = new Date(props.dateTxt);
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];   
    
    const currentDay = dateObject.getDay();
    const hour = dateObject.getHours();

    return (
        <p><b>{hour + ":00"}</b> - {daysArr[currentDay]}</p>                
    )
}

export default CalculatedTime;