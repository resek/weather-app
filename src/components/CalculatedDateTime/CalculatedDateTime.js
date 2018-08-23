import React from "react";

const CalculatedDateTime = (props) => {

    const dateObject = new Date(props.dateTxt);
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
    
    const currentDay = dateObject.getDay();
    const hour = dateObject.getHours();
    const currentDate = dateObject.getDate();
    const currentMonth = dateObject.getMonth();

    return (
        <p><b>{hour + ":00"}</b> - {`${daysArr[currentDay]} ${currentDate}. ${monthsArr[currentMonth]}`}</p>                
    )
}

export default CalculatedDateTime;