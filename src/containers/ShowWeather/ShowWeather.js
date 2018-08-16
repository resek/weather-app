import React, {Component, Fragment} from 'react';
import axios from "axios";

import Day from "../../components/Day/Day";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";

class ShowWeather extends Component {

    state = {
        forecast: null,
    }

    searchAPI = () => {
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Ljubljana&APPID=84a72d1485afbd8a7c20dba340a522b5&units=metric")
            .then(response => {
                this.setState({forecast: response.data});
            })
            .catch(error => {
                console.log(error);
            })
    }
    

    render() {

        let city;
        let dailyForecast;
        let arr = [];

        if (this.state.forecast != null) {
            city = this.state.forecast.city.name;
        }        

        if (this.state.forecast != null) {
            dailyForecast = this.state.forecast.list;
            for (var i = 1; i < dailyForecast.length; i +=8) {
                arr.push(dailyForecast[i]);
            }
        console.log(arr);    
        }        

        return (
            <Fragment>
                <div>
                    <SearchBar />
                </div>
                <div>
                    <Button 
                        buttonName="Search" 
                        search={this.searchAPI} />
                </div>
                <div>
                    {city}
                </div>               
                {arr.map((day, i) => (
                    <Day 
                        date={day.dt_txt}
                        temp={day.main.temp.toFixed()}
                        description={day.weather[0].description}
                        iconCode={day.weather[0].icon}
                        key={i} />
                ))}
            </Fragment>
        )            
    }
}

export default ShowWeather;