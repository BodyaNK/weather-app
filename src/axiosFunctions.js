import axios from "axios";

export default function searchWeather(){
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