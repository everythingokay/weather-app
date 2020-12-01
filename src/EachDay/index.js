import React from "react";
import moment from 'moment';

const EachDay = (props) => {

    // let newDate = new Date();
    // const weekday = props.dt * 1000;
    // newDate.setTime(weekday)

    return (
        <div>
            <div className="week-date">{moment(props.date).format('dddd')}</div>
            <img className="week-icon" src={`http://openweathermap.org/img/wn/${props.weather[0].icon}.png`} />
            <div className="week-temp">{Math.round(props.main.temp)}°F</div>
            <div className="week-description">{props.weather[0].description}</div>
        </div>
    )
}

export default EachDay;