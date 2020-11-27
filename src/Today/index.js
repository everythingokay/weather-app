import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;

const Today = (props) => {

    const [currentWeather, setCurrentWeather] = useState([]);

    useEffect(() => {
        const getCurrentWeather = async () => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Philadelphia&appid=${apiKey}&units=imperial`);
            const currentWeather = await response.json();
            setCurrentWeather(currentWeather);
            console.log(currentWeather);
        };
        getCurrentWeather();
    }, []);

    const imgURL = `owf owf-${currentWeather.list[0].weather[0].id} owf-5x`

    return (
        <div>
            <h2>Current Weather</h2>
            <h3>City Name: {currentWeather.city.name}</h3>
            <h3>Temperature: {Math.round(currentWeather.list[0].main.temp)}°F</h3>
            <i className={imgURL}></i>
            <h3>Weather: {currentWeather.list[0].weather[0].description}</h3>
            <h3>High & Low: {Math.round(currentWeather.list[0].main.temp_max)}°F / {Math.round(currentWeather.list[0].main.temp_min)}°F</h3>
            <h3>Real Feel: {Math.round(currentWeather.list[0].main.feels_like)}°F</h3>
        </div>
    )
}

export default Today;