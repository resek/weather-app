import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./NavigationItems.css";

const NavigationItems = () => {

    return (
        <div className={classes.ButtonsDiv}>
            <div className={classes.NavigationItems}>
                <NavLink to="/" exact activeClassName={classes.active}>Now</NavLink> 
            </div>
            <div className={classes.NavigationItems}>
                <NavLink to="/days" activeClassName={classes.active}>5 days</NavLink>   
            </div>            
        </div>             
    )
}

export default NavigationItems;