import React, {Component, Fragment} from 'react';
import {Route} from "react-router-dom";
import axios from "axios";
import Select from 'react-select';
import classes from "./ShowWeather.css"

import Days from "../../components/Days/Days";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import NavigationItems from "../../components/NavigationItems/NavigationItems";
import Spinner from "../../components/UI/Spinner/Spinner";

class ShowWeather extends Component {

    state = {
        currentConditions: null,
        forecast5DaysArr: null,
        chosenCity: null,
        spinnerLoading: false,
        options: [],
        openMenuOnClick: false,
        selectLoading: false,
    }

    searchForCities = (input, change) => {

        if (change.action === "input-change" && input.length > 0) {
            
            this.setState({selectLoading: true})
            const inputText = input.toLowerCase();
    
            //accweather autocomplete location API
            axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=69hmmQqCJv4k5dXY4r9rwjjJfzHslQUi&q=${inputText}`)
            .then(response => {
                this.setState({options: response.data, selectLoading: false}) 
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            this.setState({options: []});
        }
    }

    getWeatherData = (value) => {

        if (Array.isArray(value) === false) {
            
            const cityId = value.key;
            const cityName = value.label;

            this.setState({
                options: [], 
                spinnerLoading: true,
                currentConditions: null,
                forecast5DaysArr: null });
            
            //get weather data for choosen city
            axios.all([
                axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=69hmmQqCJv4k5dXY4r9rwjjJfzHslQUi&details=true`),
                axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=69hmmQqCJv4k5dXY4r9rwjjJfzHslQUi&details=true&metric=true`)
            ])
            .then(response => {                
                this.setState({
                    currentConditions: response[0].data[0],
                    forecast5DaysArr: response[1].data.DailyForecasts, 
                    chosenCity: cityName,
                    spinnerLoading: false
                }) 
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    render() {
        
        let dataComponents;
        let cities;

        if (this.state.spinnerLoading) {
            dataComponents = <Spinner />;
        }

        //cities recommendations for select menu
        if (this.state.options.length > 0) {
            cities = this.state.options.map (city => {
                return {
                    label: city.LocalizedName + ", " + city.AdministrativeArea.ID + ", " + city.Country.LocalizedName,
                    key: city.Key,
                }
            })
        }

        //weather data for selected city
        if (this.state.currentConditions && this.state.forecast5DaysArr) {
            dataComponents = (
                <Fragment>
                    <NavigationItems />                    
                    <Route path="/days" render={() => 
                        <Days 
                            data={this.state.forecast5DaysArr} 
                            cityName={this.state.chosenCity} /> }/>
                    <Route path="/" exact render={() => 
                        <CurrentWeather 
                            cityName={this.state.chosenCity} 
                            data={this.state.currentConditions} />}/>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <div className={classes.Select}>
                    <Select
                        isLoading={this.state.selectLoading}
                        openMenuOnClick={false}
                        maxMenuHeight={400}
                        blurInputOnSelect={true}
                        placeholder="Search for city"        
                        options={cities}
                        onChange={this.getWeatherData}
                        onInputChange={this.searchForCities} />
                </div>
                {dataComponents}
            </Fragment>
        )            
    }
}

export default ShowWeather;