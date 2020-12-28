import React from "react";
import "./styles.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrentWeather defaultCity="New York"/>
        <Forecast />
        <p><a href={"https://github.com/alpartida/react-weather-app"} style={{ color: "blueviolet" }} >GitHub link for React Weather App</a></p>
      </div>
    </div>
  );
}
