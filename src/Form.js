import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <div className="Form">
      <form action="submit" className="form-inline" id="submit-city-form">
        <div className="row p-2">
          <div className="col-6">
            <input
              type="text"
              className="search-city form-control"
              id="search-city"
              placeholder="Enter a city..."
              autofocus
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
    </div>
  );
}
