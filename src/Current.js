import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;

const Current = (props) => {

    const [currentWeather, setCurrentWeather] = useState([]);

    useEffect(() => {
        const getCurrentWeather = async () => {
          const response = await fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Philadelphia&units=imperial", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
            const currentWeather = await response.json();
            setCurrentWeather(currentWeather);

            console.log(currentWeather);
        };
        getCurrentWeather();
    }, []);

    return (
        <div>
            <h2>Current Weather</h2>
            <h3>City Name: {currentWeather.name}</h3>
            <h3>Elements Icon</h3>
            <h3>Weather: {currentWeather.weather[0].description}</h3>
            <h3>Temperature: {currentWeather.main.temp}</h3>
            <h3>High & Low: {currentWeather.main.temp_max} / {currentWeather.main.temp_min}</h3>
            <h3>Real Feel: {currentWeather.main.feels_like}</h3>
        </div>
    )
}


export default Current;