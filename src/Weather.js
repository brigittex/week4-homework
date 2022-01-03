import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [location, setLocation] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      location: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(true);
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "a825d12564855984e0e5673562cb2c52";
    let units = "metric";
    let apiUrl = `${apiEndpoint}appid=${apiKey}&units=${units}&q=${location}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a location"
        onChange={updateLocation}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li>Location: {weather.location}</li>
          <li>Temperature: {weather.temperature} °C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div className="Weather">{form}</div>;
  }
}
