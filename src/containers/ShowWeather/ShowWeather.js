import React, {Component, Fragment} from 'react';
import axios from "axios";

import Day from "../../components/Day/Day";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";

class ShowWeather extends Component {

    state = {
        forecats: null,
    }

    searchAPI = () => {
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Ljubljana&APPID=84a72d1485afbd8a7c20dba340a522b5")
            .then(response => {
                this.setState({forecats: response.data});
            })
            .catch(error => {
                console.log(error);
            })
    }
    

    render() {

        let city;

        if (this.state.forecats != null) {
            city = this.state.forecats.city.name;
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
            </Fragment>
        )            
    }
}

export default ShowWeather;