import React from "react";

const CalculatedTime = (props) => {

    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateObject = new Date(props.dateTxt);
    
    const currentDay = dateObject.getDay();
    const currentDate = dateObject.getDate();
    const currentMonth = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours();

    return (
        <p>{daysArr[currentDay] + currentDate + currentMonth + year + hour}</p>                
    )
}

export default CalculatedTime;