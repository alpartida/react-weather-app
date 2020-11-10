import React from "react";
import "./styles.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">     
       <Search /> 
       <CurrentWeather />
       <Forecast />
      </div>
    </div>
  );
}
