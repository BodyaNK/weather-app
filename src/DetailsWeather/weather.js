import React from "react";
import './weather.css';
import {searchMore} from '../axiosFunctions.js';
import Details from './details.js';

class DetailsWeather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            main: '',
            icon: '',
            temp: 0,
            feels_like: 0,
            pressure: 0,
            humidity: 0,
            wind_speed: 0,
            moreData: {},
            found: false
        }
    }
    
    componentDidMount(){
        this.setState({
            city: this.props.data.name,
            main: this.props.data.weather[0].main,
            icon: this.props.data.weather[0].icon,
            temp: this.props.data.main.temp,
            feels_like: this.props.data.main.feels_like,
            pressure: this.props.data.main.pressure,
            humidity: this.props.data.main.humidity,
            wind_speed: this.props.data.wind.speed,
            found: false
        });
    }

    componentWillReceiveProps(nextProps){
        if (this.props.data !== nextProps.data) {
            this.setState({
                city: nextProps.data.name,
                main: nextProps.data.weather[0].main,
                icon: nextProps.data.weather[0].icon,
                temp: nextProps.data.main.temp,
                feels_like: nextProps.data.main.feels_like,
                pressure: nextProps.data.main.pressure,
                humidity: nextProps.data.main.humidity,
                wind_speed: nextProps.data.wind.speed,
                found: false
            });
        }
    }

    render(){
        let date = new Date();
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let today = months[date.getMonth()] + " " +date.getDate();
        let dayOfWeek = weeks[date.getDay()];
        return(
            <div className="wrapper_d">
                <h2 style={{"margin-bottom": "0"}}>Weather in {this.state.city}</h2>
                <p style={{"margin-top": "0"}}>{dayOfWeek}, {today}</p>
                <div className="details">
                <div className="oneday_details">
                    <div className="info_1">
                        <div className="firstRow">
                            <img src={"http://openweathermap.org/img/wn/" + this.state.icon + ".png"} alt=""/>
                            <span>{this.state.main}</span>
                        </div>
                        <p className="temp">{(this.state.temp-273.15).toFixed(1)} °C</p>
                        <p className="fells_temp">Feels like {(this.state.feels_like-273.15).toFixed(1)} °C</p>
                    </div>
                    <div className="info_2">
                        <p className="pressure">Pressure, mm: {this.state.pressure}</p>
                        <p className="humidity">Humidity, %: {this.state.humidity}</p>
                        <p className="speed">Wind, m/s: {this.state.wind_speed}</p>
                    </div>
                </div>
                <button className="showMore" onClick={() => { searchMore(this); }}>Show for 3 days</button>

                {this.state.found===true ? 
                    <Details details={this.state.moreData}/>
                : ''}
                </div>
            </div>
        ); 
    }
}

export default DetailsWeather