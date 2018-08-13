import React from "react";

const Button = (props) => {

    return (
          <button onClick={props.selectDays}>{props.buttonNumber}</button>
    )
}

export default Button;