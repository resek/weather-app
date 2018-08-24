import React, {Component, Fragment} from 'react';
import {Route} from "react-router-dom";
import axios from "axios";

import Days from "../../components/Days/Days";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import NavigationItems from "../../components/NavigationItems/NavigationItems";

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
        
        let dataComponents;

        if (this.state.allForecast) {
            dataComponents = (
                <Fragment>
                    <NavigationItems />                    
                    <Route path="/days" render={() => <Days data={this.state.allForecast} /> }/>
                    <Route path="/" exact render={() => <CurrentWeather data={this.state.allForecast} />}/>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <SearchBar />    
                <Button buttonName="Search" search={this.searchAPI} />
                {dataComponents}         
            </Fragment>
        )            
    }
}

export default ShowWeather;