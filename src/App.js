import React, { Component } from "react";
import Search from "./components/Search";

import {MainWeather} from "./components/WeatherItem.js";
import fakeWeatherData from "./fakeWeatherData.json";

//images
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
//  import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
 import fog from "./img/weather-icons/fog.svg";
 import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
 import partlycloudy from "./img/weather-icons/partlycloudy.svg";
 import rain from "./img/weather-icons/rain.svg";
 import snow from "./img/weather-icons/snow.svg";
//  import unknown from "./img/weather-icons/unknown.svg";

import "./App.css";
import WeatherItem from "./components/WeatherItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  
};

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search />
        <MainWeather />
        <div className="weaths">
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        </div>
      </div>
    );
  }
}

export default App;
