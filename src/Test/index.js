import React, { useState, useEffect } from "react";
import moment from 'moment';

const Test = (props) => {

    const [nextFour, setNextFour] = useState(false);

    let newDate = new Date();
    const weekday = props.dt * 1000;
    newDate.setTime(weekday)

    if (!props.main) {
        return null;
    }

    return (
        <div>
            <div className="row1">
                <img className="today-icon" src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} />
                <div className="column2">
                    <span className="current-city">{props.city}</span>
                    <span className="today-date">{moment(newDate).format('dddd, MMMM Do')}</span>
            </div>

            </div>
            <div className="row2">
                <span className="today-range">Hi {Math.round(props.main.temp_max)}° &nbsp;&nbsp; Lo {Math.round(props.main.temp_min)}°</span>
                <span className="today-temp">{Math.round(props.main.temp)}°</span>
                <span className="today-feel">feels like {Math.round(props.main.feels_like)}°F</span>
            </div>

            <div className="row3">
                <span className="today-description">{props.weather[0].description}</span>
                <span className="next-days" onClick={() => setNextFour(!nextFour)}><img className="down-arrow" src="./images/down-arrow.svg" /></span>
            </div>
        </div>
    )
}

export default Test;