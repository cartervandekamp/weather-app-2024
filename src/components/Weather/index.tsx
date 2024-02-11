import React from 'react';

interface WeatherProps {
  data: IWeather;
}

const Weather = ({ data }: WeatherProps) => {
  const newDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const newTemp = (kelvinTemp: number) => (kelvinTemp - 273.15).toFixed(0);
  
  const weatherIcon: { [key: string]: string } = {
    'Clear': '/icons/clear.svg',
    'Clouds': '/icons/cloud.svg',
    'Rain': '/icons/rain.svg',
    'Sun': '//icons/sun.svg',
  };

  const getWeatherIcon = (condition: string) => {
    const icon = weatherIcon[condition];
    if (icon) {
      return <img src={icon} alt={condition} width="90" height="50" />;
    }
  }


  return (
    <div className='currentDay'>
      <h1>{data.name}</h1>
      <h1>{newTemp(data.main.temp)}°C</h1>
      <p>{getWeatherIcon(data.weather[0].main)}</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Last Updated: {newDate(data.dt)}</p>
    </div>
  );
};

export default Weather;

