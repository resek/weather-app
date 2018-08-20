import React from "react";
import classes from "./SearchBar.css";

const SearchBar = (props) => {

    return (
        <div className={classes.SearchBar}>
            <input type="text" placeholder="search location"></input>
        </div>
    )
}

export default SearchBar;