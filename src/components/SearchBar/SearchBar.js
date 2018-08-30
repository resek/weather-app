import React from "react";
import classes from "./SearchBar.css";

const SearchBar = (props) => {

    return (
        <div className={classes.SearchBar}>
            <input type="text" onKeyUp={props.updateSearch} placeholder="Search for city"></input>
        </div>
    )
}

export default SearchBar;