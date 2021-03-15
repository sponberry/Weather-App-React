import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
require('dotenv').config();

console.log(process.env);

export default function Weather() {
  let [city, setCity] = useState("");
  let [display, setDisplay] = useState(null);
  let [mainData, setMainData] = useState("");
  let [weatherData, setWeatherData] = useState("");
  let [windData, setWindData] = useState("");

  function changeStoredCity(event) {
    setCity(event.target.value);
  }

  function showData(response) {
    setMainData(response.data.main);
    setWeatherData(response.data.weather[0]);
    setWindData(response.data.wind.speed);
  }

  function newSearch(event) {
    event.preventDefault();
    setDisplay(true);
    if (city.length === 0) {
      alert(`Please enter a city`);
    } else {
      let apiKey = process.env.REACT_APP_API_KEY;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      axios.get(apiUrl).then(showData);
    }
  }

  return (
    <div>
      <form onSubmit={newSearch}>
        <input
          type="search"
          placeholder="Search for city"
          onChange={changeStoredCity}
        />
        <input type="submit" value="Search" />
      </form>
      <WeatherInfo
        displayData={display}
        temp={mainData.temp}
        description={weatherData.description}
        humidity={mainData.humidity}
        wind={windData}
        id={Number(weatherData.id)}
      />
    </div>
  );
}
