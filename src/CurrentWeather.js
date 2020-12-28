import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function CurrentWeather(props) {

  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const apiKey = "c48220bc58aa270f2b032dac0b7f1917";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    ).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="current-weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        {/* <Forecast city={weatherData.city} /> */}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
};

