import React from "react";
import "./Description.css";

export default function Description() {
  let descriptionData = {
    humidity: "Humidity: 80%",
    wind: "Wind: 10mph",
    alt: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  };

  return (
    <div className="Description">
      <div className="row">
        <div className="col-5 text-center">
          <img src={descriptionData.imgUrl} alt="{descriptionData.alt}" />
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
