import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp" id="current-temp">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="fahrenheit-symbol active" id="fahrenheit-symbol">
          °F |
          <a href="/" className="celsius-symbol" onClick={convertToCelsius}>
            {" "}
            °C{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return "C";
  }
}
