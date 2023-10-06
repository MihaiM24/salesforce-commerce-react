import React, { useState } from 'react';
import WeatherComponent from './WeatherComponent'; // Import WeatherComponent
import { Heading } from '@salesforce/retail-react-app/app/components/shared/ui'

function WeatherApp() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '31bdd5d47b05ff73a6900a0692d4b2ca';
    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error('Error fetching weather data:', error));
    };

    const handleReset = () => {
        setWeatherData(null);
        setCity('');
    };

    return (
        <div>
            <Heading size="2xl" mb={4}>Weather App</Heading>
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Search</button>
            <WeatherComponent weatherData={weatherData} />
        </div>
    );
}
export default WeatherApp;