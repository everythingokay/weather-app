import React, { useState, useEffect } from "react";
import moment from "moment";
import EachDay from "../EachDay";
import { Router } from "@reach/router";
import DayTwo from "../DayTwo";
import "./images/down-arrow.svg";
import "./images/up-arrow.svg";

const apiKey = process.env.REACT_APP_API_KEY;

const Today = (props) => {

    const [nextFour, setNextFour] = useState(false);
    const [currentWeather, setCurrentWeather] = useState({});
    const [today, setToday] = useState({});
    const [tomorrow, setTomorrow] = useState({});
    const [dayThree, setDayThree] = useState({});
    const [dayFour, setDayFour] = useState({});
    const [dayFive, setDayFive] = useState({});

    useEffect(() => {
        const getCurrentWeather = async () => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`);
            const currentWeather = await response.json();

            const today = currentWeather.list[0];
            const tomorrow = currentWeather.list[6];
            const dayThree = currentWeather.list[14];
            const dayFour = currentWeather.list[22];
            const dayFive = currentWeather.list[30];

            setCurrentWeather(currentWeather);
            setToday(today);
            setTomorrow(tomorrow);
            setDayThree(dayThree);
            setDayFour(dayFour);
            setDayFive(dayFive);

            console.log(currentWeather);
        };

        getCurrentWeather();
    }, [props.city]);

    if (!today.weather) {
        return null;
    }

    let imgsrc;
    nextFour ? imgsrc = "./images/up-arrow.svg" : imgsrc = "./images/down-arrow.svg";

    let newDate = new Date();
    const weekday = today.dt * 1000;
    newDate.setTime(weekday)

    let singleDay;
    if (tomorrow) {
        singleDay = "daytwo";
    } else if (dayThree) {
        singleDay = "daythree";
    } else if (dayFour) {
        singleDay = "dayfour";
    } else if (dayFive) {
        singleDay = "dayfive";
    }

    return (
        <div className="wrapper">

            <div className="today">
                <div className="row1">
                    <img className="today-icon" src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`} />
                    <div className="column2">
                        <span className="current-city">{props.city}</span>
                        <span className="today-date">{moment(newDate).format('dddd, MMMM Do')}</span>
                    </div>
                </div>
                <div className="row2">
                    <span className="today-range">Hi {Math.round(today.main.temp_max)}° &nbsp;&nbsp; Lo {Math.round(today.main.temp_min)}°</span>
                    <span className="today-temp">{Math.round(today.main.temp)}°</span>
                    <span className="today-feel">feels like {Math.round(today.main.feels_like)}°F</span>
                </div>
                <div className="row3">
                    <span className="today-description">{today.weather[0].description}</span>
                    <span className="next-days" onClick={() => setNextFour(!nextFour)}><img className="arrow" src={imgsrc} /></span>
                </div>
            </div>

            <div className="week">
                {nextFour && [tomorrow, dayThree, dayFour, dayFive].map((day) => (
                <span className="eachDay"><EachDay weather={day.weather} main={day.main} date={day.dt_txt} singleDay={singleDay} />
                </span>
                ))}
            </div>

            {/* <Router>
                <DayTwo path="/daytwo" current={currentWeather} />
            </Router> */}
        </div>
    )
}

export default Today;