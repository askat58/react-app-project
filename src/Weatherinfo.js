import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Today">
        <div className="row">
          <div className="col-6 text-center">
            <h1>{props.data.city}</h1>
            <h2>
              <FormattedDate date={props.data.date} />
            </h2>
            <p className="text-capitalize">{props.data.description}</p>
          </div>
          <div className="col-4 mt-3">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>

      <div className="Description">
        <div className="row">
          <div className="col-6">
            <WeatherIcon code={props.data.icon} size={90} />
          </div>
          <div className="col-5">
            <ul>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
              <li>Humidity: {props.data.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
