import React, { useState } from "react";
import Today from "../Today";
import "./images/search-symbol.svg";

const Header = (props) => {

    const [current, setCurrent] = useState(false);
    const [city, setCity] = useState('Philadelphia');
    let [cityInput, setCityInput] = useState('');

    let main;
    if (current) {
        main = <Today city={city}/>;
    } else {
        main = <div className="title">calm cl&nbsp;&nbsp;uds</div>
    }

    return (
        <div>
            <form className="header">
                <input type="text" placeholder="Search city..." 
                onChange={(e) => {cityInput = e.target.value}}/>

                <span onClick={(e) => {
                    e.preventDefault();
                    setCity(cityInput);
                    setCurrent(!current);
                }}><img className="search-button" src="./images/search-symbol.svg" /></span>
            </form>

            {main}

        </div>
    )
}

export default Header;