import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
// import currentWeatherIcon from "./images/emoji-placeholder.png";

export default function Overview(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      date: "Thursday 12:00",
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="current-city-info">
        <div className="row p-3">
          <div className="current-city-detail left col-6">
            <div className="current-city" id="current-city">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="current-day" id="current-day-info">
              {weatherData.date}
            </div>
            <div className="current-description" id="current-description">
              {weatherData.description}
            </div>
            <span className="current-humidity">
              Humidity:{" "}
              <span
                className="percentage"
                id="current-city-humidity-percentage"
              >
                {weatherData.humidity}%{" "}
              </span>
            </span>
            <span className="current-wind">
              Wind:{" "}
              <span className="wind-mph" id="current-city-wind-mph">
                {weatherData.wind}mph
              </span>
            </span>
          </div>
          <div className="current-city-detail right col-6">
            <img
              src={weatherData.iconUrl}
              className="current-weather-icon"
              id="current-weather-icon"
              alt={weatherData.description}
            />{" "}
            <span className="current-temp" id="current-temp">
              {Math.round(weatherData.temperature)}
            </span>
            <div className="fahrenheit-symbol active" id="fahrenheit-symbol">
              °F
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "aeb70a31839f16b6t1e99ad4f4bo55e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial
`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
