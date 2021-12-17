import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
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
        <div className="navbar">
          <input type="searsh"  placeholder="Type in a city name"/>
          <div className="b"> <button>FIND WEATHER</button></div>
        </div>
        <div className="weather"> 
        <img src={partlycloudy} alt="partlycloudy icon" />
        <h4 className="big">overcast clouds</h4>
        <h3>Temperature</h3> <pre className="prefor">   10°  to  11°C</pre>
        <pre className="prefor2"><b>  Humidity</b>   78%   <b>pressure</b>   1008.48 </pre>
        </div>

        <div className="weaths">
        <div> <p className="time">03:00</p><img src={partlycloudy} alt="partlycloudy icon"  placeholder="partlycloudy icon" width={"100px"}/> <p className="temp">8°C</p></div>
        <div> <p className="time">06:00</p><img src={partlycloudy} alt="partlycloudy icon"  placeholder="partlycloudy icon" width={"100px"}/> <p className="temp">9°C</p></div>
        <div> <p className="time">09:00</p><img src={clear} alt="clear icon"  placeholder="clear icon" width={"100px"}/> <p className="temp">14°C</p></div>
        <div> <p className="time">12:00</p><img src={clear} alt="clear icon"  placeholder="clear icon" width={"100px"}/> <p className="temp">17°C</p></div>
        <div> <p className="time">15:00</p><img src={clear} alt="clear icon"  placeholder="clear icon" width={"100px"}/> <p className="temp">18°C</p></div>
        <div> <p className="time">18:00</p><img src={clear} alt="clear icon"  placeholder="clear icon" width={"100px"}/> <p className="temp">16°C</p></div>
        <div> <p className="time">21:00</p><img src={partlycloudy} alt="partlycloudy icon" placeholder="partlycloudy icon" width={"100px"}/> <p className="temp">13°C</p></div>
        </div>
      </div>
    );
  }
}

export default App;
