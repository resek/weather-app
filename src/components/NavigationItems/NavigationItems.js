import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import classes from "./NavigationItems.css";

const firstDiv = {
    justifySelf: "right",
    alignSelf: "center"
};

const secondDiv = {
    justifySelf: "left",
    alignSelf: "center"
};

const NavigationItems = () => {

    return (
        <Fragment>
            <div style={firstDiv} className={classes.NavigationItems}>
                <NavLink to="/" exact activeClassName={classes.active}>Now</NavLink> 
            </div>
            <div style={secondDiv} className={classes.NavigationItems}>
                <NavLink to="/days" activeClassName={classes.active}>5 days</NavLink>   
            </div>            
        </Fragment>             
    )
}

export default NavigationItems;