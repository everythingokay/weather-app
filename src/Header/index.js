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
                 onChange={(event) => {
                     cityInput = event.target.value}}
                 />
                 <button onClick={(event) => {
                     event.preventDefault();
                     setCity(cityInput);}}>go</button>
             </form>
        <Today city={city} />
        </div>
    )
}

export default Header;