import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div>Tuesday</div>
      <div>December 28, 2021</div>
      <div>11:41am</div>
      <hr />
      <div>{props.weather.description}</div>
      <div>
        Feels like: <span>{props.weather.feels_like}</span>°C
      </div>
      <div>
        Humidity: <span>{props.weather.humidity}</span> %
      </div>
      <div>
        Wind: <span>{props.weather.wind}</span> km/h
      </div>
    </div>
  );
}
