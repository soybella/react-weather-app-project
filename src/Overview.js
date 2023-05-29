import React from "react";
import "./styles.css";
import currentWeatherIcon from "./images/emoji-placeholder.png";

export default function Overview() {
  return (
    <div className="current-city-info">
      <div className="row p-3">
        <div className="current-city-detail left col-6">
          <div className="current-city" id="current-city">
            Enter a city...
          </div>
          <div className="current-day" id="current-day-info">
            Thursday 12:00
          </div>
          <div className="current-description" id="current-description">
            Description
          </div>
          <span className="current-humidity">
            Humidity:
            <span className="percentage" id="current-city-humidity-percentage">
              0%
            </span>
          </span>
          <span className="current-wind">
            Wind:
            <span className="wind-mph" id="current-city-wind-mph">
              0mph
            </span>
          </span>
        </div>
        <div className="current-city-detail right col-6">
          <img
            src={currentWeatherIcon}
            className="current-weather-icon"
            id="current-weather-icon"
            alt="current-weather-icon"
          />
          <span className="current-temp" id="current-temp">
            0
          </span>
          <div className="fahrenheit-symbol active" id="fahrenheit-symbol">
            °F
          </div>
        </div>
      </div>
    </div>
  );
}
