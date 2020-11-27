import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;

const FiveDay = () => {

    const [fiveDay, setFiveDay] = useState([]);

    useEffect(() => {
        const getFiveDay = async () => {
          const response = await fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Philadelphia&units=imperial", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
            const fiveDay = await response.json();
            setFiveDay(fiveDay);

            console.log(fiveDay);
        };
        getFiveDay();
    }, []);

    return (
        <div>
            <h2>Five Day Forecast</h2>
            <h3>Elements Icon</h3>
            <h3>Temperature</h3>
        </div>
    )
}

export default FiveDay;