import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
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
          </div>
          <div className="Today">
            <div className="row">
              <div className="col-6 text-center">
                <h1>{weatherData.city}</h1>
                <h2>{weatherData.date}</h2>
                <p className="text-capitalize">{weatherData.description}</p>
              </div>
              <div className="col-4 text-center mt-3">
                <strong>{Math.round(weatherData.temperature)}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>

          <div className="Description">
            <div className="row">
              <div className="col-5 text-center">
                <img src={weatherData.iconUrl} alt={weatherData.description}/>
              </div>
              <div className="col-7">
                <ul>
                  <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                </ul>
              </div>
            </div>
          </div>
         </div>
      );
    } else {
      search();
      return "Loading...";
    }
  }

