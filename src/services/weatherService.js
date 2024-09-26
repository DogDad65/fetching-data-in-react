// src/services/weatherService.js
const API_KEY = '277a99750c0f4c88b26161207242609';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;


const show = async (city) => {
    try {
      const queryString = `&q=${city}`;
      const res = await fetch(BASE_URL + queryString);
      
      // Check if the response is ok
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.error('Error fetching weather data:', err);
    }
  };
  
  export { show };
  
