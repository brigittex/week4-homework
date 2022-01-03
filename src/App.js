import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Weather App </h1>
      <Weather />
      <footer>
        <a
          href="https://github.com/brigittex/week4-homework"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Brigitte Giguère <i className="fab fa-canadian-maple-leaf"></i>
      </footer>
    </div>
  );
}

export default App;
