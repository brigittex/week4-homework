import React from "react";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div>Tuesday</div>
      <div>December 28, 2021</div>
      <div>11:41am</div>
      <hr />
      <div>Snow</div>
      <div>
        Feels like: <span>-5</span>°C
      </div>
      <div>
        Humidity: <span>93</span> %
      </div>
      <div>
        Wind: <span>9</span> km/h
      </div>
    </div>
  );
}
