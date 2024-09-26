// src/components/WeatherDetails.jsx
const WeatherDetails = ({ weather }) => {
    // Render weather details if available, otherwise show a message
    return (
      <section>
        <h2>Weather Details</h2>
        {weather.location ? (
          <>
            <p>Location: {weather.location}</p>
            <p>Temperature: {weather.temperature}°F</p>
            <p>Condition: {weather.condition}</p>
            {weather.icon && (
            <img
              src={weather.icon}
              alt={weather.condition}
              style={{ width: '64px', height: '64px' }}/>
            )}   
          </>
        ) : (
          <p>Please enter a city to see the weather details.</p>
        )}
      </section>
    );
  };
  
  export default WeatherDetails;
  