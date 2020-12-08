import React from "react";

const Day = (props) => {

    return (
        <div className="wrapper">
            <div className="today">
                <div className="row1">
                    <img className="today-icon" src=""/>
                    <div className="column2">
                        <span className="current-city">test test test</span>
                        <span className="today-date"></span>
                    </div>
                </div>
                {/* <div className="row2">
                    <span className="today-range"></span>
                    <span className="today-temp"></span>
                    <span className="today-feel"></span>
                </div>
                <div className="row3">
                    <span className="today-description"></span>
                    <span className="next-days" onClick={() => setNextDays(!nextDays)}><img className="arrow" src={imgsrc} /></span>
                </div> */}
            </div>
        </div>
    )
}

export default Day;