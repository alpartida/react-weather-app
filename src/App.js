import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="city-form">
          <form>
            <input type="text" placeholder="city" />
            <button type="submit" id="submitButton" class="btn btn-secondary">
              Submit
            </button>
            <button id="localButton" class="btn btn-light">
              Current Location
            </button>
          </form>
        </div>
        <div class="current-weather">
          <h3></h3>
          <h1>Search For A City!</h1>
          <h2>
            <span id="temp"></span>
            <span class="units">
              <a href="#">C</a> | <a href="#">F</a>{" "}
            </span>
          </h2>
          <div id="date"></div>
          <img id="mainWeatherImage" class="mainWeatherImg" src="" />
        </div>
        <div class="days">
          <div class="day-1">
            <p>today</p>
          </div>
          <div class="day-2">
            <p>tomorrow</p>
          </div>
        </div>
        <div class="forecast">
          <div class="row">
            <div class="col">
              <h4>now</h4>
              <p>60°</p>
              <i class="fas fa-sun"></i>
            </div>
            <div class="col">
              <h4>noon</h4>
              <p>60°</p>
              <i class="fas fa-cloud-sun"></i>
            </div>
            <div class="col">
              <h4>4pm</h4>
              <p>60°</p>
              <i class="fas fa-cloud-sun"></i>
            </div>
            <div class="col">
              <h5>tonight</h5>
              <p>60°</p>
              <i class="fas fa-cloud-moon-rain"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
