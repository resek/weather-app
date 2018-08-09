import React, {Component, Fragment} from 'react';
import Day from "../../components/Day/Day";

class ShowWeather extends Component {

    render() {
        return (
            <Fragment>
                <Day />
                <Day />
                <Day />                
                <Day />
                <Day />
                <Day />
            </Fragment>
        )            
    }
}

export default ShowWeather;