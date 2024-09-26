import { useState } from 'react';
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [weather, setWeather] = useState({});

  // Fetch data from the service function
  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    
    // Create a new weather state object with desired properties
    if (data && data.location && data.current) {
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      };
      setWeather(newWeatherState);
    } else {
      console.error('Incomplete data received from the weather service:', data);
    }
  };

  // Log state to see updates
  console.log('State:', weather);

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;
