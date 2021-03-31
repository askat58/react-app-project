import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";

export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

    function handleCityChange(event) {
      setCity(event.target.value);
    }

    function search() {
      const apiKey = "856531c30ebeae24c48d2152bc04716e";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
      return (
        <div className="Weather">
          <div className="Search">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control form-control-sm w-100"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary btn-sm"
                    autoComplete="off"
                  />
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-info btn-sm">
                    Current location
                  </button>
                </div>
              </div>
            </form>
            <Weatherinfo data={weatherData} />
          </div>
          
         </div>
      );
    } else {
      search();
      return "Loading...";
    }
  }

