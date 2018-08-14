import React from "react";
import classes from "./SearchBar.css";

const SearchBar = (props) => {

    return (
        <input className={classes.Input} type="text" placeholder="search location"></input>
    )
}

export default SearchBar;