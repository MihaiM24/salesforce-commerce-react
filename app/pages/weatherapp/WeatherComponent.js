import React from "react";
import { Box, Heading} from '@salesforce/retail-react-app/app/components/shared/ui';
import WeatherApp from "./WeatherApp";
const WeatherComponent = ({ weatherData }) => {
    if (!weatherData) {
        return null;
    }
    const weatherGroupColors = {
        '2xx': '#b3a9a9', // Thunderstorm
        '3xx': '#39bdae', // Drizzle
        '5xx': '#344ac3', // Rain
        '6xx': '#e8e9e6', // Snow
        '7xx': '#a7bcb8', // Atmosphere
        '800': '#fbc866', // Clear
        '80x': '#5b968b', // Clouds
    };
    
    const getWeatherGroup = (id) => {
        if (id >= 200 && id < 300) return '2xx';
        if (id >= 300 && id < 400) return '3xx';
        if (id >= 500 && id < 600) return '5xx';
        if (id >= 600 && id < 700) return '6xx';
        if (id >= 700 && id < 800) return '7xx';
        if (id === 800) return '800';
        if (id >= 801 && id < 900) return '80x';
        return null;
    };
  
    const weatherGroup = getWeatherGroup(weatherData.weather[0].id);
   
    return (
        <Box
          p={4}
          bg={weatherGroupColors[weatherGroup] || '#FFFFFF'}
          color={weatherGroupColors[weatherGroup] ? '#FFFFFF' : '#000000'}
        >
            {weatherData && (
                <div>
                <img
                    src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                    alt="Weather Icon"
                    width='80px'
                    height='80px'
                />
                <Heading size="md">The weather in {weatherData.name} is {weatherData.weather[0].description}</Heading>
                <Heading size="xl" mt={3}>{(weatherData.main.temp - 273.15).toFixed(1)}°C</Heading>
                </div>
            )}
        </Box>
    );
};
export default WeatherComponent;