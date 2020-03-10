import React from "react";
import axios from "axios";
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

  searchWeather = () => {
    axios
      .get("/data/2.5/weather", {
        params: { q: this.state.cityName }
      })
      .then(result => {
        this.setState({ weatherData: result.data, isFound: true }, () => {
          console.log(this.state.weatherData);
        });
      })
      .catch(error => {
        if (error.response === undefined) {
          this.setState({isFound: false});
          alert("City not found");
        } else if (error.response.status === 400) {
          this.setState({isFound: false});
          alert("Enter city name");
        } else if (error.response.status === 404) {
          this.setState({isFound: false});
          alert("Not Found");
        }
      });
  };

  autoFill = () =>{

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
          <Button variant="contained" color="primary" onClick={() => { this.searchWeather(); }}>
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