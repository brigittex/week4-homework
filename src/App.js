import React from "react";
import Weather from "./Weather.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Weather App </h1>
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
