import React, { useState, useEffect } from "react";
import EachDay from "../EachDay";

var moment = require('moment');

const apiKey = process.env.REACT_APP_API_KEY;

const Today = (props) => {

    const [currentWeather, setCurrentWeather] = useState();
    const [nextFour, setNextFour] = useState(false);
    const [today, setToday] = useState();
    const [tomorrow, setTomorrow] = useState();
    const [dayThree, setDayThree] = useState();
    const [dayFour, setDayFour] = useState();
    const [dayFive, setDayFive] = useState();

    useEffect(() => {
        const getCurrentWeather = async () => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`);
            const currentWeather = await response.json();

            const today = currentWeather.list[0];
            const tomorrow = currentWeather.list[8];
            const dayThree = currentWeather.list[16];
            const dayFour = currentWeather.list[24];
            const dayFive = currentWeather.list[32];

            let newDate = new Date();
            const weekday = currentWeather.list[0].dt * 1000
            newDate.setTime(weekday)

            setToday(today);
            setTomorrow(tomorrow);
            setDayThree(dayThree);
            setDayFour(dayFour);
            setDayFive(dayFive);

            console.log(currentWeather);
        };

        getCurrentWeather();
    }, [props.city]);

    return (
        <div className="wrapper">

            <div className="today">
                <img className="today-image" src={`http://openweathermap.org/img/wn/${today.weather[0].icon}.png`} />
                <span className="current-city">{props.city}</span>
                <div className="today-temp">{Math.round(today.main.temp)}°F</div>
                <div className="today-description">{today.weather[0].description}</div>
                <div className="today-range">{Math.round(today.main.temp_max)}°F / {Math.round(today.main.temp_min)}°F</div>
                <div className="today-feel">Real Feel: {Math.round(today.main.feels_like)}°F</div>
            </div>

            <button className="next-days" onClick={() => setNextFour(!nextFour)}>next four days</button>
            {nextFour &&
            <div className="week">
                <div className="eachDay">
                    <img className="week-image" src={`http://openweathermap.org/img/wn/${tomorrow.weather[0].icon}.png`} />
                    <div className="week-temp">{Math.round(tomorrow.main.temp)}°F</div>
                    <div className="week-description">{tomorrow.weather[0].description}</div>
                </div>
                <div className="eachDay">
                    <img className="week-image" src={`http://openweathermap.org/img/wn/${dayThree.weather[0].icon}.png`} />
                    <div className="week-temp">{Math.round(dayThree.main.temp)}°F</div>
                    <div className="week-description">{dayThree.weather[0].description}</div>
                </div>
                <div className="eachDay">
                    <img className="week-image" src={`http://openweathermap.org/img/wn/${dayFour.weather[0].icon}.png`} />
                    <div className="week-temp">{Math.round(dayFour.main.temp)}°F</div>
                    <div className="week-description">{dayFour.weather[0].description}</div>
                </div>
                <div className="eachDay">
                    <img className="week-image" src={`http://openweathermap.org/img/wn/${dayFive.weather[0].icon}.png`} />
                    <div className="week-temp">{Math.round(dayFive.main.temp)}°F</div>
                    <div className="week-description">{dayFive.weather[0].description}</div>
                </div>
            </div>
            }

        </div>
    )
}

export default Today;