import React, {Component, Fragment} from 'react';
import axios from "axios";
import classes from "./ShowWeather.css";

import Day from "../../components/Day/Day";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";

class ShowWeather extends Component {

    state = {
        allForecast: null,
    }

    searchAPI = () => {       

        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Ljubljana&APPID=84a72d1485afbd8a7c20dba340a522b5&units=metric")
            .then(response => {                
                this.setState({allForecast: response.data})
            })
            .catch(error => {
                console.log(error);
            })        
    }

    render() {

        let currentWeather;
        let days;

        console.log(this.state.allForecast);
        
        if (this.state.allForecast) {

            currentWeather = <CurrentWeather data={this.state.allForecast} />
            

            days = this.state.allForecast.list.map((day, i) => (
                <Day 
                    date={day.dt_txt}
                    temp={day.main.temp.toFixed()}
                    description={day.weather[0].description}
                    iconCode={day.weather[0].icon}
                    key={i} />
            ))
        }

        return (
            <Fragment>
                <SearchBar />    
                <Button buttonName="Search" search={this.searchAPI} />
                {currentWeather}
                <div className={classes.FiveDays}>
                    {days}
                </div>
            </Fragment>
        )            
    }
}

export default ShowWeather;