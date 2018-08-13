import React, {Component, Fragment} from 'react';
import Day from "../../components/Day/Day";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";

class ShowWeather extends Component {

    state = {        
        numberOfDays: ["day", "day", "day"],
    }

    selectDays = (days) => {
        let arr = new Array(days).fill("day");
        this.setState({numberOfDays: arr});
    }
    

    render() {

        const daysOptions = [3, 6, 9];

        return (
            <Fragment>
                <div>
                    {daysOptions.map((option) => (
                        <Button
                            key={option.toString()} 
                            buttonNumber={option}
                            selectDays={() => this.selectDays(option)} />    
                    ))}
                </div>
                <div>
                    <SearchBar />
                </div>
                {this.state.numberOfDays.map((day, i) => (
                    <Day key={i} />
                ))}
            </Fragment>
        )            
    }
}

export default ShowWeather;