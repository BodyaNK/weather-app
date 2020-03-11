import React from "react";
import {searchWeather} from './axiosFunctions.js';
import DetailsWeather from './DetailsWeather/weather.js';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class FetchRandomUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
      cityName: "",
      isFound: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({cityName: event.target.value});
  }
  
  render() {
    return (
      <div className="main">
        <div className="searchBlock">
          <TextField 
            id="outlined-basic" 
            label="Enter the city" 
            variant="outlined"
            value={this.state.cityName}
            onChange={this.handleChange}
          />
          <Button variant="contained" color="primary" onClick={() => { searchWeather(this); }}>
            Search
          </Button>
        </div>
        <div className="detailsBlock">
          {this.state.isFound===true 
            ? <DetailsWeather data={this.state.weatherData} /> 
            : ''
          }
        </div>
      </div>
    );
  }
}