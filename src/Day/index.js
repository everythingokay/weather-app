import React from "react";
import moment from "moment";
import Header from "../Header";
import { useForm } from "react-hook-form";

const Day = (props) => {

    console.log(props.location.state.day);
    const eachDay = props.location.state.day;

    // const { register, handleSubmit, reset } = useForm();
    

    return (
        <div className="wrapper">
            <Header className="header"/>
            <div className="today">
                <div className="row1">
                    <img className="today-icon" src={`http://openweathermap.org/img/wn/${eachDay.weather[0].icon}@2x.png`} />
                    <div className="column2">
                        <span className="current-city">{props.city}</span>
                        <span className="today-date">{moment(eachDay.dt_txt).format('dddd, MMMM Do')}</span>
                    </div>
                </div>
                <div className="row2">
                    <span className="today-range">Hi {Math.round(eachDay.main.temp_max)}° &nbsp;&nbsp; Lo {Math.round(eachDay.main.temp_min)}°</span>
                    <span className="today-temp">{Math.round(eachDay.main.temp)}°</span>
                    <span className="today-feel">feels like {Math.round(eachDay.main.feels_like)}°F</span>
                </div>
                <div className="row3">
                    <span className="today-description">{eachDay.weather[0].description}</span>
                    {/* <span className="next-days" onClick={() => setNextDays(!nextDays)}><img className="arrow" src={imgsrc} /></span> */}
                </div>
            </div>
        </div>
    )
}

export default Day;