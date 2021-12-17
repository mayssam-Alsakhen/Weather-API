import React, { Component } from "react";
import { render } from "react-dom";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";

export default class WeatherItem extends Component {
  render() {
    return (
      <div>
          <p className="time">03:00</p>
          <img src={partlycloudy} alt="partlycloudy icon"  placeholder="partlycloudy icon" width={"100px"}/>
          <p className="temp">8°C</p>
      </div>
      );
  }
}
export class MainWeather extends Component {
  render() {
    return (
      <div className="weather"> 
        <img src={partlycloudy} alt="partlycloudy icon" />
        <h4 className="big">overcast clouds</h4>
        <h3>Temperature</h3> <pre className="prefor">   10°  to  11°C</pre>
        <pre className="prefor2"><b>  Humidity</b>   78%   <b>pressure</b>   1008.48 </pre>
      </div>
    );
  }
}
