// src/App.tsx
import React, { useState } from "react";
import Weather from "./Weather";
import './App.css'

const App = () => {
  const [city, setCity] = useState("Shanghai");

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="App">
       <h1 className="title">Weather Report</h1> 
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={city} onChange={handleCityChange} />
        <button type="submit">Get Weather</button>
      </form>
      <Weather city={city} />
    </div>
  );
};

export default App;
