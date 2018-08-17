import React, {Component, Fragment} from 'react';
import axios from "axios";

import Day from "../../components/Day/Day";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";

class ShowWeather extends Component {

    state = {
        allForecast: null,
        selectedForecasts: null,
    }

    searchAPI = () => {

        let selectedDaysArr = [];        

        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Ljubljana&APPID=84a72d1485afbd8a7c20dba340a522b5&units=metric")
            .then(response => {
                for (var i = 0; i < response.data.list.length; i +=8) {
                    selectedDaysArr.push(response.data.list[i]);
                }
                this.setState({allForecast: response.data, selectedForecasts: selectedDaysArr})
            })
            .catch(error => {
                console.log(error);
            })        
    }

    render() {

        let city;
        let selectedDays;
        
        if (this.state.allForecast) {
            city = this.state.allForecast.city.name;
        }

        if (this.state.selectedForecasts) {

            selectedDays = this.state.selectedForecasts.map((day, i) => {
                return <Day 
                    date={day.dt_txt}
                    temp={day.main.temp.toFixed()}
                    description={day.weather[0].description}
                    iconCode={day.weather[0].icon}
                    key={i} />
            });
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
                {selectedDays}             
            </Fragment>
        )            
    }
}

export default ShowWeather;