import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="col">
        <div className="weather-forecast-date">{day()}</div>
        <img
          className="weather-icon forecast-icon"
          id="current-weather-icon"
          src={props.data.condition.icon_url}
          alt={props.data.description}
        />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-min">
            {minTemperature()}
          </span>
          <span className="weather-forecast-temperature-max">
            {maxTemperature()}
          </span>
        </div>
      </div>
    </div>
  );
}
