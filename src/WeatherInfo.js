import React from "react";
import WeatherImage from "./WeatherImage";
import "./WeatherInfo.css";

export default function WeatherData(props) {
  if (props.displayData) {
    return (
      <ul>
        <li>Temp {Math.round(props.temp)}°C</li>
        <li>{props.description}</li>
        <li>Humidity {props.humidity}</li>
        <li>{props.wind}/mph</li>
        <li>
          <WeatherImage id={Number(props.id)} />
        </li>
      </ul>
    );
  } else {
    return <div></div>;
  }
}
