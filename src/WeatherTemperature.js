import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  // function showCelsius(event) {
  //   event.preventDefault();
  //   setUnit("celsius");
  // }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp" id="current-temp">
          {Math.round(props.fahrenheit)}
        </span>{" "}
        <span className="temperature-symbol active" id="fahrenheit-symbol">
          °F
          {/* <a href="/" className="temperature-symbol" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a> */}
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp" id="current-temp">
          {Math.round(celsius())}
        </span>{" "}
        <span className="temperature-symbol" id="fahrenheit-symbol">
          <a href="/" className="temperature-symbol" onClick={showFahrenheit}>
            °F{" "}
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
