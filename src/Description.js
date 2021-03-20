import React from "react";
import "./Description.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Description() {

  let descriptionData = {
    humidity: "Humidity: 80%",
    wind: "Wind: 10mph",
    alt: "Sunny"
  };

  return (
    <div className="Description">
      <div className="row">
        <div className="col-5 text-center">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={42}
            animate={true}
          />
        </div>
        <div className="col-7">
          <ul>
            <li>{descriptionData.humidity}</li>
            <li>{descriptionData.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
