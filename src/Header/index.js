import React, { useState } from "react";
import Today from "../Today";

const Header = (props) => {

    const [city, setCity] = useState('Philadelphia');
    var cityInput;

    return (
        <div>
            <form>
                <input
                type="text"
                placeholder="search city"
                onChange={(e) => {cityInput = e.target.value}}/>

                <button onClick={(e) => {
                e.preventDefault();
                setCity(cityInput);}}>go</button>
            </form>

            <Today city={city}/>
        </div>
    )
}

export default Header;