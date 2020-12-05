import React, { useState } from "react";
import Today from "../Today";
import "./images/search-symbol.svg";

const Header = (props) => {

    const [current, setCurrent] = useState(false);
    const [city, setCity] = useState('Philadelphia');
    let [cityInput, setCityInput] = useState('');

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

            {current && <Today city={city}/>}

        </div>
    )
}

export default Header;