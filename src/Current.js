// import React, { useEffect } from "react";

const Current = () => {

    const getCurrentWeather = async () => {
        const response = await fetch("https://rapidapi.p.rapidapi.com/weather/nowcast?lat=42.8237618&lon=-71.2216286&fields=precipitation",{
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "ac746c70afmshf61b131192dee8dp1196e6jsnd3c8866cc424",
              "x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com"
          }
      })
          console.log(response);
      }
      getCurrentWeather();

    return (
        <div>
            <h2>Current Weather</h2>
            <h3>City Name</h3>
            <h3>Elements Icon</h3>
            <h3>Temperature</h3>
            <h3>High & Low</h3>
            <h3>Air Quality</h3>
        </div>
    )
}

export default Current;