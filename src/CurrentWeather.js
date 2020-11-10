import React from "react";

export default function CurrentWeather() {
  return (
    <div className="current-weather">
      <h3>cloudy</h3>
      <h1>New York</h1>
      <h2>
        <span id="temp"> 19 </span>
        <span className="units">
          <a href="#">C</a> | <a href="#">F</a>{" "}
        </span>
      </h2>
      <div id="date"></div>
      <img id="mainWeatherImage" class="mainWeatherImg" src="" />
    </div>
  );
}
