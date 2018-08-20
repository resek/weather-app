import React from "react";
import classes from "./Button.css"

const Button = (props) => {

    return (
        <div className={classes.Button}>
            <button onClick={props.search}>{props.buttonName}</button>
        </div>
    )
}

export default Button;