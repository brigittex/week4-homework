import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <span id="current-temp-value">{props.weather.temperature}</span>
      <small id="current-unit">°C</small>
    </div>
  );
}
