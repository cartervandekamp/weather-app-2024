// Home.tsx
import axios from 'axios';
import { useState } from 'react';
import Weather from '@/components/Weather';
import Forecast from '@/components/Forecast';

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<IWeather>();
  const [forecastData, setForecastData] = useState<IForecast>();

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

  const getData = async () => {
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error('Error');
    }
  };

  const handleSearch = () => {
    if (location) {
      getData();
    }
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      <header>MDIA 3109 Midterm</header>
      <div>
        <div className={'topContent'}>
        <h1>
        Carter's Weather App!
        </h1>
        <h3>Check your local weather in the search bar below.</h3>
        <input
          type="text"
          placeholder="Check your local weather..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      </div>
      {weatherData && <Weather data={weatherData} />}
      {forecastData && <Forecast data={forecastData} />}
      <footer>© 2024 Carter's Weather App</footer>
    </main>
  );
}
