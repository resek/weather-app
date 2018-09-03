import React, {Component, Fragment} from 'react';
import {Route} from "react-router-dom";
import axios from "axios";

import Days from "../../components/Days/Days";
import SearchBar from "../../components/SearchBar/SearchBar";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import NavigationItems from "../../components/NavigationItems/NavigationItems";
import DisplayCities from "../../components/DisplayCities/DisplayCities";
import Spinner from "../../components/UI/Spinner/Spinner";

class ShowWeather extends Component {

    state = {
        currentConditions: null,
        forecast5DaysArr: null,
        foundCitiesArr: null,
        chosenCity: null,
        loading: false,
    }

    searchForCities = event => {

        //empty  cities input
        if (event.target.value.length > 0) {

            let inputText = event.target.value.toLowerCase();

            //accweather autocomplete location API
            axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=69hmmQqCJv4k5dXY4r9rwjjJfzHslQUi&q=${inputText}`)
            .then(response => {
                this.setState({foundCitiesArr: response.data});
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            this.setState({foundCitiesArr: null});
        }        
    }

    getWeatherData = (event) => {
        
        let cityId = event.target.id;
        let cityName = event.target.name;

        this.setState({foundCitiesArr: null, loading: true});

        axios.all([
            axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=69hmmQqCJv4k5dXY4r9rwjjJfzHslQUi&details=true`),
            axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=69hmmQqCJv4k5dXY4r9rwjjJfzHslQUi&details=true&metric=true`)
        ])
        .then(response => {                
            this.setState({
                currentConditions: response[0].data[0],
                forecast5DaysArr: response[1].data.DailyForecasts, 
                chosenCity: cityName,
                loading: false}) 
        })
        .catch(error => {
            console.log(error);
        })
    }

    clearSearchBar = (event) => {
        event.target.value = "";
    }

    render() {
        
        let dataComponents;
        let displayCities;

        if (this.state.loading) {
            dataComponents = <Spinner />;
        }

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

        if (this.state.foundCitiesArr) {
            displayCities = 
                <DisplayCities 
                    click={(event) => this.getWeatherData(event)} 
                    foundCities={this.state.foundCitiesArr} /> 
        }

        return (
            <Fragment>
                <SearchBar 
                    updateSearch={(event) => this.searchForCities(event)} 
                    clearSearch={(event) => this.clearSearchBar(event)} />
                {displayCities}
                {dataComponents}
            </Fragment>
        )            
    }
}

export default ShowWeather;