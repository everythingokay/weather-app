import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Today from "../Today";
import "./images/search-symbol.svg";

const Header = (props) => {

    const [current, setCurrent] = useState(false);
    const [city, setCity] = useState('Philadelphia');
    let [cityInput, setCityInput] = useState('');

    const { register, handleSubmit, reset } = useForm();

    let main;
    if (current) {
        main = <Today city={city}/>;
    } else {
        main = <div className="title">calm cl&nbsp;&nbsp;uds</div>
    }

    return (
        <div>
            <form className="header">
                <input ref={register} type="text" placeholder="Search city..."
                onChange={(e) => {cityInput = e.target.value}}/>

                <span onClick={(e) => {
                    e.preventDefault();
                    setCity(cityInput);
                    setCurrent(!current);
                    reset();
                }}><img className="search-button" src="./images/search-symbol.svg" /></span>
            </form>

            {main}

        </div>
    )
}

export default Header;