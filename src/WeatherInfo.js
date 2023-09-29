import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo p-3">
      <div className="current-city-info">
        <div className="row p-3">
          <div className="current-city-header col-12">
            <div className="current-city" id="current-city">
              <h1>{props.data.city}</h1>
            </div>
            <img
              src={props.data.iconUrl}
              className="weather-icon "
              id="current-weather-icon"
              alt={props.data.description}
            />{" "}
            <div className="current-city-detail temperature pb-3 col-12">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
            <div className="current-city-detail current-information p-2">
              <div className="current-day" id="current-day-info">
                <FormattedDate date={props.data.date} />
              </div>

              <div className="current-description" id="current-description">
                {props.data.description}
              </div>
              <span className="current-humidity">
                Humidity:{" "}
                <span
                  className="percentage"
                  id="current-city-humidity-percentage"
                >
                  {props.data.humidity}%{" "}
                </span>
              </span>
              <span className="current-wind">
                Wind:{" "}
                <span className="wind-mph" id="current-city-wind-mph">
                  {props.data.wind}mph
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
