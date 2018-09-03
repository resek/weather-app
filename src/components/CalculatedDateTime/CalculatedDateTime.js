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

    if (props.dateTxt.length > 10) {
        time = " at " + hour + ".00"
     } else  {
        time = "";
    }

    return (
        <p>{`${daysArr[currentDay]} ${currentDate}. ${monthsArr[currentMonth]}${time}`}</p>                
    )
}

export default CalculatedDateTime;