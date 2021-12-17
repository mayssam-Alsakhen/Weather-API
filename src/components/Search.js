import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="navbar">
          <input type="searsh"  placeholder="Type in a city name"/>
          <div className="b"> <button>FIND WEATHER</button></div>
      </div>
    );
  }
}
export default Search;
