import axios from "axios";

const searchWeather = (data) => {
  axios
    .get("/data/2.5/weather", {
      params: { q: data.state.cityName }
    })
    .then(result => {
      data.setState({ weatherData: result.data, isFound: true }, () => {
        console.log(data.state.weatherData);
      });
    })
    .catch(error => {
      if (error.response === undefined) {
        data.setState({isFound: false});
        alert("City not found");
      } else if (error.response.status === 400) {
        data.setState({isFound: false});
        alert("Enter city name");
      } else if (error.response.status === 404) {
        data.setState({isFound: false});
        alert("Not Found");
      }
    });
};
const searchMore = (data) => {
  axios
    .get("/data/2.5/forecast", {
      params: { q: data.state.city }
    })
    .then(result => {
      data.setState({ moreData: result.data, found: true}, () => {
        console.log(data.state.moreData);
      });
    })
    .catch(error => {
      data.setState({found: false});
      alert(error.response);
    });
};
export {searchWeather, searchMore};