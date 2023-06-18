import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./styles.css";

export default function Overview(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function search() {
    const apiKey = "aeb70a31839f16b6t1e99ad4f4bo55e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial
`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // alert(city);
    // search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Overview">
        <form
          onSubmit={handleSubmit}
          className="form-inline"
          id="submit-city-form"
        >
          <div className="row p-2">
            <div className="col-6">
              <input
                type="text"
                className="search-city form-control"
                id="search-city"
                placeholder="Enter a city..."
                autofocus
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="search-button btn btn-primary form-control"
                id="search-city-button"
                value="Search"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="current-button btn btn-primary form-control"
                id="current-city-button"
                value="Current"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast forecast={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
