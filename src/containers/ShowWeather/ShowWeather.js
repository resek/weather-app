import React, {Component, Fragment} from 'react';
import {Route} from "react-router-dom";
import axios from "axios";

import Days from "../../components/Days/Days";
import SearchBar from "../../components/SearchBar/SearchBar";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import NavigationItems from "../../components/NavigationItems/NavigationItems";
import DisplayCities from "../../components/DisplayCities/DisplayCities";

class ShowWeather extends Component {

    state = {
        weatherData: null,
        citiesFromDB: null,
    }

    searchForCities = event => {

        //empty input = do not show cities
        if (event.target.value.length > 0) {            
            
            //firs word in a string uppercase
            let text = event.target.value.toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
            .join(' ');

            //firebase filtering data by name
            axios.get(`https://weather-app-df6c0.firebaseio.com/citiesList.json?orderBy="name"&startAt="${text}"&endAt="${text}\uf8ff"&limitToFirst=5&print=pretty`)
            .then(response => {
                let citiesArr = Object.values(response.data);
                this.setState({citiesFromDB: citiesArr});
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            this.setState({citiesFromDB: null});
        }        
    }

    getWeatherData = (event) => {
        let cityId = event.target.id;
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=84a72d1485afbd8a7c20dba340a522b5&units=metric`)
            .then(response => {                
                this.setState({weatherData: response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        
        let dataComponents;
        let displayCities;

        if (this.state.weatherData) {
            dataComponents = (
                <Fragment>
                    <NavigationItems />                    
                    <Route path="/days" render={() => <Days data={this.state.weatherData} /> }/>
                    <Route path="/" exact render={() => <CurrentWeather data={this.state.weatherData} />}/>
                </Fragment>
            )
        }

        if (this.state.citiesFromDB) {
            displayCities = 
                <DisplayCities 
                    click={(event) => this.getWeatherData(event)} 
                    foundCities={this.state.citiesFromDB} /> 
        }

        return (
            <Fragment>
                <SearchBar updateSearch={(event) => this.searchForCities(event)} />
                {displayCities}
                {dataComponents}
            </Fragment>
        )            
    }
}

export default ShowWeather;