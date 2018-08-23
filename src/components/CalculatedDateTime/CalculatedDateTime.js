import React from "react";

const CalculatedDateTime = (props) => {

    const dateObject = new Date(props.dateTxt);
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
    
    const currentDay = dateObject.getDay();
    const hour = dateObject.getHours();
    const currentDate = dateObject.getDate();
    const currentMonth = dateObject.getMonth();

    let time;
    if (hour < 10) {
        time = `0${hour}.00`;
    } else {
        time = `${hour}.00`;
    }

    return (
        <p><b>{time}</b> - {`${daysArr[currentDay]} ${currentDate}. ${monthsArr[currentMonth]}`}</p>                
    )
}

export default CalculatedDateTime;