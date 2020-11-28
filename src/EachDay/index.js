import React, { useState, useEffect } from "react";
import Today from "../Today";

const EachDay = (props) => {

    // let newDate = new Date();
    // const weekday = props.dt * 1000
    // newDate.setTime(weekday)

    return (
        <div>
           {props.main.temp}
            {/* <div className="week">
                <div className="eachDay">
                    <img src={props.weather[0].icon} />
                    <div className="week-temp">{Math.round(props.main.temp)}°F</div>
                    <div className="week-description">{props.weather[0].description}</div>
                </div>
            </div> */}
        </div>
    )
}

export default EachDay;