import React from "react";
import "./Today.css";


export default function Today() {
  let weatherData = {
    city: "London",
    date: "Tuesday 10:00",
    temperature: 13
  };

  return (
    <div className="Today">
      <div className="row">
        <div className="col-6 text-center">
          <h1>{weatherData.city}</h1>
          <h2>{weatherData.date}</h2>
        </div>
        <div className="col-4 text-center mt-3">
          <strong>{weatherData.temperature}</strong>
          <span className="units">
            <a href="/">°C</a> | <a href="/">°F</a>
          </span>
        </div>
      </div>
    </div>
  );
}
