import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css"; 

interface WeatherProps {
  city: string;
}

const Weather: React.FC<WeatherProps> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<any | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY; // Get API key from environment variables

      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather-container">
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <h3>{weatherData.weather[0].description}</h3>
          <p>{`Temperature: ${weatherData.main.temp}°C`}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;

