import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="col-2">
        <div className="weather-forecast-date">Monday</div>
        <img
          className="weather-icon forecast-icon"
          id="current-weather-icon"
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
        />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-min">
            {/* ${Math.round(forecastDay.temp.max)}° */} 60°
          </span>
          <span className="weather-forecast-temperature-max">
            {/* ${Math.round(forecastDay.temp.min)}° */} 75°
          </span>
        </div>
      </div>
    </div>
  );
}
