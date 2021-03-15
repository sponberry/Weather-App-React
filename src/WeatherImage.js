import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherImage(props) {
  if (props.id < 600) {
    return (
      <ReactAnimatedWeather
        icon="RAIN"
        color="black"
        size={100}
        animate={true}
      />
    );
  } else if (props.id < 700) {
    return (
      <ReactAnimatedWeather
        icon="SNOW"
        color="black"
        size={100}
        animate={true}
      />
    );
  } else if (props.id < 800) {
    return (
      <ReactAnimatedWeather
        icon="FOG"
        color="black"
        size={100}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="black"
        size={100}
        animate={true}
      />
    );
  }
}
