import React, { useState, useEffect } from "react";
import Header from "../Header";

const apiKey = process.env.REACT_APP_API_KEY;

const Today = (props) => {

    // const [currentWeather, setCurrentWeather] = useState([]);
    const [today, setToday] = useState([]);

    useEffect(() => {
        const getCurrentWeather = async () => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`);
            const currentWeather = await response.json();
            const today = currentWeather.list[0];
            setToday(today);
            console.log(currentWeather);
        };
        getCurrentWeather();
    }, [props.city]);

    // const imgURL = `owf owf-${today.weather[0].id} owf-5x`
    if (!today.main) { 
        return null; 
      }

    return (
        <div>
            <h2>Current Weather</h2>
            <h3>Temperature: {Math.round(today.main.temp)}°F</h3>
            <h3>Weather: {today.weather[0].description}</h3>
            <h3>High & Low: {Math.round(today.main.temp_max)}°F / {Math.round(today.main.temp_min)}°F</h3>
            <h3>Real Feel: {Math.round(today.main.feels_like)}°F</h3>
            {/* <i className={imgURL}></i> */}
        </div>
    )
}

export default Today;