import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weatherinfo.css";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Today">
        <div className="row">
          <div className="col-sm-6 text-center">
            <h1>{props.data.city}</h1>
            <h2>
              <FormattedDate date={props.data.date} />
            </h2>
            <p className="text-capitalize">{props.data.description}</p>
          </div>
        </div>
      </div>

      <div className="Description">
        <div className="row">
          <div className="col-4">
            <WeatherIcon code={props.data.icon} size={60} />
          </div>
          <div className="temperatute-now col-4">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4">
            <ul>
              <li className="descript">
                Wind: {Math.round(props.data.wind)}km/h
              </li>
              <li>Humidity: {props.data.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
