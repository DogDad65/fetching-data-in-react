import { useState } from 'react';

const WeatherSearch = ({ fetchData }) => {
    const [city, setCity] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchData(city); // Call fetchData with the entered city
      setCity(''); // Clear the input field
    };
  
    return (
      <section>
        <h2>Search</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="city">Enter a city:</label>
          <input
            id="city"
            type="text"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>
    );
  };
  
  export default WeatherSearch;