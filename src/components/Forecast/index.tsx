import React from 'react';

interface ForecastProps {
  data: IForecast;
}

const Forecast = ({ data }: ForecastProps) => {

    const newDate = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      };

  const newTemp = (kelvinTemp: number) => (kelvinTemp - 273.15).toFixed(1);
  const weatherIcon: { [key: string]: string } = {
    'Clear': '/icons/clear.svg',
    'Clouds': '/icons/cloud.svg',
    'Rain': '/icons/rain.svg',
    'Sun': '/icons/sun.svg',
    'Wind': '/icons/wind.svg'
  };

  const getWeatherIcon = (condition: string) => {
    const icon = weatherIcon[condition];
    if (icon) {
      return <img src={icon} alt={condition} width="80" height="50" />;
    }
  }


  return (
    <div>
  <h1>5 Day Forecast</h1>
    <div className='forecast'>
      
      {data.list.slice(0, 5).map((item, index) => (
        <div key={index}>
         
          <p> {newDate(item.dt_txt)}</p>
          <h3> {newTemp(item.main.temp)}°C</h3>
        <p>{getWeatherIcon(item.weather[0].main)}</p>
          <p> {item.weather[0].description}</p>
          <p>Wind Speed: {item.wind.speed} m/s</p>
     
        </div>
      ))}
      </div>
    </div>
  );
};

export default Forecast;
